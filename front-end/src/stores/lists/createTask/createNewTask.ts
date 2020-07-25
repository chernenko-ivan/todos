import {List, ListsState, NewTaskPayload, Task, TaskPrepare} from '../@types';
import {CaseReducer, PayloadAction} from '@reduxjs/toolkit';
import {compose} from 'redux';
import * as _ from 'lodash';
import {setCreatedDate, setIsDone} from '../../utils/tasksHelper';
import {generateId} from '../../utils/generateId';

// createTask returns new ProjectState with new lists with new Task object created from action.payload.
export const createTask: CaseReducer<
	ListsState,
	PayloadAction<NewTaskPayload>
> = (state, action) => ({
	...state,
	lists: addNewTaskToLists(state.lists, action.payload),
});

// addNewTaskToLists create task from payload and insert it into list task.
export const addNewTaskToLists = (
	lists: List[],
	payload: NewTaskPayload,
): List[] => compose(insertTaskIntoLists(lists), createNewTask)(payload);

// insertIntoLists insert task into list that had id equals to task.id.
export const insertTaskIntoLists = _.curry(
	(lists: List[], task: Task): List[] =>
		lists.map(list =>
			list.id === task.listId ? insertIntoList(list, task) : list,
		),
);

// insertIntoList insert task into list and return new list obj.
export const insertIntoList = _.curry(
	(list: List, task: Task): List => ({
		...list,
		tasks: [...list.tasks, task as Task],
	}),
);

// createNewTask returns new Task object.
export const createNewTask = (data: NewTaskPayload): TaskPrepare =>
	<TaskPrepare>compose(setId, setIsDoneFalse, setCreatedDate)(data);

// setIsDoneFalse returns new TaskObject with isDone false.
export const setIsDoneFalse = setIsDone(false);

// setId set uniq id that start with 'type_' and return TaskPrepare.
export const setId = (data: TaskPrepare): TaskPrepare => ({
	...data,
	id: generateTaskId(),
});

// generateTaskId return uniq id that start with 'type_'.
export const generateTaskId = generateId('task');
