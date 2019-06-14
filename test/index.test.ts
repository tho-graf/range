import range from '../src';
describe('range tests', () => {
  it('up to 10', () => {
    expect(range(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('from 0 up to 10', () => {
    expect(range(0, 10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('from -2 up to 2', () => {
    expect(range(-2, 2)).toEqual([-2, -1, 0, 1]);
  });

  it('from -2 up to 0', () => {
    expect(range(-2, 0)).toEqual([-2, -1]);
  });

  it('from 0 up to 10 step 4', () => {
    expect(range(0, 10, 4)).toEqual([0, 4, 8]);
  });

  it('from 3 down to 0, step -1', () => {
    expect(range(3, 0, -1)).toEqual([3, 2, 1]);
  });

  it('from 3 down to 0, step -2', () => {
    expect(range(3, 0, -2)).toEqual([3, 1]);
  });

  it('from 3 down to -2, step -2', () => {
    expect(range(3, -2, -2)).toEqual([3, 1, -1]);
  });

  it('0 returns no element', () => {
    expect(range(0)).toEqual([]);
  });

  it('preserve -0', () => {
    expect(range(-0, 1)).toEqual([-0]);
  });

  it('negative range without negative step return empty array', () => {
    expect(range(8, 5)).toEqual([]);
  });
});
