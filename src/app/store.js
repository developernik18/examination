import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import examRecordReducer from "../slices/examRecordSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    examRecord : examRecordReducer
  },
})