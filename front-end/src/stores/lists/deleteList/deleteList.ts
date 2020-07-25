import {CaseReducer, PayloadAction} from '@reduxjs/toolkit';
import {DeleteListPayload, List, ListsState} from '../@types';

// deleteList
export const deleteList: CaseReducer<
	ListsState,
	PayloadAction<DeleteListPayload>
> = (state, action) => ({
	...state,
	lists: removeListFromLists(state.lists, action.payload),
});

// removeListFromLists
export const removeListFromLists = (
	l: List[],
	deletePayload: DeleteListPayload,
) => {
	const lists = [...l];
	return lists.filter(list => list.id !== deletePayload.listId);
};
