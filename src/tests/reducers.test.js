import { dataReducer } from '../context/DataContext';

describe('Data Reducer', () => {
  test('Should return the initital state', () => {
    expect(dataReducer(undefined, {})).toEqual({});
  });

  test('Should handle type FETCH_STREAMS', () => {
    const initialState = {};
    const payload = {
      count: 2,
      entries: [
        { title: 'American Sniper', releaseYear: 2015 },
        { title: 'Life of Crime', releaseYear: 2013 },
      ],
    };
    expect(
      dataReducer(initialState, {
        type: 'FETCH_STREAMS',
        payload,
      })
    ).toEqual(payload);
  });
});
