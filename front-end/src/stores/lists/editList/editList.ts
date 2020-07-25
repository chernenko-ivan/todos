import {CaseReducer, PayloadAction} from '@reduxjs/toolkit';
import {List, ListsState} from '../@types';

// editList
export const editList: CaseReducer<ListsState, PayloadAction<List>> = (
	state,
	action,
) => ({
	...state,
	lists: editListInLists(state.lists, action.payload),
});

// editListInLists
export const editListInLists = (lists: List[], edList: List) =>
	lists.map(list => (list.id === edList.id ? edList : list));
