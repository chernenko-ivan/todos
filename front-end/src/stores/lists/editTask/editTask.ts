import {CaseReducer, PayloadAction} from "@reduxjs/toolkit";
import {List, ListsState, Task} from "../@types";

// editTask
export const editTask: CaseReducer<ListsState, PayloadAction<Task>> = (state, action) => ({
    ...state,
    lists: editTaskInLists(state.lists, action.payload)
});

// editTaskInLists
export const editTaskInLists = (lists: List[], task: Task): List[] => lists.map(list => list.id === task.listId ? editTaskInList(list, task) : list);

// editTaskInList
export const editTaskInList = (list: List, edTask: Task): List => ({
    ...list,
    tasks: list.tasks.map(task => task.id === edTask.id ? edTask : task)
});