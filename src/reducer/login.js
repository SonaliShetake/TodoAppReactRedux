import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
};

export const loginSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addlogin: function (state, action) {
      state.user.push(action.payload);
    },
  },
});

export const { addlogin } = loginSlice.actions;
export default loginSlice.reducer;