import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

//what to do when ceratin things matches
// export const increment = "increment";
// export const decrement = "decrement";
// export const increaseByNumber = "increaseByNumber";

//bascially a function which knows what to do we call it reducer
//if i use dispatch this counterReducer gets called, dispatching an action with dispatch which is catched in the counterreducer

// const counterReducer = (state = initialState, action) => {
//   if (action.type === increment) {
//     return {
//       counter: state.count + 1,
//     };
//   }
//   if (action.type === decrement) {
//     return {
//       counter: state.count - 1,
//     };
//   }
//   if (action.type === increaseByNumber) {
//     return {
//       counter: state.count + action.amount,
//     };
//   }

//   return state;
// };

const initialState = { count: 1 };

const anotherState = {}

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    increaseByNumber(state, action) {
      state.count = state.count + action.payload;
    },
  },
});
//they made their own actions now need to catch it it gives an object of the actoin names
//then export it for others to use it

//only put reducers means the functinality not names and state in this configure
//for multiple reducer in need and object and name the new function packed in zip and name it counter for example
const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});

export default store;
export const counterActions = counterSlice.actions;
