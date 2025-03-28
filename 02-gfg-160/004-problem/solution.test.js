const Solution = require('./solution');

describe('Solution', () => {
  let solution;

  beforeEach(() => {
    solution = new Solution();
  });

  describe('rotateArr', () => {
    it('should rotate an array by d elements', () => {
      const arr = [1, 2, 3, 4, 5];
      solution.rotateArr(arr, 2);
      expect(arr).toEqual([3, 4, 5, 1, 2]);
    });

    it('should handle d greater than array length', () => {
      const arr = [1, 2, 3, 4, 5];
      solution.rotateArr(arr, 7);
      expect(arr).toEqual([3, 4, 5, 1, 2]);
    });

    it('should handle d equal to array length', () => {
      const arr = [1, 2, 3, 4, 5];
      solution.rotateArr(arr, 5);
      expect(arr).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle an empty array', () => {
      const arr = [];
      solution.rotateArr(arr, 2);
      expect(arr).toEqual([]);
    });

    it('should handle a single-element array', () => {
      const arr = [42];
      solution.rotateArr(arr, 1);
      expect(arr).toEqual([42]);
    });
    
    it('should handle d equal to 0', () => {
        const arr = [1, 2, 3, 4, 5];
        solution.rotateArr(arr, 0);
        expect(arr).toEqual([1, 2, 3, 4, 5]);
    });
  });
});
