import { takeEvery } from 'redux-saga/effects'
import { taskAsyncActions } from './asyncActions'
import { 
    addTaskAsync, 
    deleteTaskAsync, 
    loadTasksAsync, 
    clearTasksAsync, 
    loadHistoryTasksAsync, 
    doneTaskAsync, 
    loadDoneTasksAsync, 
    editTaskAsync,
    savingAfterEditingAsync} from './taskWorkers'

export function* taskWatcher() {
    yield takeEvery(taskAsyncActions.addTaskAsync.type, addTaskAsync);
    yield takeEvery(taskAsyncActions.deleteTaskAsync.type, deleteTaskAsync);
    yield takeEvery(taskAsyncActions.loadTasksAsync.type, loadTasksAsync);
    yield takeEvery(taskAsyncActions.clearTasksAsync.type, clearTasksAsync);
    yield takeEvery(taskAsyncActions.loadHistoryTasksAsync.type, loadHistoryTasksAsync);
    yield takeEvery(taskAsyncActions.doneTaskAsync.type, doneTaskAsync);
    yield takeEvery(taskAsyncActions.loadDoneTasksAsync.type, loadDoneTasksAsync);
    yield takeEvery(taskAsyncActions.editTaskAsync.type, editTaskAsync);
    yield takeEvery(taskAsyncActions.savingAfterEditingAsync.type, savingAfterEditingAsync);
}