import getSchedule, { createRange } from "./index.js";
import {
  mockInput1,
  mockInput2,
  mockInput3,
  mockInput4,
  mockInput5,
  mockInput6,
  mockInput7,
  mockInput8,
  mockInput9
} from "./mock";

import {
  result1,
  result2,
  result3,
  result5,
  result6,
  result7,
  result8,
  result9
} from "./mock-result";

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
    expect(result).toEqual(result2);
  });

  it("returns correct expected result for mock5", () => {
    const result = getSchedule(mockInput5);
    expect(result).toEqual(result5);
  });

  it("returns correct expected result for mock6", () => {
    const result = getSchedule(mockInput6);
    expect(result).toEqual(result6);
  });

  it("returns correct expected result for mock7", () => {
    const result = getSchedule(mockInput7);
    expect(result).toEqual(result7);
  });

  it("returns correct expected result for mock8", () => {
    const result = getSchedule(mockInput8);
    expect(result).toEqual(result8);
  });

  it("returns correct expected result for mock9", () => {
    const result = getSchedule(mockInput9);
    expect(result).toEqual(result9);
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

  it("returns correct range out of day boundary", () => {
    const range = createRange(3, 0);
    expect(range).toEqual([3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]);
  });

  it("returns empty array", () => {
    const range = createRange(0, 0);
    expect(range).toEqual([]);
  });

  it("returns correct range for incorrect input", () => {
    const range = createRange(23, 26);
    expect(range).toEqual([23, 24, 25]);
  });
});
