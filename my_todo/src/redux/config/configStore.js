// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import HelloUserComment from "../modules/HelloUserComment";
import HelloWorld from "../modules/HelloWorld";


export default configureStore({
  reducer: {
    users : HelloWorld,
    userComment : HelloUserComment,
  }
});