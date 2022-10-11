import { createSlice } from "@reduxjs/toolkit";

export const examRecordSlice = createSlice({
  name: 'exam record',
  initialState: {
    'Completed': 5,
    'Attempted': 11
  }
})

export default examRecordSlice.reducer;