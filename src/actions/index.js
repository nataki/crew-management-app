import * as actionTypes from '../action-types';

const requestUsersAction = () => ({
    type: actionTypes.REQUEST_USERS,
    payload: {}
});

const receiveUsersAction = (users) => ({
    type: actionTypes.RECEIVE_USERS,
    payload: {
        users
    }
});

/**
 * Fetch users data
 * @returns {function(*): Promise<Response | never | ((message?: any, ...optionalParams: any[]) => void)>}
 */
export function fetchUsersAction(){
    return dispatch => {
        dispatch(requestUsersAction());
        // eslint-disable-next-line
        return fetch('https://randomuser.me/api/?nat=gb&results=5')
            .then(response => response.json())
            .then(json => dispatch(receiveUsersAction(json.results)))
            .catch(error => console.log)
    }
}

/**
 * Change the status of the user
 * @param userId
 * @param status
 * @returns {{type: string, payload: {userId: *, status: *}}}
 */
export const changeUserStatus = (userId, status) => (
    {
        type: actionTypes.CHANGE_USER_STATUS,
        payload: {
            userId,
            status
        }
    }
);

/**
 * Change filter value
 * @param filterName
 * @param value
 * @returns {{type: string, payload: {filterName: *, value: *}}}
 */
export const changeFilterAction = (filterName, value) => (
    {
        type: actionTypes.CHANGE_FILTER,
        payload: {
            filterName,
            value
        }
    }
);