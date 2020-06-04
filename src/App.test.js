import utils from './utils/sort';

const array = [
  { title: 'American Sniper', releaseYear: 2015 },
  { title: 'Life of Crime', releaseYear: 2013 },
];

describe('sorting functions', () => {
  test('should sort title(a-z)', () => {
    const res = array.sort((a, b) => utils['titleAToZ'](a, b));
    expect(res[0].title).toBe('American Sniper');
  });

  test('should sort title(z-a)', () => {
    const res = array.sort((a, b) => utils['titleZToA'](a, b));
    expect(res[0].title).toBe('Life of Crime');
  });

  test('should sort releaseYear(latest to oldest)', () => {
    const res = array.sort((a, b) => utils['releaseYearHighToLow'](a, b));
    expect(res[0].releaseYear).toBe(2015);
  });

  test('should sort releaseYear(oldest to latest)', () => {
    const res = array.sort((a, b) => utils['releaseYearLowToHigh'](a, b));
    expect(res[0].releaseYear).toBe(2013);
  });
});
