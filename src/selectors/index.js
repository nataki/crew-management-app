import {createSelector} from 'reselect';
import {USER_STATUS_APPLIED, USER_STATUS_HIRED, USER_STATUS_INTERVIEWED} from "../constants";

/**
 * Filter and reformat user list
 * @param users
 * @param city
 * @param name
 * @returns {{id: *, image: (string), name: string, city: (string|string), status: *}[]}
 */
const getUsers = ({users, filters: {city, name}}) => (
    Object.values(users)
        .map(prepareUserData)
        .filter(filterByCity(city))
        .filter(filterByName(name))
);
/**
 * Pick only necessary data from user object
 * @param user
 * @returns {{id: *, image: (string), name: string, city: (string|string), status: *}}
 */
const prepareUserData = (user) => {
    return {
        id: user.id.value,
        image: user.picture.thumbnail,
        name: `${user.name.title} ${user.name.first} ${user.name.last}`,
        city: user.location.city,
        status: user.status
    }
};
/**
 * Filter users list according according to the current value of the 'city' filter
 * @param city
 * @returns {function(*): boolean}
 */
const filterByCity = (city) => (user) => user.city.includes(city);

/**
 * Filter users list according according to the current value of the 'name' filter
 * @param name
 * @returns {function(*): boolean}
 */
const filterByName = (name) => (user) => user.name.includes(name);

/**
 * Filter users with the status 'applied'
 */
export const getAppliedUsers = createSelector(
    [getUsers],
    (users) => {
        return users.filter(user => user.status === USER_STATUS_APPLIED);
    }
);
/**
 * Filter users with the status 'interviewed'
 */
export const getInterviewedUsers = createSelector(
    [getUsers],
    (users) => {
        return users.filter(user => user.status === USER_STATUS_INTERVIEWED)

    }
);

/**
 * Filter users with the status 'hired'
 */
export const getHiredUsers = createSelector(
    [getUsers],
    (users) => {
        return users .filter(user => user.status === USER_STATUS_HIRED)
    }
);