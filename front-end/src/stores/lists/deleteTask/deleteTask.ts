import * as _ from 'lodash';
import {DeleteTaskPayload, List, ListsState, Task} from '../@types';
import {CaseReducer, PayloadAction} from '@reduxjs/toolkit';

// deleteTask returns new TaskState without task with id equals action.payload.id.
export const deleteTask: CaseReducer<
	ListsState,
	PayloadAction<DeleteTaskPayload>
> = (state, action) => ({
	...state,
	lists: removeTaskFromLists(state.lists, action.payload),
});

// removeTaskFromLists
export const removeTaskFromLists = (
	lists: List[],
	deletePayload: DeleteTaskPayload,
): List[] =>
	lists.map(list =>
		list.id === deletePayload.listId
			? removeTaskFromList(list, deletePayload)
			: list,
	);

// predicateTaskById returns false if task.id equals to id.
export const predicateTaskById = _.curry(
	(id: string, task: Task) => task.id !== id,
);

// filterTask filters Task[] with uses of pred.
export const filterTasks = _.curry(
	(pred: (task: Task) => boolean, t: Task[]): Task[] => {
		const tasks = [...t];
		return tasks.filter(pred);
	},
);

// removeTask returns new Task[] without Task with id equals to payload.id.
export const removeTaskFromList = (
	list: List,
	payload: DeleteTaskPayload,
): List => ({
	...list,
	tasks: filterTasks(predicateTaskById(payload.taskId))(list.tasks),
});
