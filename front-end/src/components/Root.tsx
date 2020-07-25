import * as React from 'react';
import {FC} from 'react';
import {Provider} from 'react-redux';
import {EnhancedStore} from '@reduxjs/toolkit';
import {App} from './App/App';

export interface RootProps {
	store: EnhancedStore;
}

export const Root: FC<RootProps> = ({store}) => (
	<Provider store={store}>
		<App />
	</Provider>
);
