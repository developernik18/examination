import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    'username': 'Vikram Betal',
    'loggedin': false,
    "id": "_3957clwu39"
  },
  reducers: {
    updateUser: (state, action) => {
      state.username = action.payload.username;
      state.loggedin = action.payload.loggedin;

    }
  }
})

export const { updateUser } = userSlice.actions;
export default userSlice.reducer; 