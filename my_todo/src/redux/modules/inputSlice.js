import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  books: [],
  isLoading: false,
  error: null,
};

export const __getBooks = createAsyncThunk("books/getBooks", async (payload, thunkAPI) => {
  try {
    const data = await axios.get("http://localhost:3001/books");
    console.log(data.data);
    return thunkAPI.fulfillWithValue(data.data);
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const inputBook = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
        console.log(state)
        console.log(action)
    }
  },
  extraReducers: {
    [__getBooks.pending]: (state) => {
      state.isLoading = true;
    },
    [__getBooks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    },
    [__getBooks.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
  },
});


export const {} = inputBook.actions;
export default inputBook.reducer;