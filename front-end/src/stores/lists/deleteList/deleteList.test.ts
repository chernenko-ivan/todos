import {List} from "../@types";
import {removeListFromLists} from "./deleteList";

test('delete list', () => {
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
                }
            ]
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
                }
            ]
        }
    ];

    const lists = removeListFromLists(mockLists, {listId: 'list_1'});

    expect(lists.length).toBe(1);
    expect(lists[0]).toStrictEqual(mockLists[1]);
});