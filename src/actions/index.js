import 'whatwg-fetch';

export const SET_SEARCH_KEY = 'SET_SEARCH_KEY';
export const SET_ROBOTS_PENDING = 'SET_ROBOTS_PENDING';
export const SET_ROBOTS_SUCCESS = 'SET_ROBOTS_SUCCESS';
export const SET_ROBOTS_FAILED = 'SET_ROBOTS_FAILED';

export const setSearchKey = (key) => {
    return {
        type: SET_SEARCH_KEY,
        payload: key
    };
};

const setRobotsPending = (data) => 
    ({
        type: SET_ROBOTS_PENDING,
        payload: data
    });


const setRobotsSuccess = (data) => 
    ({
        type: SET_ROBOTS_SUCCESS,
        payload: data
    });

const setRobotsFailed = (data) => 
    ({
        type: SET_ROBOTS_FAILED,
        payload: data
    });

/* 
* 'getRobts' is a higher order function which returns a function.
* 'getRobts = () =>' returns all the functions inside of {}. This inner function needs 'dispatch'
*  Therefore the syntax is '(dispatch) => {...}'
*  These are done by redux-thunk
*/
export const getRobots = () => (dispatch) => {  
        dispatch(setRobotsPending([]));
        fetch('https://jsonplaceholder.typicode.com/users')
            .then( response => {
                //console.log('response', response);
                if(response.ok) {
                    return response;
                }
                console.log('Error');
                dispatch(setRobotsFailed([]));
            }).then(response => {
                return response.json();
            }).then( json => {
                //console.log('json', json);
                dispatch(setRobotsSuccess(json));
            }).catch( error => {
                console.log('Error', error);
                dispatch(setRobotsFailed([]));
            });
       
};