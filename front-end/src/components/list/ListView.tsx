import {List} from '../../stores/lists/@types';
import * as React from 'react';
import {FC} from 'react';
import './list.less';

export interface ListViewProps {
	removeList: () => void;
	editList: (list: List) => void;
	list: List;
}

export const ListView: FC<ListViewProps> = ({list}) => {
	console.log('21312312312312312312123');
	return (
		<div className='list'>
			<div className='list__title'>{list.title}</div>
		</div>
	);
};
