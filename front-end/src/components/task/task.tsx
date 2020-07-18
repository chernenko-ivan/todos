import * as React from "react";
import {ActionCreatorWithOptionalPayload} from "@reduxjs/toolkit";
import {DeleteTaskPayload, Task} from "../../stores/lists/@types";
import {FC} from "react";

interface TaskProps {
    task: Task;
    deleteTask: ActionCreatorWithOptionalPayload<DeleteTaskPayload>;
    editTask: ActionCreatorWithOptionalPayload<Task>;
}

export const TaskView: FC<TaskProps> = ({task, editTask, deleteTask}) => {
    return (
        <div>
            <div>
                {task.title}
            </div>
            <div>
                {task.description}
            </div>
            <button
                onClick={() => deleteTask({taskId: task.id, listId: task.listId})}
            >
                delete
            </button>
        </div>
    )
};