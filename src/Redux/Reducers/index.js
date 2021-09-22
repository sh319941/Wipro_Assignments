import { combineReducers } from "redux";
import { IssueReducer,selectedIssueReducer} from "./IssueReducer";
const reducers = combineReducers({
  allissues: IssueReducer,
  issue: selectedIssueReducer,
});
export default reducers;
