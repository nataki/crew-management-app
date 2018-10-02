import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {throttle} from "lodash";
import { loadState, saveState } from './localStorage';
import rootReducer from '../reducers';

//TODO: use some 3rd-part libraries - ex. redux-persist
const persistedState = loadState();
const initialState = {
    users: [],
    filters: {city: "", name: ""},
    ...persistedState
};

export default function configureStore() {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunkMiddleware, createLogger())
    );

    //TODO: throttle it
    store.subscribe(throttle(() => {
        saveState({
            filters: store.getState().filters,
        });
    }));

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }

    return store;
}
