// Test 1 input - Yandex input data

export const mockInput1 = {
  devices: [
    {
      id: "F972B82BA56A70CC579945773B6866FB",
      name: "Посудомоечная машина",
      power: 950,
      duration: 3,
      mode: "night"
    },
    {
      id: "C515D887EDBBE669B2FDAC62F571E9E9",
      name: "Духовка",
      power: 2000,
      duration: 2,
      mode: "day"
    },
    {
      id: "02DDD23A85DADDD71198305330CC386D",
      name: "Холодильник",
      power: 50,
      duration: 24
    },
    {
      id: "1E6276CC231716FE8EE8BC908486D41E",
      name: "Термостат",
      power: 50,
      duration: 24
    },
    {
      id: "7D9DC84AD110500D284B33C82FE6E85E",
      name: "Кондиционер",
      power: 850,
      duration: 1
    }
  ],
  rates: [
    {
      from: 7,
      to: 10,
      value: 6.46
    },
    {
      from: 10,
      to: 17,
      value: 5.38
    },
    {
      from: 17,
      to: 21,
      value: 6.46
    },
    {
      from: 21,
      to: 23,
      value: 5.38
    },
    {
      from: 23,
      to: 7,
      value: 1.79
    }
  ],
  maxPower: 2100
};

// Test 2 input - Choosing the correct range

export const mockInput2 = {
  devices: [
    {
      id: "F972B82BA56A70CC579945773B6866FB",
      name: "Посудомоечная машина",
      power: 1400,
      duration: 4,
      mode: "night"
    },
    {
      id: "C515D887EDBBE669B2FDAC62F571E9E9",
      name: "Духовка",
      power: 1600,
      duration: 5,
      mode: "day"
    },
    {
      id: "02DDD23A85DADDD71198305330CC386D",
      name: "Холодильник",
      power: 100,
      duration: 24
    },
    {
      id: "1E6276CC231716FE8EE8BC908486D41E",
      name: "Термостат",
      power: 150,
      duration: 24
    },
    {
      id: "7D9DC84AD110500D284B33C82FE6E85E",
      name: "Стиральная машина",
      power: 300,
      duration: 2
    }
  ],
  rates: [
    {
      from: 0,
      to: 24,
      value: 4.46
    }
  ],
  maxPower: 1900
};

// Test 3 input - Choosing the cheapest period for one device

export const mockInput3 = {
  devices: [
    {
      id: "F972B82BA56A70CC579945773B6866FB",
      name: "Посудомоечная машина",
      power: 1500,
      duration: 5,
      mode: "night"
    },
    {
      id: "C515D887EDBBE669B2FDAC62F571E9E9",
      name: "Духовка",
      power: 1600,
      duration: 4,
      mode: "day"
    },
    {
      id: "02DDD23A85DADDD71198305330CC386D",
      name: "Холодильник",
      power: 150,
      duration: 24
    },
    {
      id: "1E6276CC231716FE8EE8BC908486D41E",
      name: "Термостат",
      power: 100,
      duration: 24
    },
    {
      id: "7D9DC84AD110500D284B33C82FE6E85E",
      name: "Стиральная машина",
      power: 450,
      duration: 3
    }
  ],
  rates: [
    {
      from: 6,
      to: 13,
      value: 5.62
    },
    {
      from: 13,
      to: 19,
      value: 4.14
    },
    {
      from: 19,
      to: 6,
      value: 2.86
    }
  ],
  maxPower: 1850
};

// Test 4 input - Incorrect rate

export const mockInput4 = {
  devices: [
    {
      id: "F972B82BA56A70CC579945773B6866FB",
      name: "Посудомоечная машина",
      power: 1400,
      duration: 4,
      mode: "night"
    },
    {
      id: "C515D887EDBBE669B2FDAC62F571E9E9",
      name: "Духовка",
      power: 1600,
      duration: 5,
      mode: "day"
    },
    {
      id: "02DDD23A85DADDD71198305330CC386D",
      name: "Холодильник",
      power: 100,
      duration: 24
    },
    {
      id: "1E6276CC231716FE8EE8BC908486D41E",
      name: "Термостат",
      power: 150,
      duration: 24
    },
    {
      id: "7D9DC84AD110500D284B33C82FE6E85E",
      name: "Стиральная машина",
      power: 300,
      duration: 2
    }
  ],
  rates: [
    {
      from: 0,
      to: 24,
      value: 4.46
    }
  ],
  maxPower: 1900
};

// Test 5 input - Insufficient power

export const mockInput5 = {
  devices: [
    {
      id: "F972B82BA56A70CC579945773B6866FB",
      name: "Посудомоечная машина",
      power: 1400,
      duration: 4,
      mode: "night"
    },
    {
      id: "C515D887EDBBE669B2FDAC62F571E9E9",
      name: "Духовка",
      power: 1600,
      duration: 5,
      mode: "day"
    },
    {
      id: "02DDD23A85DADDD71198305330CC386D",
      name: "Холодильник",
      power: 100,
      duration: 24
    },
    {
      id: "1E6276CC231716FE8EE8BC908486D41E",
      name: "Термостат",
      power: 150,
      duration: 24
    },
    {
      id: "7D9DC84AD110500D284B33C82FE6E85E",
      name: "Стиральная машина",
      power: 1000,
      duration: 24
    }
  ],
  rates: [
    {
      from: 0,
      to: 24,
      value: 4.46
    }
  ],
  maxPower: 1300
};

