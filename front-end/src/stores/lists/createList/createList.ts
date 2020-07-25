import {CaseReducer, PayloadAction} from '@reduxjs/toolkit';
import {List, ListPrepare, ListsState, NewListPayload} from '../@types';
import {compose} from 'redux';
import {generateId} from '../../utils/generateId';
import * as _ from 'lodash';

// createList
export const createList: CaseReducer<
	ListsState,
	PayloadAction<NewListPayload>
> = (state, action) => ({
	...state,
	lists: addNewListToLists(state.lists, action.payload),
});

// addNewListToLists
export const addNewListToLists = (lists: List[], list: NewListPayload) =>
	compose(insertListIntoLists(lists), createNewList)(list);

//insertListIntoLists
export const insertListIntoLists = _.curry(
	(lists: List[], list: List): List[] => [...lists, list],
);

// createNewList
export const createNewList = (data: NewListPayload): ListPrepare =>
	compose(setTasks, setId)(data);

// setTasks
export const setTasks = (data: ListPrepare): ListPrepare => ({
	...data,
	tasks: [],
});

// setId
export const setId = (data: ListPrepare): ListPrepare => ({
	...data,
	id: generateListId(),
});

// generateListId
export const generateListId = generateId('list');
