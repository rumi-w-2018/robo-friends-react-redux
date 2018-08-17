import { SET_SEARCH_KEY } from './constants';

export const setSearchKey = (key) => {
    return {
        type: SET_SEARCH_KEY,
        payload: key
    };
};