// Test 6 input - Expensive night

export const mockInput6 = {
  devices: [
    {
      id: "F972B82BA56A70CC579945773B6866FB",
      name: "Посудомоечная машина",
      power: 1400,
      duration: 4,
      mode: "night"
    },
    {
      id: "C515D887EDBBE669B2FDAC62F571E9E9",
      name: "Духовка",
      power: 1600,
      duration: 5,
      mode: "day"
    },
    {
      id: "02DDD23A85DADDD71198305330CC386D",
      name: "Холодильник",
      power: 100,
      duration: 10,
      mode: "night"
    },
    {
      id: "1E6276CC231716FE8EE8BC908486D41E",
      name: "Термостат",
      power: 100,
      duration: 10,
      mode: "night"
    },
    {
      id: "7D9DC84AD110500D284B33C82FE6E85E",
      name: "Стиральная машина",
      power: 1000,
      duration: 3,
      mode: "night"
    }
  ],
  rates: [
    {
      from: 21,
      to: 0,
      value: 1
    },
    {
      from: 0,
      to: 7,
      value: 15
    },
    {
      from: 7,
      to: 21,
      value: 1
    }
  ],
  maxPower: 1600
};

// Test 7 input - Not enough power during working period

export const mockInput7 = {
  devices: [
    {
      id: "F972B82BA56A70CC579945773B6866FB",
      name: "Посудомоечная машина",
      power: 1400,
      duration: 3
    },
    {
      id: "R972B82BA56A70CC579945773B6866FB",
      name: "Алиса",
      power: 200,
      duration: 22
    }
  ],
  rates: [
    {
      from: 0,
      to: 24,
      value: 1
    }
  ],
  maxPower: 1400
};

// Test 8 input - No 24-hour devices

export const mockInput8 = {
  devices: [
    {
      id: "F972B82BA56A70CC579945773B6866FB",
      name: "Посудомоечная машина",
      power: 1150,
      duration: 5,
      mode: "night"
    },
    {
      id: "C515D887EDBBE669B2FDAC62F571E9E9",
      name: "Духовка",
      power: 1000,
      duration: 4,
      mode: "day"
    },
    {
      id: "02DDD23A85DADDD71198305330CC386D",
      name: "Телевизор",
      power: 400,
      duration: 6,
      mode: "day"
    },
    {
      id: "1E6276CC231716FE8EE8BC908486D41E",
      name: "Водонагреватель",
      power: 750,
      duration: 5,
      mode: "night"
    },
    {
      id: "7D9DC84AD110500D284B33C82FE6E85E",
      name: "Стиральная машина",
      power: 350,
      duration: 3
    }
  ],
  rates: [
    {
      from: 3,
      to: 8,
      value: 3.34
    },
    {
      from: 8,
      to: 12,
      value: 4.38
    },
    {
      from: 12,
      to: 20,
      value: 3.12
    },
    {
      from: 20,
      to: 3,
      value: 2.85
    }
  ],
  maxPower: 2000
};

// Test 9 input - Choosing the cheapest period for multiple devices

export const mockInput9 = {
  devices: [
    {
      id: "F972B82BA56A70CC579945773B6866FB",
      name: "Посудомоечная машина",
      power: 1550,
      duration: 5,
      mode: "night"
    },
    {
      id: "C515D887EDBBE669B2FDAC62F571E9E9",
      name: "Духовка",
      power: 1500,
      duration: 4,
      mode: "day"
    },
    {
      id: "02DDD23A85DADDD71198305330CC386D",
      name: "Холодильник",
      power: 150,
      duration: 24
    },
    {
      id: "1E6276CC231716FE8EE8BC908486D41E",
      name: "Телевизор",
      power: 700,
      duration: 8,
      mode: "day"
    },
    {
      id: "7D9DC84AD110500D284B33C82FE6E85E",
      name: "Стиральная машина",
      power: 550,
      duration: 3
    },
    {
      id: "9D9DC2KFU284JDD5G1DG8RK3D5GN45F8",
      name: "Водонагреватель",
      power: 650,
      duration: 6,
      mode: "night"
    }
  ],
  rates: [
    {
      from: 2,
      to: 6,
      value: 1.98
    },
    {
      from: 6,
      to: 13,
      value: 4.78
    },
    {
      from: 13,
      to: 19,
      value: 4.13
    },
    {
      from: 19,
      to: 23,
      value: 5.35
    },
    {
      from: 23,
      to: 2,
      value: 1.22
    }
  ],
  maxPower: 2400
};
