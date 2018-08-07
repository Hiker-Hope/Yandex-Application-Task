const SCHEDULE = createRange(0, 24).reduce(
  (acc, item, i) => ({ ...acc, [i]: [] }),
  {}
);
const DAY = [7, 21];
const NIGHT = [21, 7];

const [dayStart, dayEnd] = DAY;
const [nightStart, nightEnd] = NIGHT;
const dayRange = createRange(dayStart, dayEnd);
const nightRange = createRange(nightStart, nightEnd);

const USED_DEVICES = [];

export function createRange(startAt = 0, endAt = 0) {
  const size = endAt - startAt;
  if (size >= 0) {
    return [...Array(endAt - startAt).keys()].map(i => i + startAt);
  }
  const tillMidnight = [...Array(24 - startAt).keys()].map(i => i + startAt);
  const pastMidnight = [...Array(endAt).keys()];
  return [...tillMidnight, ...pastMidnight];
}

export default function getSchedule({
  devices = [],
  rates = [],
  maxPower = 0
}) {
  const sortedRates = rates.sort((a, b) => a.value - b.value);

  // Проходим по тарифам, начиная с самого дешевого и пытаемся заполнить час устройствами

  sortedRates.forEach(({ from, to }) => {
    let currentHour = from;
    while (currentHour != to) {
      populateHour(currentHour, devices, maxPower);
      SCHEDULE[currentHour].sort();
      currentHour++;
      if (currentHour > 23) currentHour = 0;
    }
  });
  const result = {};
  result.schedule = SCHEDULE;
  result.consumedEnergy = getConsumedEnergy(SCHEDULE, devices, rates);
  return result;
}

function getConsumedEnergy(schedule = {}, devices = [], rates = []) {
  const rateRanges = rates.map(({ from, to, value }) => [
    { value },
    ...createRange(from, to)
  ]);
  const result = {};
  result.value = 0;
  result.devices = devices.reduce((devices, device) => {
    const { id, power } = device;

    // Находим часы, когда использовалось устройство

    const hoursOfUse = Object.keys(schedule).filter(key =>
      schedule[key].includes(id)
    );

    // Находим стоимость часа, когда прибор использовался

    const valuePerHour = hoursOfUse
      .map(hour => rateRanges.find(range => range.includes(+hour))[0].value)
      .map(value => (power / 1000) * value);

    // Находим стоимость, затраченную прибором за все часы использования

    const total = valuePerHour.reduce((total, value) => (total += value), 0);

    // Прибавляем эту стоимость к стоимости всех приборов

    result.value += total;

    // Приводим к нужному формату

    devices[id] = formatNumber(total);
    return devices;
  }, {});

  result.value = formatNumber(result.value);
  return result;
}

function populateHour(hour = 0, devices = [], maxPower = 0) {
  const possibleDevices = devices.filter(
    device => !USED_DEVICES.includes(device.id) && isHourSuitable(hour, device)
  );
  const sortedByPower = possibleDevices.sort((a, b) => b.power - a.power);

  let currentPower = getCurrentPower(hour, devices);
  for (let i = 0; i < sortedByPower.length; i++) {
    const device = sortedByPower[i];

    // Не выходим из цикла, т.к. могут оказаться маломощные приборы, которые все еще можно добавить

    if (currentPower + device.power > maxPower) {
      continue;
    }

    currentPower += device.power;
    USED_DEVICES.push(device.id);
    let currentHour = hour;
    for (let i = 0; i < device.duration; i++) {
      SCHEDULE[currentHour].push(device.id);
      currentHour++;
      if (currentHour > 23) currentHour = 0;
    }
  }
}

function getCurrentPower(index = 0, devices = []) {
  const hour = SCHEDULE[index];
  return (
    hour &&
    hour.reduce((total, id) => {
      const device = devices.find(item => item.id == id) || {};
      const { power } = device;
      total += power;
      return total;
    }, 0)
  );
}

// TODO учитывать mode на окончание действия
// TODO учитывать power на протяжении работы

function isHourSuitable(hour, device = {}) {
  if (!hour) return;

  const { mode } = device;
  if (!mode) {
    return true;
  }

  if (mode == "day") {
    return dayRange.includes(hour);
  }

  return nightRange.includes(hour);
}

function formatNumber(num = 0) {
  return +num.toFixed(4);
}
