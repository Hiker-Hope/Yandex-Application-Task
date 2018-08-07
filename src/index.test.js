import getSchedule, { createRange } from "./index.js";
import { mockInput1 } from "./mock";

import { result1 } from "./mock-result";

describe("getSchedule test", () => {
  it("returns correct expected result for mock1", () => {
    const result = getSchedule(mockInput1);
    expect(result).toEqual(result1);
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
