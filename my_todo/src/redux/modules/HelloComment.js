// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import axios from 'axios';

// export const emailDupCheckThunk = createAsyncThunk(
//   'user/emailDupCheck',
//   async (payload, thunkAPI) => {
//     let check = false;
//     const resData = await axios
//       .get('http://localhost:5001/users')
//       .then((res) => res.data)
//       .catch((error) => console.log(error));
//     resData.forEach((user) => {
//       if (payload === user.email) check = true;
//     });
//     return thunkAPI.fulfillWithValue(check);
//   }
// );

// export const addUserThunk = createAsyncThunk(
//   'user/addUser',
//   async (payload, thunkAPI) => {
//     const data = {
//       email: payload.email,
//       password: payload.password,
//       phone: payload.phone,
//     };

//     const resData = await axios
//       .post('http://localhost:5001/users', data)
//       .then((res) => res.data);
//     return thunkAPI.fulfillWithValue(resData);
//   }
// );

// export const getUserThunk = createAsyncThunk(
//   'user/getUser',
//   async (payload, thunkAPI) => {
//     const resData = await axios
//       .get('http://localhost:5001/users')
//       .then((res) => res.data);
//     const match = resData.find((user) => user.email === payload);
//     return thunkAPI.fulfillWithValue(match);
//   }
// );

// const initialState = {
//   userEmail: '',
//   loginStatus: false,
// };

// export const userSlice = createSlice({
//   name: 'user',
//   initialState: initialState,
//   reducers: {
//     signInAction: (state, action) => {
//       state.userEmail = action.payload.userEmail;
//       state.loginStatus = action.payload.loginStatus;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(addUserThunk.fulfilled, (state, { payload }) => {
//       state.email = payload.email;
//     });
//   },
// });

// export const { signInAction } = userSlice.actions;
// export default userSlice.reducer;