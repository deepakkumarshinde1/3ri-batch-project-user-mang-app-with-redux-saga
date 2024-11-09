import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    loginStatus: 0,
    newUserState: false,
    newUserDetails: {
      name: "",
      mobile: "",
      email: "",
      address: "Nashik",
      password: "",
    },
    userLogin: {
      email: "",
      password: "",
    },
    userList: [],
  },
  reducers: {
    handelLoginInput(state, action) {
      let { value, name } = action.payload;
      state.userLogin[name] = value;
    },
    handelInput(state, action) {
      let { value, name } = action.payload;
      state.newUserDetails[name] = value;
    },
    updateUserState(state, action) {
      state.newUserState = action.payload;
    },
    makeUserLogin() {},
    setUserLogin(state, action) {
      let user = action.payload;
      if (user.length == 0) {
        state.loginStatus = -1;
      } else {
        state.loginStatus = 1;
      }
    },
    resetSetLogin(state) {
      state.loginStatus = 0;
    },
    saveUser() {},
    getUser() {},
    saveGetUser(state, action) {
      state.userList = action.payload;
    },
  },
});

export default UserSlice;
export const {
  handelLoginInput,
  getUser,
  handelInput,
  updateUserState,
  saveUser,
  saveGetUser,
  makeUserLogin,
  setUserLogin,
  resetSetLogin,
} = UserSlice.actions;
