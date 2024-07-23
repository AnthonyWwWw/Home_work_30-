import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
}

export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.data.push(action.payload);
        },
        deleteTask: (state, action) => {
            state.data = state.data.filter(task => task.id !== action.payload);
        },
        loadTasks: (state, action) => {
           state.data = action.payload;
        },
        clear: (state) => {
            state.data = [];
        },
        editTask: (state,action) => {
            console.log(action.payload)
            state.data =  action.payload;
        }
          
    }
})

export const { addTask, deleteTask, clear, loadTasks, editTask } = taskSlice.actions;
export default taskSlice.reducer;  