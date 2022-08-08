// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import HelloComment from "../modules/HelloComments";
import HelloWorld from "../modules/HelloWorld";

export default configureStore({
  reducer: {
    users: HelloWorld,
    comments : HelloComment
  }
});