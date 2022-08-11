import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const getUpdateThunk = createAsyncThunk(
//   "GET_UPDATE",
//   async () => {
//     return await axios
//     .get(`http://localhost:3001/userComment`)
//     .then((res) => res.data)
//     .catch((error) => error);
//     });

export const patchUpdateThunk = createAsyncThunk(
  "update/patchUpdateThunk",
  async (payload , thunkAPI) => {
    const resdata = await axios
      .patch(`http://localhost:3001/books/${payload.id}`, {
        comment : payload.updated.updateComment
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => error);
    return thunkAPI.fulfillWithValue(resdata);
  }
);

// "Comment": {
//   "updated": {
//     "updateComment": "asd"
//   },
//   "id": "1"
// }

export const editSlice = createSlice({
  name: "update",
  initialState: {
    update: [],
  },
  reducers: {},
  extraReducers: {
    [patchUpdateThunk.fulfilled]: (state, action) => {
      console.log(action);
    },
  },
});

export default editSlice.reducer;
