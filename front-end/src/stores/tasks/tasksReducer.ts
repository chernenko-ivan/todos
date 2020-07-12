import {createSlice, configureStore} from '@reduxjs/toolkit';
import {addTask} from "./createNewTask";
import {deleteTask} from "./deleteTask";

export const tasks = createSlice({
    name: 'tasks',
    initialState: {
        tasks: []
    },
    reducers: {
        addTask,
        deleteTask
    }
});

export const store = configureStore({
    reducer: {
        tasks: tasks.reducer
    }
});

