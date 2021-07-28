import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import bucket from "./modules/bucket";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);
const rootReducer = combineReducers({bucket});  //만들었던 reducer을 넘긴다. -> reducer 하나로 합침
const store = createStore(rootReducer, enhancer);

export default store;