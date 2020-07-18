import {createSlice} from "@reduxjs/toolkit";
import {deleteList} from "./deleteList/deleteList";
import {editList} from "./editList/editList";
import {createList} from "./createList/createList";
import {createTask} from "./createTask/createNewTask";
import {editTask} from "./editTask/editTask";
import {deleteTask} from "./deleteTask/deleteTask";
import {ListsState} from "./@types";

const lists = createSlice({
    name: 'lists',
    initialState: {
        lists: []
    } as ListsState,
    reducers: {
        deleteList,
        editList,
        createList,
        createTask,
        editTask,
        deleteTask,
    }
});

const {reducer, actions} = lists;
export const listsReducer = reducer;
export const listsActions = actions;