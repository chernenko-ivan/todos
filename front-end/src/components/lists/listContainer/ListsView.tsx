import * as React from 'react';
import {
	DeleteListPayload,
	DeleteTaskPayload,
	List,
	NewListPayload,
	NewTaskPayload,
	Task,
} from '../../../stores/lists/@types';
import {FC} from 'react';
import {ActionCreatorWithOptionalPayload} from '@reduxjs/toolkit';
import {ListPlate} from '../../list/List';
import {NewListPlaceholder} from '../newListPlaceholder/NewListPlaceholder';
import './lists.less';

export interface ListsViewProps {
	lists: List[];
	editList: ActionCreatorWithOptionalPayload<List>;
	deleteList: ActionCreatorWithOptionalPayload<DeleteListPayload>;
	createList: ActionCreatorWithOptionalPayload<NewListPayload>;
}

export const ListsView: FC<ListsViewProps> = ({
	lists,
	createList,
	deleteList,
	editList,
}) => {
	return (
		<div className='lists'>
			<div className='lists__listsContainer'>
				{lists.map(list => (
					<ListPlate
						key={list.id}
						deleteList={deleteList}
						list={list}
						editList={editList}
					/>
				))}
				<NewListPlaceholder createList={createList} />
			</div>
		</div>
	);
};
