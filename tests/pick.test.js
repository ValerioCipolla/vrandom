import { pick } from "../lib/pick.js";

it("returns a random item from an array", () => {
  const arr = [1, 2, 3, 4, 5, "hello", true, false];
  const actual = pick(arr);
  expect(arr.includes(actual)).toBeTruthy();
});

it("throws an error when called with not an array", () => {
  const str = "Hello";
  function pickFromStr() {
    pick(str);
  }
  expect(pickFromStr).toThrowError(TypeError(`${str} is not an Array`));
});
