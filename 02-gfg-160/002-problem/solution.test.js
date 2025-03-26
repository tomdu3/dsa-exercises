const Solution = require('./solution');

describe('Solution', () => {
  let solution;

  beforeEach(() => {
    solution = new Solution();
  });

  describe('pushZerosToEnd', () => {
    test('should move all zeros to the end while maintaining other elements order', () => {
      const arr1 = [1, 2, 0, 4, 3, 0, 5, 0];
      solution.pushZerosToEnd(arr1);
      expect(arr1).toEqual([1, 2, 4, 3, 5, 0, 0, 0]);

      const arr2 = [1, 0, 2, 0, 0, 3];
      solution.pushZerosToEnd(arr2);
      expect(arr2).toEqual([1, 2, 3, 0, 0, 0]);
    });

    test('should not modify array with no zeros', () => {
      const arr = [1, 2, 3, 4];
      solution.pushZerosToEnd(arr);
      expect(arr).toEqual([1, 2, 3, 4]);
    });

    test('should handle array with all zeros', () => {
      const arr = [0, 0, 0];
      solution.pushZerosToEnd(arr);
      expect(arr).toEqual([0, 0, 0]);
    });

    test('should handle single element array', () => {
      const arr1 = [0];
      solution.pushZerosToEnd(arr1);
      expect(arr1).toEqual([0]);

      const arr2 = [1];
      solution.pushZerosToEnd(arr2);
      expect(arr2).toEqual([1]);
    });

    test('should handle empty array', () => {
      const arr = [];
      solution.pushZerosToEnd(arr);
      expect(arr).toEqual([]);
    });

    test('should maintain relative order of non-zero elements', () => {
      const arr = [0, 1, 0, 3, 12, 0, 8];
      solution.pushZerosToEnd(arr);
      expect(arr).toEqual([1, 3, 12, 8, 0, 0, 0]);
    });

    test('should work with negative numbers', () => {
      const arr = [0, -1, 5, 0, -3, 0];
      solution.pushZerosToEnd(arr);
      expect(arr).toEqual([-1, 5, -3, 0, 0, 0]);
    });
  });
});