import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const URL = process.env.REACT_APP_USRL

export const __postBooks = createAsyncThunk("books/postBooks", async (payload, thunkAPI) => {
  try {
    const data = await axios
<<<<<<< Updated upstream
      .post("https://hiworld-voyage99.herokuapp.com/todos", {
=======
      .post( URL+ "books", {
>>>>>>> Stashed changes
        id: payload.userId,
        name: payload.nickName.nickNames,
        title: payload.title.titles,
        content: payload.content.contents,
      })
      .then((res) => res.data);
      console.log(data);
    return thunkAPI.fulfillWithValue(data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const __getBooks = createAsyncThunk("books/getBooks", async (payload, thunkAPI) => {
  try {
<<<<<<< Updated upstream
    const data = await axios.get("https://hiworld-voyage99.herokuapp.com/todos", {}).then((res) => res.data);
=======
    const data = await axios.get(URL + "books", {}).then((res) => res.data);
>>>>>>> Stashed changes
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
      console.log(action.payload)
      state.books = [...state.books, action.payload];
      console.log(state.books);
    },
    [__getBooks.fulfilled]: (state, action) => {
      state.books = action.payload;
    },
  },
});

export default inputSlice.reducer;
