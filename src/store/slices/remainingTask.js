import { createSlice } from "@reduxjs/toolkit";

const remainingTaskState = [];
const remainingTaskSlice = createSlice({
  name: "remainingTask",
  initialState: remainingTaskState,
  reducers: {
    addRemainingTask(state, action) {
      return [...state, action.payload];
    },
    deleteRemainingTask(state, action) {
      return state.filter((each, i) => i !== action.payload);
    },
  },
});
export const remainingTaskReducer = remainingTaskSlice.reducer;
export const remainingTaskActions = remainingTaskSlice.actions;
