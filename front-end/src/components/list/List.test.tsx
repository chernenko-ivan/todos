import * as React from 'react';
import {ListPlate} from './List';
import {fireEvent, render} from '@testing-library/react';
import '@testing-library/jest-dom';

describe('list component', () => {
	const list = {
		tasks: [],
		title: 'test list',
		id: 'list_1',
	};
	const deleteList = jest.fn();
	const editList = jest.fn();

	const wrapper = render(
		<ListPlate list={list} deleteList={deleteList} editList={editList} />,
	);

	test('render', () => {
		expect(wrapper.findByText(list.title)).toBeInTheDocument();
	});
});
