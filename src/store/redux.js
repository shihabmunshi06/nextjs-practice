import { configureStore } from "@reduxjs/toolkit";
import { allTaskReducer } from "./slices/allTask";
import { completedTaskReducer } from "./slices/completedTask";
import { remainingTaskReducer } from "./slices/remainingTask";

const store = configureStore({
  reducer: {
    allTask: allTaskReducer,
    remainingTask: remainingTaskReducer,
    completedTask: completedTaskReducer,
  },
});

export default store;
