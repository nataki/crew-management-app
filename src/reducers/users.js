import * as actionTypes from "../action-types";
import {USER_STATUS_APPLIED} from "../constants";

const users = (state = {}, {type, payload}) => {
    switch (type) {
        case actionTypes.RECEIVE_USERS:
            return payload.users.reduce((state, user) => {
                state[user.id.value] = {
                    ...user,
                    status: USER_STATUS_APPLIED
                };
                return state;
            }, {});
        case actionTypes.CHANGE_USER_STATUS: {
            const {userId, status} = payload;
            if (userId) {
                return {
                    ...state,
                    [userId]: {
                        ...state[userId],
                        status
                    }

                }
            } else {
                return state;
            }
        }
        default:
            return state
    }
};

export default users;