import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const __postBooks = createAsyncThunk("books/postBooks", async (payload, thunkAPI) => {
  try {
    const data = await axios
      .post("http://localhost:3001/books", {
        id: payload.userId,
        name: payload.nickName.nickNames,
        title: payload.title.titles,
        content: payload.content.contents,
      })
      .then((res) => res.data);
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __getBooks = createAsyncThunk("books/getBooks", async (payload, thunkAPI) => {
  try {
    const data = await axios.get("http://localhost:3001/books", {}).then((res) => res.data);
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const inputSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
  },
  reducers: {},
  extraReducers: {
    [__postBooks.fulfilled]: (state, action) => {
      // console.log(action.payload)
      state.books = [...state.books, action.payload];
    },
    [__getBooks.fulfilled]: (state, action) => {
      state.books = action.payload;
    },
  },
});

export default inputSlice.reducer;
