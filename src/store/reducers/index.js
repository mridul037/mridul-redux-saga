import issueReducer from './issueReducer';
import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import counterReducer from './counterReducer';
const rootReducer = combineReducers({
    issueReducer,
    errorReducer,
    counterReducer
})
export default rootReducer;