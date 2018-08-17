
import { 
    SET_ROBOTS_SUCCESS, 
    SET_ROBOTS_PENDING, 
    SET_ROBOTS_FAILED 
} from '../actions/constants';

import robotsReducers from './robots';

const initState = {
    isPending: true,
    isError: false,
    data: []
};

describe('robots', () => {

    it('should return the initial state', () => {
        // reducer takes state and action
        expect(robotsReducers(undefined, {})).toMatchObject(initState);
    });    

    it('should handle SET_ROBOTS_SUCCESS', () => {
        const mockActions = {
            type: SET_ROBOTS_SUCCESS,
            payload: [{
                id: 1,
                name: 'Ervin Howell',
                username: 'Shanna',
                email: 'Shanna@melissa.tv'
            }] 
        };
        const mockUpdatedState = {
            isPending: false,
            isError: false,
            data: [{
                id: 1,
                name: 'Ervin Howell',
                username: 'Shanna',
                email: 'Shanna@melissa.tv'
            }] 
        };

        expect(robotsReducers(initState, mockActions)).toEqual(mockUpdatedState);
    });

    it('should handle SET_ROBOTS_PENDING', () => {
        expect(
            robotsReducers(initState, {
                type: SET_ROBOTS_PENDING,
                payload: []
            })
        ).toEqual({
            isPending: true,
            isError: false,
            data:[]
        });
    });

    it('should handle SET_ROBOTS_FAILED', () => {
        expect(
            robotsReducers(initState, {
                type: SET_ROBOTS_FAILED,
                payload: []
            })
        ).toEqual({
            isPending: false,
            isError: true,
            data:[]
        });
    });

});
