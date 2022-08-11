// redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import HelloUserComment from "../modules/HelloUserComment";
import HelloWorld from "../modules/HelloWorld";
import inputSlice from "../modules/inputSlice";
import editSlice from "../modules/editSlice";

export default configureStore({
  reducer: {
    users: HelloWorld,
    userComment: HelloUserComment,
    books: inputSlice,
    update: editSlice,
  },
});
