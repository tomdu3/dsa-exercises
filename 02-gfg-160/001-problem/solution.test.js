const Solution = require('./solution');

describe('Solution', () => {
  let solution;

  beforeEach(() => {
    solution = new Solution();
  });

  describe('getSecondLargest', () => {
    test('should return the second largest number in an array', () => {
      expect(solution.getSecondLargest([12, 35, 1, 10, 34, 1])).toBe(34);
      expect(solution.getSecondLargest([10, 5, 10])).toBe(5);
      expect(solution.getSecondLargest([-5, -2, -10])).toBe(-5);
    });

    test('should return -1 when array has less than 2 elements', () => {
      expect(solution.getSecondLargest([1])).toBe(-1);
      expect(solution.getSecondLargest([])).toBe(-1);
    });

    test('should return -1 when all elements are the same', () => {
      expect(solution.getSecondLargest([7, 7, 7, 7])).toBe(-1);
      expect(solution.getSecondLargest([0, 0, 0])).toBe(-1);
    });

    test('should work with large arrays', () => {
      const largeArray = Array(10000).fill(0).map((_, i) => i);
      expect(solution.getSecondLargest(largeArray)).toBe(9998);
    });

    test('should work with decimal numbers', () => {
      expect(solution.getSecondLargest([1.5, 2.5, 3.5])).toBe(2.5);
      expect(solution.getSecondLargest([0.1, 0.01, 0.001])).toBe(0.01);
    });
  });
});