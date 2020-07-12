import * as _ from "lodash";
import {AddTask, DeleteTask, Task, TasksState} from "./@types";
import {compose} from "redux";
import {CaseReducer, PayloadAction} from "@reduxjs/toolkit";

// predicateTaskById returns false if task.id equals to id.
const predicateTaskById = _.curry((id: number, task: Task) => task.id !== id);

// filterTask filters Task[] with uses of pred.
const filterTask = _.curry((pred: (task: Task) => boolean, t: Task[]) => {
    const tasks = [...t];
    return tasks.filter(pred);
});

// removeTask returns new Task[] without Task with id equals to payload.id.
const removeTask = (state: TasksState, payload: DeleteTask): Task[] => compose(
    filterTask(predicateTaskById(payload.id))
)(state.tasks);

// deleteTask returns new TaskState without task with id equals action.payload.id.
export const deleteTask: CaseReducer<TasksState, PayloadAction<DeleteTask, 'tasks/DeleteTask'>> = (state, action) => ({
    ...state,
    tasks: removeTask(state, action.payload)
});