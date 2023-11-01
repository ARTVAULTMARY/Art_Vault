import { configureStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initalState = {};

export const store = configureStore(
    rootReducer,
    initalState,
);
import rootReducer from './reducer/index';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

const initStore = (initialState, options) => {
    let composeEnhancers = compose;

    //Check if function running on the sever or client
    if (!options.isServer) {
        //Setup Redux Debuger
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    }



    const store = createStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(thunk) //Applying redux-thunk middleware
    ));

    return store;
};


export default initStore;
