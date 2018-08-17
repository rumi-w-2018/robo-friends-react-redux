import { SET_SEARCH_KEY } from '../actions/constants';
import searchKeyReducer from './searchKey';

const initState = '';

describe('searchKey', () => {

    it('returns the initial state', () => {
        expect(searchKeyReducer(undefined, {})).toEqual(initState);
    });

    it('handles SET_SEARCH_KEY', () => {
        const mockActions = {
            type: SET_SEARCH_KEY,
            payload: 'ddd'
        };
        expect(searchKeyReducer(initState, mockActions)).toEqual('ddd');
    });

});