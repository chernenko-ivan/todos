import * as React from 'react';
import {DeleteListPayload, DeleteTaskPayload, List, NewTaskPayload, Task} from "../../stores/lists/@types";
import {ActionCreatorWithOptionalPayload} from "@reduxjs/toolkit";
import {FC, useState} from "react";
import {TaskView} from "../task/task";

interface ListProps {
    list: List;
    deleteList: ActionCreatorWithOptionalPayload<DeleteListPayload>;
    editList: ActionCreatorWithOptionalPayload<List>;
    createTask: ActionCreatorWithOptionalPayload<NewTaskPayload>;
    deleteTask: ActionCreatorWithOptionalPayload<DeleteTaskPayload>;
    editTask: ActionCreatorWithOptionalPayload<Task>;
}

export const ListView: FC<ListProps> = ({list, deleteList, editList, createTask, deleteTask, editTask,}) => {
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newTaskDescription, setNewTaskDescription] = useState('');

    return (
        <div>
            <div>{list.title}</div>
            {
                list.tasks.map(task => <TaskView
                        key={task.id}
                        task={task}
                        editTask={editTask}
                        deleteTask={deleteTask}
                    />)
            }
            <label>new task title</label>
            <input
                value={newTaskTitle}
                onChange={(e) => {
                    setNewTaskTitle(e.target.value);
                }}
            />
            <label>new task description</label>
            <input
                id="newTaskDescription"
                value={newTaskDescription}
                onChange={(e) => {
                    setNewTaskDescription(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    createTask({
                        title: newTaskTitle,
                        description: newTaskDescription,
                        listId: list.id,
                    });
                    setNewTaskDescription('');
                    setNewTaskTitle('');
                }}
            >
                create new task
            </button>
            <button
                onClick={() => deleteList({listId: list.id})}
            >
                delete
            </button>
        </div>
    )
};