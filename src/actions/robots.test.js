import 'whatwg-fetch';

import { SET_ROBOTS_SUCCESS, SET_ROBOTS_PENDING, SET_ROBOTS_FAILED } from './constants';

import { getRobots } from './robots';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

const mockStore = configureMockStore([thunkMiddleware]);

describe('robots actions', () => {
  it('should returns Pending first', () => {
    const store = mockStore({});

    expect.assertions(1);
    return store.dispatch(getRobots()).then(() => {
      const actions = store.getActions();
      //console.log(actions);
      expect(actions[0]).toEqual({
        type: 'SET_ROBOTS_PENDING',
        payload: []
      });
    });
  });

  it('fetch users info, and dispatch SET_ROBOTS_SUCCESS', () => {
    const mockReturnedData = [
      {
        id: 1,
        email: 'mock@gmail.com',
        name: 'mock robot'
      }
    ];
    const store = mockStore({});
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => [
          {
            id: 1,
            email: 'mock@gmail.com',
            name: 'mock robot'
          }
        ]
      })
    );

    expect.assertions(1);
    return store.dispatch(getRobots()).then(() => {
      const actions = store.getActions();
      //console.log('action success', actions);
      expect(actions).toContainEqual({ type: 'SET_ROBOTS_SUCCESS', payload: mockReturnedData });
    });
  });

  it('dispatches SET_ROBOTS_FAILED when fetch fails.', () => {
    const mockReturnedData = [
      {
        id: 1,
        email: 'mock@gmail.com',
        name: 'mock robot'
      }
    ];
    const store = mockStore({});
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({}));

    expect.assertions(1);
    return store.dispatch(getRobots()).then(() => {
      const actions = store.getActions();
      //console.log('action success', actions);
      expect(actions).toContainEqual({ type: 'SET_ROBOTS_FAILED', payload: [] });
    });
  });
});
