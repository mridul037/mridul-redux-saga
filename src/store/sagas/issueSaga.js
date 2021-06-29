import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../types";
import {
    issueDataSuccess,
    issueDataFailure,
  } from "../action/issueDataAction";
  import { returnErrors, clearErrors } from "../action/errorAction";

  import * as _api from "../../api";

  function* asyncissueRequest(action) {
    try {
        yield put(clearErrors());
        const res = yield call(_api.fetchIssue);
        let {data} =res;
        console.log(data);
        data=data.reduce((acc,val)=>{
          let obj={
               title:val.title,
               number:val.number,
               state:val.state,
          }
               return [...acc,obj]
        },[]);
        
        yield put(issueDataSuccess({ data }));   
    } catch (e) {
        yield put(returnErrors({ msg: e.message, status: true }));
        yield put(issueDataFailure(e));
    }


  }

  export default function* issueSaga() {
    yield takeLatest(types.ISSUE_REQUEST, asyncissueRequest);
  }


