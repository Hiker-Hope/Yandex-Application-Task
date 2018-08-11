const DAY = [7, 21];
const NIGHT = [21, 7];

const [dayStart, dayEnd] = DAY;
const [nightStart, nightEnd] = NIGHT;
const dayRange = createRange(dayStart, dayEnd);
const nightRange = createRange(nightStart, nightEnd);

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
} = {}) {
  const SCHEDULE = createRange(0, 24).reduce(
    (acc, item, i) => ({ ...acc, [i]: [] }),
    {}
  );
  const USED_DEVICES = [];
  const sortedRates = rates.sort((a, b) => a.value - b.value);

  // Проходим по тарифам, начиная с самого дешевого и пытаемся заполнить час устройствами

  sortedRates.forEach(({ from, to }) => {
    let currentHour = from;
    let endHour = to > 23 ? to - 24 : to;
    do {
      populateHour(currentHour, devices, maxPower, SCHEDULE, USED_DEVICES);
      SCHEDULE[currentHour].sort();
      currentHour++;
      if (currentHour > 23) currentHour = 0;
    } while (currentHour != endHour);
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

function populateHour(
  hour = 0,
  devices = [],
  maxPower = 0,
  schedule = {},
  USED_DEVICES = []
) {
  const possibleDevices = devices.filter(
    device => !USED_DEVICES.includes(device.id) && isHourSuitable(hour, device)
  );
  const sortedDevices = possibleDevices.sort(
    (a, b) => (b.duration == 24 ? 1 : b.power - a.power)
  );

  let currentPower = getCurrentPower(hour, devices, schedule);
  for (let i = 0; i < sortedDevices.length; i++) {
    const device = sortedDevices[i];
    // Не выходим из цикла, т.к. могут оказаться маломощные приборы, которые все еще можно добавить

    if (currentPower + device.power > maxPower) {
      continue;
    }

    currentPower += device.power;
    USED_DEVICES.push(device.id);
    let currentHour = hour;
    for (let i = 0; i < device.duration; i++) {
      schedule[currentHour].push(device.id);
      currentHour++;
      if (currentHour > 23) currentHour = 0;
    }
  }
}

function getCurrentPower(index = 0, devices = [], schedule = {}) {
  const hour = schedule[index];
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

// TODO учитывать power на протяжении работы

function isHourSuitable(hour, device = {}) {
  if (!hour && hour !== 0) return;

  const { mode, duration } = device;
  if (!mode) {
    return true;
  }

  const endHour = hour + duration > 24 ? hour + duration - 24 : hour + duration;

  if (mode == "day") {
    return dayRange.includes(hour) && dayRange.includes(endHour);
  }
  return nightRange.includes(hour) && nightRange.includes(endHour);
}

function formatNumber(num = 0) {
  return +num.toFixed(4);
}
