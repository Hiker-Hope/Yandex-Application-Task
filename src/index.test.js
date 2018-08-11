import getSchedule, { createRange } from "./index.js";
import {
  mockInput1,
  mockInput2,
  mockInput3,
  mockInput4,
  mockInput5
} from "./mock";

import { result1, result2, result3, result4, result5 } from "./mock-result";

describe("getSchedule test", () => {
  it("returns correct expected result for mock1", () => {
    const result = getSchedule(mockInput1);
    expect(result).toEqual(result1);
  });

  it("returns correct expected result for mock2", () => {
    const result = getSchedule(mockInput2);
    expect(result).toEqual(result2);
  });

  it("returns correct expected result for mock3", () => {
    const result = getSchedule(mockInput3);
    expect(result).toEqual(result3);
  });

  it("returns correct expected result for mock4", () => {
    const result = getSchedule(mockInput4);
    expect(result).toEqual(result4);
  });

  it("returns correct expected result for mock5", () => {
    const result = getSchedule(mockInput5);
    expect(result).toEqual(result5);
  });
});

describe("createRange tests", () => {
  it("returns correct range in day boundary", () => {
    const range = createRange(7, 10);
    expect(range).toEqual([7, 8, 9]);
  });

  it("returns correct range out of day boundary", () => {
    const range = createRange(23, 3);
    expect(range).toEqual([23, 0, 1, 2]);
  });
});
