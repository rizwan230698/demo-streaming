import utils from './utils/sort';
import { filterData } from './utils/filterData';
import streams from './api/streams';

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

describe('filterData utils function', () => {
  test('should return programType movie, releaseYear >= 2010 and not more than 21 items', async () => {
    const res = await streams.get();
    const filteredData = filterData(res.data, 'movie');
    expect(filteredData[Math.floor(Math.random() * 21)].programType).toBe(
      'movie'
    );
    expect(
      filteredData[Math.floor(Math.random() * 21)].releaseYear
    ).toBeGreaterThanOrEqual(2010);
    expect(filteredData.length).toBe(21);
  });

  test('should return programType series, releaseYear >= 2010 and not more than 21 items', async () => {
    const res = await streams.get();
    const filteredData = filterData(res.data, 'series');
    expect(filteredData[Math.floor(Math.random() * 21)].programType).toBe(
      'series'
    );
    expect(
      filteredData[Math.floor(Math.random() * 21)].releaseYear
    ).toBeGreaterThanOrEqual(2010);
    expect(filteredData.length).toBe(21);
  });
});
