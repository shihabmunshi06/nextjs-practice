import { createSlice } from "@reduxjs/toolkit";

const completedTaskState = [];
const completedTaskSlice = createSlice({
  name: "completedTask",
  initialState: completedTaskState,
  reducers: {
    addCompletedTask(state, action) {
      return [...state, action.payload];
    },
  },
});

export const completedTaskReducer = completedTaskSlice.reducer;
export const completedTaskActions = completedTaskSlice.actions;