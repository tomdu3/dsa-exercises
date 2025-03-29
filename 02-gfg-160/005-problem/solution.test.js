const { Solution } = require("./solution");

describe("nextPermutation", () => {
  let solution;

  beforeEach(() => {
    solution = new Solution();
  });

  test("should return the next permutation [1, 2, 3] -> [1, 3, 2]", () => {
    const arr = [1, 2, 3];
    const result = solution.nextPermutation(arr);
    expect(result).toEqual([1, 3, 2]);
  });

  test("should wrap around for the last permutation [3, 2, 1] -> [1, 2, 3]", () => {
    const arr = [3, 2, 1];
    const result = solution.nextPermutation(arr);
    expect(result).toEqual([1, 2, 3]);
  });

  test("should return the next permutation for [1, 5, 4, 3, 2] -> [2, 1, 3, 4, 5]", () => {
    const arr = [1, 5, 4, 3, 2];
    const result = solution.nextPermutation(arr);
    expect(result).toEqual([2, 1, 3, 4, 5]);
  });

  test("should handle larger arrays correctly [1, 2, 3, 6, 5, 4] -> [1, 2, 4, 3, 5, 6]", () => {
    const arr = [1, 2, 3, 6, 5, 4];
    const result = solution.nextPermutation(arr);
    expect(result).toEqual([1, 2, 4, 3, 5, 6]);
  });

  test("should handle an array with repeated elements [1, 1, 5] -> [1, 5, 1]", () => {
    const arr = [1, 1, 5];
    const result = solution.nextPermutation(arr);
    expect(result).toEqual([1, 5, 1]);
  });

  test("should handle [2, 4, 1, 7, 5, 0] -> [2, 4, 5, 0, 1, 7]", () => {
    const arr = [2, 4, 1, 7, 5, 0];
    const result = solution.nextPermutation(arr);
    expect(result).toEqual([2, 4, 5, 0, 1, 7]);
  });

  test("should handle [3, 4, 2, 5, 1] -> [3, 4, 5, 1, 2]", () => {
    const arr = [3, 4, 2, 5, 1];
    const result = solution.nextPermutation(arr);
    expect(result).toEqual([3, 4, 5, 1, 2]);
  });

  test("should handle an empty array", () => {
    const arr = [];
    const result = solution.nextPermutation(arr);
    expect(result).toEqual([]);
  });

  test("should handle a single element array [1] -> [1]", () => {
    const arr = [1];
    const result = solution.nextPermutation(arr);
    expect(result).toEqual([1]);
  });
});
