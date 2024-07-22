import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

export const doneTaskSlice = createSlice({
  name: 'doneTasks',
  initialState,
  reducers: {
    addDoneTask: (state, action) => {
      state.data.push(action.payload);
    },
    loadTasksDone: (state, action) => {
      state.data = action.payload;
    }
  },
});

export const { addDoneTask, loadTasksDone } = doneTaskSlice.actions;
export default doneTaskSlice.reducer;
