import {getAppliedUsers, getHiredUsers, getInterviewedUsers} from "../index";
import {STATUS_LOADED, USER_STATUS_APPLIED, USER_STATUS_HIRED, USER_STATUS_INTERVIEWED} from "../../constants/index";
import {users} from "../../../__mocks__/usersMock";

describe("Users selectors", () => {
    const initialState = {
        status: STATUS_LOADED,
        filters: {city: "", name: ""},
        users: users
    };
    const initialStateWithFilterCity = {
        status: STATUS_LOADED,
        filters: {city: "truro", name: ""},
        users: users
    };

    describe('filter users by status', () => {
        it("getAppliedUsers selector", () => {
            const result = getAppliedUsers(initialState);
            expect(result.length).toEqual(2);
            expect(result[0].status).toEqual(USER_STATUS_APPLIED);
            expect(result[1].status).toEqual(USER_STATUS_APPLIED);
        });

        it("getInterviewedUsers selector", () => {
            const result = getInterviewedUsers(initialState);
            expect(result.length).toEqual(1);
            expect(result[0].status).toEqual(USER_STATUS_INTERVIEWED);
        });

        it("getHiredUsers selector", () => {
            const result = getHiredUsers(initialState);
            expect(result.length).toEqual(2);
            expect(result[0].status).toEqual(USER_STATUS_HIRED);
            expect(result[1].status).toEqual(USER_STATUS_HIRED);
        });
    });
    describe('filter users by filter city', () => {
        it("getAppliedUsers selector", () => {
            expect(getAppliedUsers(initialStateWithFilterCity).length).toEqual(1);
            expect(getAppliedUsers(initialStateWithFilterCity)[0].city)
                .toEqual(initialStateWithFilterCity.filters.city);
            expect(getInterviewedUsers(initialStateWithFilterCity).length).toEqual(0);
            expect(getHiredUsers(initialStateWithFilterCity).length).toEqual(1);
            expect(getHiredUsers(initialStateWithFilterCity)[0].city).toEqual(initialStateWithFilterCity.filters.city);
        });
    });
});