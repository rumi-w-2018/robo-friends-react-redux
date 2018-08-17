import 'whatwg-fetch';

import { 
    SET_ROBOTS_SUCCESS, 
    SET_ROBOTS_PENDING, 
    SET_ROBOTS_FAILED 
} from './constants';

import { getRobots } from './robots';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);


it('should fetch robots', () => {
    const store = mockStore();
    store.dispatch(getRobots());
    const actions = store.getActions();
    console.log(actions);

  


});