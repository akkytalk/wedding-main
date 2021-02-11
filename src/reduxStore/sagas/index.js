import { takeEvery } from "redux-saga/effects";

import * as actionType from "../actions/actionType";
import {
  logoutSaga,
  checkAuthTimeoutSaga,
  authUserSaga,
  authCheckStateSaga,
} from "./authSaga";

export function* watchAuth() {
  yield takeEvery(actionType.AUTH_INITIATE_LOGOUT, logoutSaga);
  yield takeEvery(actionType.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
  yield takeEvery(actionType.AUTH_USER, authUserSaga);
  yield takeEvery(actionType.AUTH_CHECK_STATE, authCheckStateSaga);
}
