import { select } from 'redux-saga/effects';

export function* saveToLocalStorage() {
    const tasks = yield select((state) => state.tasks.data);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function* deleteToLocalStorage(id) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = tasks.filter(item => item.id !== id);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

export function* saveDeletedTaskLocalStorage() {
    const deleteTasks = yield select((state) => state.deleteTask.data);
    localStorage.setItem('tasksHistory', JSON.stringify(deleteTasks));
}

export function* saveDoneTaskLocalStorage() {
    const doneTasks = yield select((state) => state.doneTasks.data);
    localStorage.setItem('doneTask', JSON.stringify(doneTasks));
}
