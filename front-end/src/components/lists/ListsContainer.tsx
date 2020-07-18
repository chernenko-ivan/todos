import {FC, useState} from "react";
import {
    DeleteListPayload,
    DeleteTaskPayload,
    List,
    NewListPayload,
    NewTaskPayload,
    Task
} from "../../stores/lists/@types";
import {connect} from "react-redux";
import {RootState} from "../../stores/createStore";
import {listsActions} from '../../stores/lists/listsReducer'
import {ActionCreatorWithOptionalPayload} from '@reduxjs/toolkit'
import * as React from "react";
import {ListView} from "../list/list";

interface ListsProps {
    lists: List[];
    editList: ActionCreatorWithOptionalPayload<List>;
    deleteList: ActionCreatorWithOptionalPayload<DeleteListPayload>;
    createList: ActionCreatorWithOptionalPayload<NewListPayload>;
    createTask: ActionCreatorWithOptionalPayload<NewTaskPayload>;
    editTask: ActionCreatorWithOptionalPayload<Task>;
    deleteTask: ActionCreatorWithOptionalPayload<DeleteTaskPayload>;
}

export const Lists: FC<ListsProps> = ({lists, createList, deleteList, editTask, deleteTask, createTask, editList}) => {
    const [listName, setListName] = useState('');
    console.log(listName)
    return (
        <>
            <div>
                {
                    lists.map(list => <ListView
                        key={list.id}
                        createTask={createTask}
                        deleteList={deleteList}
                        list={list}
                        deleteTask={deleteTask}
                        editList={editList}
                        editTask={editTask}
                    />)
                }
            </div>
            <input
                value={listName}
                onChange={(e) => {
                    setListName(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    createList({
                        title: listName
                    });
                    setListName('');
                }}
            >
                create new list
            </button>
        </>
    )
};

const mapStateToProps = (state: RootState) => ({
    lists: state.lists.lists
});

const mapDispatchToProps = {
    editList: listsActions.editList,
    deleteList: listsActions.deleteList,
    createList: listsActions.createList,
    createTask: listsActions.createTask,
    editTask: listsActions.editTask,
    deleteTask: listsActions.deleteTask,
};

export const ListsContainer = connect(mapStateToProps, mapDispatchToProps)(Lists);