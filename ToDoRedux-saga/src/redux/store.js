import { configureStore } from '@reduxjs/toolkit'
import taskReducer from './Slice/taskSlice'
import { rootSaga } from '../saga/rootSaga';
import createSagaMiddleware from 'redux-saga'
import doneTasksReducer from './Slice/doneTaskSlice'
import deleteTaskReducer from './Slice/deletaTaskSlice'

export const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        tasks: taskReducer,
        doneTasks: doneTasksReducer,
        deleteTask: deleteTaskReducer,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware]
});

sagaMiddleware.run(rootSaga)



