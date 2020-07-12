import * as _ from "lodash";
import {Task} from "../tasks/@types";

export const setCreatedDate = (data: Task): Task => ({...data, createdDate: JSON.stringify(new Date())});

export const setId = (data: Task): Task => ({...data, id: Date.now()});

export const setIsDone = _.curry((value: boolean, data: Task) => ({...data, isDone: value}));
