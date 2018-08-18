import { combineReducers } from 'redux';
import authReducer from './authReducer';
import vendorReducer from './vendorReducer';
import errorReducer from './errorReducer';

export default combineReducers ({
    auth: authReducer,
    vendor: vendorReducer,
    errors: errorReducer
});