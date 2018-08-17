import { SET_SEARCH_KEY } from '../actions/constants';

const searchKey = (state = '', action = {}) => {
  switch (action.type) {
    case SET_SEARCH_KEY:
      return action.payload;

    default:
      return state;
  }
};

export default searchKey;
