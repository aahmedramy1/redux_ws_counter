import { combineReducers} from "redux";
import { counter } from "./counter";
import { authentication } from "./authentication";


export const reducers = combineReducers({
    counter,
    authentication,

})