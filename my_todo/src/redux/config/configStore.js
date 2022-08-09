// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import HelloComment from "../modules/HelloComments";
import HelloWorld from "../modules/HelloWorld";
import inputSlice from "../modules/inputSlice";

export default configureStore({
  reducer: {
    users: HelloWorld,
    inputSlice,
    comments : HelloComment

  }
});