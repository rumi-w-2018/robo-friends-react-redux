import { setSearchKey } from './searchKey';
import { SET_SEARCH_KEY } from './constants';

it('should create an action to set search key', () => {
  const key = 'ddd';
  const expectedAction = {
    type: SET_SEARCH_KEY,
    payload: key
  };
  expect(setSearchKey(key)).toEqual(expectedAction);
});
