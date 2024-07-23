import { select } from 'redux-saga/effects';

export function* saveToLocalStorage() {
    const tasks = yield select((state) => state.tasks.data);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function* deleteToLocalStorage(taskId) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
}

export function* saveDeletedTaskLocalStorage() {
    const deletedTasks = yield select((state) => state.deletedTasks.data);
    localStorage.setItem('tasksHistory', JSON.stringify(deletedTasks));
}

export function* saveDoneTaskLocalStorage() {
    const doneTasks = yield select((state) => state.doneTasks.data);
    localStorage.setItem('doneTask', JSON.stringify(doneTasks));
}
