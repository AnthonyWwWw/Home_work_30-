# To-Do List Application

This is a To-Do List application built with React, Redux, Redux-Saga, and localStorage. It allows users to manage their tasks efficiently by adding, editing, deleting, and marking tasks as completed. The application also saves the state of tasks, completed tasks, and deleted task history in localStorage for persistence across sessions.

## Features

- **Add Tasks**: Users can add new tasks to their to-do list.
- **Edit Tasks**: Users can edit existing tasks.
- **Delete Tasks**: Users can delete tasks, which are then moved to the deleted tasks history.
- **Mark Tasks as Completed**: Users can mark tasks as completed, and these tasks are saved in the completed tasks list.
- **Load Tasks**: The application loads current tasks, completed tasks, and deleted task history from localStorage on startup.
- **Clear Tasks**: Users can clear the entire list of current tasks, moving them to the deleted tasks history.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/AnthonyWwWw/Home_work_30.git
cd ToDoRedux-saga
```
## Install the dependencies:
```
npm install react react-dom react-redux @reduxjs/toolkit redux-saga @emotion/react @emotion/styled @mui/material @mui/icons-material @mui/system sass
```

## Usage
>Adding a Task: Enter a task in the input field and click the "Add Task" button.

>Editing a Task: Click the "Edit" button next to a task to enable editing. After making changes, click the "Save" button to save the changes.

>Deleting a Task: Click the "Delete" button next to a task to delete it. The task will be moved to the deleted tasks history.

>Marking a Task as Completed: Click the "Complete" button next to a task to mark it as completed. The task will be moved 
to the completed tasks list.

>Clearing Tasks: Click the "Clear All Tasks" button to clear the list of current tasks. All tasks will be moved to the deleted tasks history.

## Code Structure

>src/redux/Slice/taskSlice.js: Redux slice for managing tasks.

>src/redux/Slice/deletedTaskSlice.js: Redux slice for managing deleted tasks.

>src/redux/Slice/doneTaskSlice.js: Redux slice for managing completed tasks.

>src/sagas/taskWorkers.js: Sagas for handling asynchronous task-related actions.

>src/sagas/localStorageSagas.js: Sagas for interacting with localStorage.

>src/sagas/asyncActions.js: Definition of asynchronous actions for sagas.

>src/sagas/taskWatcher.js: Watcher saga for task-related actions.

>src/sagas/rootSaga.js: Root saga to combine all watcher sagas.
