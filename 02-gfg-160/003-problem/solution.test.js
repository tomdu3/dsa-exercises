const Solution = require('./solution');

describe('Solution', () => {
  let solution;

  beforeEach(() => {
    solution = new Solution();
  });

  describe('reverseArray', () => {
    it('should reverse an array with even length', () => {
      const arr = [1, 2, 3, 4];
      solution.reverseArray(arr);
      expect(arr).toEqual([4, 3, 2, 1]);
    });

    it('should reverse an array with odd length', () => {
      const arr = [1, 2, 3, 4, 5];
      solution.reverseArray(arr);
      expect(arr).toEqual([5, 4, 3, 2, 1]);
    });

    it('should handle an empty array', () => {
      const arr = [];
      solution.reverseArray(arr);
      expect(arr).toEqual([]);
    });

    it('should handle a single-element array', () => {
      const arr = [42];
      solution.reverseArray(arr);
      expect(arr).toEqual([42]);
    });

    it('should reverse an array with duplicate elements', () => {
      const arr = [1, 2, 2, 3, 3, 3];
      solution.reverseArray(arr);
      expect(arr).toEqual([3, 3, 3, 2, 2, 1]);
    });

    it('should reverse an array with mixed types', () => {
      const arr = [1, 'two', true, null, { key: 'value' }];
      solution.reverseArray(arr);
      expect(arr).toEqual([{ key: 'value' }, null, true, 'two', 1]);
    });
  });
});