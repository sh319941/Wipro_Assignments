import { ActionTypes } from "../Constants/Action-Types";

export const setIssues = (Issues) => {
  return {
    type: ActionTypes.SET_ISSUE,
    payload: Issues,
  };
};

export const selectedIssue = (Issue) => {
  return {
    type: ActionTypes.SELECTED_ISSUE,
    payload: Issue,
  };
};

