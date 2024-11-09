import { all } from "redux-saga/effects";
import {
  getUserWatcher,
  makeUserLoginWatcher,
  saveUserWatcher,
} from "./watcher";

export function* rootSaga() {
  const watcherList = [
    saveUserWatcher(),
    getUserWatcher(),
    makeUserLoginWatcher(),
  ];
  yield all(watcherList);
}
