import { pick } from "../lib/pick.js";

it("returns a random item from an array", () => {
  const arr = [1, 2, 3, 4, 5, "hello", true, false];
  const actual = pick(arr);
  expect(arr.includes(actual)).toBeFalsy();
});
