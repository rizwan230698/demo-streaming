import createDataContext from './createDataContext';
import streams from '../api/streams';

export const dataReducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_STREAMS':
      return action.payload;
    default:
      return state;
  }
};

const fetchStreams = (dispatch) => async () => {
  try {
    const response = await streams.get();

    dispatch({ type: 'FETCH_STREAMS', payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const { Context, Provider } = createDataContext(
  dataReducer,
  { fetchStreams },
  {}
);
