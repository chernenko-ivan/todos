import * as React from 'react';
import {ActionCreatorWithOptionalPayload} from '@reduxjs/toolkit';
import {DeleteTaskPayload, Task} from '../../stores/lists/@types';
import {FC} from 'react';

interface TaskProps {
	task: Task;
	deleteTask: (taskId: string) => void;
}

export const TaskView: FC<TaskProps> = ({task, deleteTask}) => {
	return (
		<div>
			<div>{task.title}</div>
			<div>{task.description}</div>
			<button onClick={() => deleteTask(task.id)}>delete</button>
		</div>
	);
};
