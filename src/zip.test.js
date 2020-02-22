import zip from './zip';

describe('when calling zip', () => {
  it('should return empty array if one of the array is empty', () => {
    const emptyArray = [];
    expect(zip(emptyArray, [1, 2, 3])).toEqual([]);
  });

  it('should return zipped array when they have the same number of items', () => {
    const left = [1, 2, 3];
    const right = [4, 5, 6];

    expect(zip(left, right)).toEqual([[1, 4], [2, 5], [3, 6]]);
  });

  it('should return zipped array according to the shorter one', () => {
    const left = [1, 2];
    const right = [4, 5, 6];

    expect(zip(left, right)).toEqual([[1, 4], [2, 5]]);
  });

  it('should swap result when swap arguments', () => {
    const left = [1, 2];
    const right = [4, 5, 6];

    expect(zip(right, left)).toEqual([[4, 1], [5, 2]]);
  });
});
