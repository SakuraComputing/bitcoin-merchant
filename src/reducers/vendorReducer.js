import {
    GET_VENDORS,
    VENDORS_LOADING,
    GET_VENDOR
} from '../actions/types';

const intialState = { vendors: null };

export default function (state = intialState, action) {
    switch(action.type) {
    case VENDORS_LOADING:
        return {
            ...state,
            loading: true
        }

    case GET_VENDORS:
        return {
            ...state,
            vendors: action.payload,
            loading: false
        }

    case GET_VENDOR:
        return {
            ...state,
            vendor: action.payload,
            loading: false
        }

    default:
        return state
    }
}
