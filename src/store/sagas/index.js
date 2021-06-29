import { all } from "redux-saga/effects";

import issueSaga from './issueSaga';


export default function* rootSaga() {
    yield all([
        issueSaga()
    ]);
}