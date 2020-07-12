import {createSlice, configureStore} from '@reduxjs/toolkit';
import {addTask} from "./createNewTask";
import {deleteTask} from "./deleteTask";
import {TasksState} from "./@types";

export const tasks = createSlice({
    name: 'tasks',
    initialState: {
        tasks: []
    } as TasksState,
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

