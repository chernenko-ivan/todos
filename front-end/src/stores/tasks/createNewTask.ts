import {AddTask, Task, TaskState} from "./@types";
import {PayloadAction} from "@reduxjs/toolkit";
import {compose} from "redux";
import {setCreatedDate, setId, setIsDone} from "../utils/tasksHelper";

// addTask returns new array with new Task object created from action.payload.
export const addTask = (state: TaskState, action: PayloadAction<AddTask, 'tasks/addTask'>): TaskState => ({
    ...state,
    tasks: state.tasks.concat(createNewTask(action.payload))
});

// createNewTask returns new Task object.
// it receive AddTask and set createdDate, id and isDone to it.
const createNewTask = (data: AddTask) => compose(
    setId,
    setIsDoneFalse,
    setCreatedDate
)(data);

// setIsDoneFalse returns new TaskObject with isDone false.
const setIsDoneFalse = setIsDone(false);
