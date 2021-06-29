import * as types from "../types";

export const issueDataRequest=()=>{
    return {
        type:types.ISSUE_REQUEST,
        payload:{}
    };
}

export const issueDataSuccess=(
    {data})=>{
    console.log(data);
    return {
        type:types.ISSUE_DATA_SUCCESS,
        payload:{
            data,
        }
    }
}

export const issueDataFailure = (e) => {
    return {
        type: types.ISSUE_DATA_FAILURE,
        payload: {},
        error: e,
      };
}

export const resetAllData = () => {
    return {
      type: types.ISSUE_RESET,
    };
  };