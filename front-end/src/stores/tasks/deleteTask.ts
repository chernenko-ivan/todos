import * as _ from "lodash";
import {DeleteTask, Task, TaskState} from "./@types";
import {compose} from "redux";
import {PayloadAction} from "@reduxjs/toolkit";

// predicateTaskById returns false if task.id equals to id.
const predicateTaskById = _.curry((id: number, task: Task) => task.id !== id);

// filterTask filters Task[] with uses of pred.
const filterTask = _.curry((pred: (task: Task) => boolean, t: Task[]) => {
    const tasks = [...t];
    return tasks.filter(pred);
});

// removeTask returns new Task[] without Task with id equals to payload.id.
const removeTask = (state: TaskState, payload: DeleteTask): Task[] => compose(
    filterTask(predicateTaskById(payload.id))
)(state.tasks);

// deleteTask returns new TaskState without task with id equals action.payload.id.
export const deleteTask = (state: TaskState, action: PayloadAction<DeleteTask, 'tasks/DeleteTask'>): TaskState => ({
    ...state,
    tasks: removeTask(state, action.payload)
});