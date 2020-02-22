import greeting from './greeting';

describe('when calling greeting', () => {
  it('should return the combined greeting', () => {
    const words = greeting('World');
    expect(words).toStrictEqual('Hello World');
  });
});
