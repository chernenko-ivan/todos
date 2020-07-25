import * as React from 'react';
import {FC} from 'react';
import {Lists} from '../lists/listContainer/ListsContainer';
import {Header} from '../header/Header';

export const App: FC = () => {
	return (
		<div>
			<Header />
			<Lists />
		</div>
	);
};
