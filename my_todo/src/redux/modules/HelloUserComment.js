import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const sandComments = createAsyncThunk(
  "userComment/sandComments",
  async (payload, thunkAPI) => {
    const resdata = await axios
      .post("http://localhost:3001/userComment", {
        userComment: payload.Comment.userComment,
        id : payload.userid,
        postid : payload.id 
      })
      .then((res) => res.data)
      .catch((error) => error);
    return thunkAPI.fulfillWithValue(resdata);
  }
);

export const getComments = createAsyncThunk(
  "userComment/getComments",
  async (payload, thunkAPI) => {
    const resdata = await axios
      .get("http://localhost:3001/userComment", {
      })
      .then((res) => res.data)
      .catch((error) => error);
    return thunkAPI.fulfillWithValue(resdata);
  }
);

const HelloUserComment = createSlice({
  name: "userComment",
  initialState: {
    userComment: [],

  },
  reducers: {},
  extraReducers: {
    [getComments.fulfilled]: (state, action) => {
      console.log(action)
      state.userComment = action.payload
    }
  },
});

export default HelloUserComment.reducer;
