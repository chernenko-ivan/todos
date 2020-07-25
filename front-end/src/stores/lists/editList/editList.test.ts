import {List} from '../@types';
import {editListInLists} from './editList';

test('edit in lists', () => {
	const list: List = {
		title: 'check',
		id: 'list_1',
		tasks: [
			{
				title: 'test task 2',
				id: 'task_2',
				isDone: false,
				listId: 'list_1',
				description: 'test description',
				createdDate: new Date().toString(),
			},
			{
				title: 'test task 3',
				id: 'task_3',
				isDone: false,
				listId: 'list_1',
				description: 'test description',
				createdDate: new Date().toString(),
			},
		],
	};
	const mockLists: List[] = [
		{
			title: 'test list 1',
			id: 'list_1',
			tasks: [
				{
					title: 'test task 2',
					id: 'task_2',
					isDone: false,
					listId: 'list_1',
					description: 'test description',
					createdDate: new Date().toString(),
				},
				{
					title: 'test task 3',
					id: 'task_3',
					isDone: false,
					listId: 'list_1',
					description: 'test description',
					createdDate: new Date().toString(),
				},
			],
		},
		{
			title: 'test list 2',
			id: 'list_2',
			tasks: [
				{
					title: 'test task 2',
					id: 'task_4',
					isDone: false,
					listId: 'list_2',
					description: 'test description',
					createdDate: new Date().toString(),
				},
				{
					title: 'test task 3',
					id: 'task_5',
					isDone: false,
					listId: 'list_2',
					description: 'test description',
					createdDate: new Date().toString(),
				},
			],
		},
	];

	const lists = editListInLists(mockLists, list);

	expect(lists[0]).toStrictEqual(list);
	expect(lists[1]).toStrictEqual(mockLists[1]);
});
