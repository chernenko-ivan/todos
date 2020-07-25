import {List} from '../../stores/lists/@types';
import * as React from 'react';
import {FC} from 'react';
import {ListViewProps} from './ListView';

export interface ListContainerProps {
	list: List;
	deleteList: (DeleteListPayload) => void;
	editList: (List) => void;
}

export const ListContainer = (
	Component: FC<ListViewProps>,
): FC<ListContainerProps> => ({list, deleteList, editList}) => {
	const removeList = () => deleteList({listId: list.id});

	return (
		<Component editList={editList} removeList={removeList} list={list} />
	);
};
