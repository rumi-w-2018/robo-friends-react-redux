import { SET_ROBOTS_SUCCESS, SET_ROBOTS_PENDING, SET_ROBOTS_FAILED } from '../actions';

const initState = {
    isPending: true,
    isError: false,
    data: []
};

const robots = ( state=initState, action={} ) => {
    switch (action.type) {

        case SET_ROBOTS_SUCCESS:
            return { ...state, isPending: false, isError: false, data: action.payload };

        case SET_ROBOTS_PENDING:
            return { ...state, isPending: true, isError: false, data: action.payload }; // data is []

        case SET_ROBOTS_FAILED:
            return { ...state, isPending: false, isError: true, data: action.payload }; // data is []

        default:
            return state;
    }
};

export default robots;
