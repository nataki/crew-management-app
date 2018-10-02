import {combineReducers} from "redux";

import users from './users';
import filters from './filters';
import status from './status';

export default combineReducers({
    users,
    filters,
    status
});