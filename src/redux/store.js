import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./user.reducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    users: UserSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
