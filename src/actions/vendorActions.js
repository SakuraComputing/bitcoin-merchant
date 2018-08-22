import { GET_VENDORS, GET_VENDOR, VENDORS_LOADING } from "./types";
import axios from 'axios';

// Get all vendors
export const getVendors = () => dispatch => {
    dispatch(setVendorsLoading());
    axios
        .get('/api/vendors')
        .then(res => {
            dispatch({
                type: GET_VENDORS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_VENDORS,
                payload: null
            })
        })
};

// Get Vendor by seller
export const getVendorBySellerId = (seller) => dispatch => {
    dispatch(setVendorsLoading());
    axios
        .get(`/api/vendors/seller/${seller}`)
        .then(res => {
            dispatch({
                type: GET_VENDOR,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_VENDOR,
                payload: null
            })
        })            
};

// Vendors Loading
export const setVendorsLoading = () => {
    return {
        type: VENDORS_LOADING
    }
}
// Clear Vendor