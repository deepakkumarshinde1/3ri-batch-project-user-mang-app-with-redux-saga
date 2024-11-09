import { takeLatest } from "redux-saga/effects";
import { getUser, makeUserLogin, saveUser } from "../redux/user.reducer";
import {
  getUserHandler,
  makeUserLoginHandler,
  saveUserHandler,
} from "./handler";

export function* saveUserWatcher() {
  yield takeLatest(saveUser.type, saveUserHandler);
}

export function* getUserWatcher() {
  yield takeLatest(getUser.type, getUserHandler);
}

export function* makeUserLoginWatcher() {
  yield takeLatest(makeUserLogin.type, makeUserLoginHandler);
}
