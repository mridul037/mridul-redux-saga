import * as types from "../types";
const initialState = {
  loading: false,
  data: [],
  error: {},
};

const issueReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ISSUE_REQUEST:
      return {
        ...state,
        loading: true,
        data: action.payload.data,
        error: {},
      };
    case types.ISSUE_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
        error: {},
      };
      case types.ISSUE_DATA_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
        default:
            return state;
  }
};

export default issueReducer;
