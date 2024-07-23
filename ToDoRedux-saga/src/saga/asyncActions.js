import { createAction } from '@reduxjs/toolkit';

export const taskAsyncActions = Object.freeze({
    addTaskAsync: createAction('ADD_NEW_TASK'),
    deleteTaskAsync: createAction('DELETE_TASK'),
    doneTaskAsync: createAction('DONE_TASK'),
    loadTasksAsync: createAction('LOAD_TASKS'),
    clearTasksAsync: createAction('CLEAR_TASKS'),
    loadHistoryTasksAsync: createAction('LOAD_HISTORY'),
    loadDoneTasksAsync: createAction('LOAD_DONE'),
    editTaskAsync: createAction('EDIT_TASK'),
    savingAfterEditingAsync: createAction('SAVING_TASK_AFTER_EDIT'),
});
    