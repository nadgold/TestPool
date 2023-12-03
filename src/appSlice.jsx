// appSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  questions: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    add: (state, action) => {
      state.questions.push(action.payload);
    },
    load: (state, action) => {
      state.questions = action.payload;
    },
    update: (state, action) => {
      const obj = action.payload;
      const index = state.questions.findIndex((x) => x.id === obj.id);
      if (index >= 0) {
        if (obj.status !== 'NEW') {
          obj.status = 'UPDATED';
        }
        state.questions[index] = obj;
      }
    },
    erase: (state, action) => {
      const id = action.payload;
      const index = state.questions.findIndex((x) => x.id === id);
      if (index >= 0) {
        state.questions[index].status = 'DELETED';
      }
    },
  },
});

export const { add, load, update, erase } = appSlice.actions;
export default appSlice.reducer;

