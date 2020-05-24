import createMultiplyTable from './multiply-table';

describe('when creating multiply table', () => {
  it('should throw error when option is not provided', () => {
    expect(() => createMultiplyTable()).toThrow();
  });

  it('should throw if start is 0', () => {
    expect(() => createMultiplyTable({ start: 0, end: 2 })).toThrow();
  });

  it('should throw if end is 0', () => {
    expect(() => createMultiplyTable({ start: 0, end: 0 })).toThrow();
  });

  it('should throw if start is negative number', () => {
    expect(() => createMultiplyTable({ start: -1, end: 1 })).toThrow();
  });

  it('should throw if end is negative number', () => {
    expect(() => createMultiplyTable({ start: -2, end: -1 })).toThrow();
  });

  it('should throw if start is larger than end', () => {
    expect(() => createMultiplyTable({ start: 2, end: 1 })).toThrow();
  });

  it.each([
    { start: 1 }, { end: 2 }, {}
  ])('should throw error when start or end is not provided: %p', option => {
    expect(() => createMultiplyTable(option)).toThrow();
  });

  it('should print single expression', () => {
    const table = createMultiplyTable({ start: 3, end: 3 });
    const expected = '3*3=9  \n';

    expect(table).toStrictEqual(expected);
  });

  it('should print multiple expressions', () => {
    const table = createMultiplyTable({ start: 1, end: 3 });
    const expected =
      '1*1=1  \n' +
      '2*1=2  2*2=4  \n' +
      '3*1=3  3*2=6  3*3=9  \n';
    expect(table).toStrictEqual(expected);
  });

  it('should print multiple expression aligned', () => {
    const table = createMultiplyTable({ start: 3, end: 5 });
    const expected =
      '3*3=9   \n' +
      '4*3=12  4*4=16  \n' +
      '5*3=15  5*4=20  5*5=25  \n';
    expect(table).toStrictEqual(expected);
  });

  it('should print table mixed test', () => {
    const table = createMultiplyTable({ start: 7, end: 11 });
    const expected =
      '7*7=49   \n' +
      '8*7=56   8*8=64   \n' +
      '9*7=63   9*8=72   9*9=81   \n' +
      '10*7=70  10*8=80  10*9=90  10*10=100  \n' +
      '11*7=77  11*8=88  11*9=99  11*10=110  11*11=121  \n';
    expect(table).toStrictEqual(expected);
  });
});
