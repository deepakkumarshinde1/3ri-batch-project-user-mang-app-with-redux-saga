import { call, put } from "redux-saga/effects";
import {
  getUserService,
  makeUserLoginService,
  saveUserService,
} from "./service";
import {
  saveGetUser,
  setUserLogin,
  updateUserState,
} from "../redux/user.reducer";

export function* saveUserHandler(action) {
  try {
    yield call(saveUserService, { ...action.payload });
    yield put(updateUserState(true));
  } catch (error) {
    console.error(error);
  }
}

export function* getUserHandler() {
  try {
    let { data } = yield call(getUserService);
    yield put(saveGetUser(data));
  } catch (error) {
    console.log(error);
  }
}

export function* makeUserLoginHandler(action) {
  try {
    let { data } = yield call(makeUserLoginService, { ...action.payload });
    yield put(setUserLogin(data));
  } catch (error) {
    console.log(error);
  }
}
