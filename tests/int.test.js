import { int } from "../lib/int.js";

it("returns an integer between min and max, max not included", () => {
  const min = 1;
  const max = 10;
  const actual = int(min, max);
  expect(typeof actual).toBe("number");
  expect(actual).toBeGreaterThanOrEqual(min);
  expect(actual).toBeLessThan(max);
});
