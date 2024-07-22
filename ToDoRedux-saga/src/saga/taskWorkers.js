import { put, select } from 'redux-saga/effects';
import { addTask, deleteTask, loadTasks, clear, editTask } from '../redux/Slice/taskSlice';
import { addDeleteListTask, loadTasksHistory } from '../redux/Slice/deletaTaskSlice';
import { addDoneTask, loadTasksDone } from '../redux/Slice/doneTaskSlice'
import { v4 as uuidv4 } from 'uuid';
import { saveToLocalStorage, 
        deleteToLocalStorage, 
        saveDeletedTaskLocalStorage, 
        saveDoneTaskLocalStorage } from './localStorageSagas';

export function* addTaskAsync(action) {
    const newTask = { id: uuidv4(), task: action.payload.task, edit: false };
    yield put(addTask(newTask));
    yield saveToLocalStorage();
}

export function* deleteTaskAsync(action) {
    const tasks = yield select((state) => state.tasks.data);
    const taskToDelete = tasks.find(task => task.id === action.payload);

    if (taskToDelete) {
        yield put(deleteTask(action.payload));
        yield deleteToLocalStorage(action.payload);
        yield put(addDeleteListTask(taskToDelete));
        yield saveDeletedTaskLocalStorage();
    }
}

export function* loadDoneTasksAsync() {
    const doneTasks = JSON.parse(localStorage.getItem('doneTask')) || [];
    if (doneTasks.length > 0) {
        yield put(loadTasksDone(doneTasks));
    }
}

export function* loadHistoryTasksAsync() {
    const tasks = JSON.parse(localStorage.getItem('tasksHistory')) || [];
    if (tasks.length > 0) {
        yield put(loadTasksHistory(tasks));
    }
}

export function* loadTasksAsync() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    if (tasks.length > 0) {
        yield put(loadTasks(tasks));
    }
}

export function* clearTasksAsync() {
    const allTasks = yield select((state) => state.tasks.data);
    const existingTasksHistory = JSON.parse(localStorage.getItem('tasksHistory')) || [];
    const updatedTasksHistory = [...existingTasksHistory, ...allTasks];
    localStorage.setItem('tasksHistory', JSON.stringify(updatedTasksHistory));
    localStorage.removeItem('tasks');
    yield put(addDeleteListTask(allTasks));
    yield put(clear());
}

export function* doneTaskAsync(action) {
    const tasks = yield select((state) => state.tasks.data);
    const task = tasks.find(task => task.id === action.payload);

    if (task) {
        yield put(addDoneTask(task));
        yield put(deleteTask(action.payload));
        yield deleteToLocalStorage(action.payload);
        yield saveDoneTaskLocalStorage();
    }
}

export function* editTaskAsync(action) {
    const tasks = yield select((state) => state.tasks.data);
    const updatedTasks = tasks.map(task => {
        if (task.id === action.payload) {
            return { ...task, edit: !task.edit };
        }
        return task;
    });
    yield put(editTask(updatedTasks));
    yield saveToLocalStorage();
}

export function* savingAfterEditingAsync(action){
    const tasks = yield select((state) => state.tasks.data);
    const updatedTasks = tasks.map(task => {
        if(task.id === action.payload.id){
            return {...task, task: action.payload.value};
        }
        return task;
    })
    yield put(editTask(updatedTasks));
    yield saveToLocalStorage();
}
