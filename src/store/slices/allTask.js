import { createSlice } from "@reduxjs/toolkit";

const allTaskState = [];
const allTaskSlice = createSlice({
  name: "alltask",
  initialState: allTaskState,
  reducers: {
    addTask(state, action) {
      return [...state, action.payload];
    },
    deleteTask(state, action) {
      return state.filter((each, i) => i !== action.payload);
    },
  },
});

export const allTaskActions = allTaskSlice.actions;
export const allTaskReducer = allTaskSlice.reducer
