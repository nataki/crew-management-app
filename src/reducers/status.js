import * as actionTypes from "../action-types";
import {STATUS_LOADED, STATUS_LOADING} from "../constants";

const status = (state = '', action) => {
    switch (action.type) {
        case actionTypes.REQUEST_USERS:
            return STATUS_LOADING;
        case actionTypes.RECEIVE_USERS:
            return STATUS_LOADED;
        default:
            return state;
    }
};

export default status;