import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "TODO",
  initialState: [],
  reducers: {
    addtask: function (state, action) {
      state.push(action.payload);
    },
    deletetask: function (state, action) {
      return state.filter(({ id }) => id !== action.payload);
    },
    completetask: function (state, action) {
      const index = state.findIndex((task) => task.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
  },
});

export const { addtask, deletetask, completetask } = todoSlice.actions;
export default todoSlice.reducer;