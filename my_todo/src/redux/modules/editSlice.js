import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUpdateThunk = createAsyncThunk(
  "GET_UPDATE",
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`${"http://localhost:3001/books"}/updates/${payload}`);
      return thunkAPI.fulfillWithValue(data);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.code);
    }
  }
);

export const updatedThunk = createAsyncThunk(
  "UPDATE_UPDATE",
  async (payload, thunkAPI) => {
    try {
      axios.patch(`${"http://localhost:3001/books"}/updates/${payload.id}`, payload);
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code);
    }
  }
);

const initialState = {
  update: {
    id: 0,
    content: "",
    username: "",
    title: "",
  },
  error: null,
  isLoading: false,
};

export const editSlice = createSlice({
  name: "updates",
  initialState,
  reducers: {
    clear: (state) => {
      state.update = {
        id: 0,
        body: "",
        username: "",
        title: "",
      };
    },
  },
  extraReducers: {
    [getUpdateThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.update = action.payload;
    },
    [getUpdateThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [getUpdateThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [updatedThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.update = action.payload;
    },
    [updatedThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [updatedThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { clear } = editSlice.actions;
export default editSlice.reducer;
