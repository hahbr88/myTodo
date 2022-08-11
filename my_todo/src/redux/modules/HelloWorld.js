import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUser = createAsyncThunk("users/fetchUser", async () => {
  
  return await axios
    .get("http://localhost:3001/books")
    .then((res) => res.data)
    .catch((error) => error);
});


const HelloWorld = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: "" 
  },
  reducers: {},
  extraReducers: {
    // createAsyncThunk 했을때 약속 
    // pendign : 비동기 작업을 시작했을때 상태
    [fetchUser.pending]: (state) => {
      state.loading = true;
      state.users = [];
      state.error = "";
    },
    // fulfilled : 비동기 작업이 끝났을때 상태(데이터를 자져왔을때)
    [fetchUser.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.error = "";
    },
    //rejected: 오류가 생겨서 중단 됐을때 
    [fetchUser.rejected]: (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.payload;
    }
  }
});

export default HelloWorld.reducer;
