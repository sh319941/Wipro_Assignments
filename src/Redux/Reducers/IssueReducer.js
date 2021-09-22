import { ActionTypes } from "../Constants/Action-Types";
const intialState = {
  Issue: [],
};

export const IssueReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ISSUE:
      return { ...state, Issue: payload };
    default:
      return state;
  }
};

export const selectedIssueReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_ISSUE:
      return { ...state, ...payload };
    default:
      return state;
  }
};


