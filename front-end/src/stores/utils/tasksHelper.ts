import * as _ from "lodash";
import {NewTaskPayload, Task, TaskPrepare} from "../lists/@types";

export const setCreatedDate = (data: TaskPrepare): TaskPrepare => ({...data, createdDate: JSON.stringify(new Date())});

export const setIsDone = _.curry((value: boolean, data: TaskPrepare): TaskPrepare => ({...data, isDone: value}));
