import { createStore, combineReducers } from "redux";
import bucket from "./modules/bucket";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const rootReducer = combineReducers({bucket});  //만들었던 reducer을 넘긴다. -> reducer 하나로 합침
const store = createStore(rootReducer);

export default store;