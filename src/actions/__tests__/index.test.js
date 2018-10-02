import * as actions from '../index';
import * as actionTypes from '../../action-types';
import {USER_STATUS_INTERVIEWED} from "../../constants";


describe('actions', () => {
    it('should create an action to change user status', () => {
        const expectedAction = {
            type: actionTypes.CHANGE_USER_STATUS,
            payload: {
                userId: 1,
                status: USER_STATUS_INTERVIEWED
            }
        };
        expect(actions.changeUserStatus(1, USER_STATUS_INTERVIEWED)).toEqual(expectedAction)
    })
});