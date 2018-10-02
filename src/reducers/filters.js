import * as actionTypes from "../action-types";

const initialState = {city: "", name: ""};

const filters = (state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.CHANGE_FILTER: {
            const {filterName, value} = payload;
            return {
                ...state,
                [filterName]: value
            };
        }
        default:
            return state;
    }
};

export default filters;