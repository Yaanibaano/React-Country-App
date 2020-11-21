import {createStore,applyMiddleware} from "redux";
import {Reducer,initalState} from "./reducer"
import thunk from "redux-logger";
import logger from "redux-thunk"

export const ConfigureStore = () => {
    const store = createStore(Reducer,applyMiddleware(thunk,logger));
    return store;
}