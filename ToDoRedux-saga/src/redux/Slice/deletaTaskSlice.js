import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

export const deleteTaskSlice = createSlice({
  name: 'deleteTasks',
  initialState,
  reducers: {
    addDeleteListTask: (state, action) => {
      state.data.push(action.payload);
    },
    loadTasksHistory: (state, action) => {
      state.data = action.payload;
    }
  },
});

export const { addDeleteListTask, loadTasksHistory } = deleteTaskSlice.actions;
export default deleteTaskSlice.reducer;
