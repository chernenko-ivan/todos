import {List, Task} from "../@types";
import {editTaskInList, editTaskInLists} from "./editTask";

test('edit task in lists', () => {
    const task: Task = {
        title: 'test task 1',
        id: 'task_1',
        isDone: false,
        listId: 'list_1',
        description: 'test description',
        createdDate: new Date().toString(),
    };
    const mockLists: List[] = [
        {
            title: 'test list 1',
            id: 'list_1',
            tasks: [
                task,
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
    task.isDone = true;
    task.description = 'hey';
    const lists = editTaskInLists(mockLists, task);

    expect(lists.length).toBe(2);
    expect(lists[0].tasks[0]).toStrictEqual(task);
    expect(lists[0].tasks[1]).toStrictEqual(mockLists[0].tasks[1]);
    expect(lists[0].tasks[2]).toStrictEqual(mockLists[0].tasks[2]);
    expect(lists[1]).toStrictEqual(mockLists[1]);
});

test('edit task in list', () => {
    const task: Task = {
        title: 'test task 1',
        id: 'task_2',
        isDone: true,
        listId: 'list_1',
        description: 'test description 1',
        createdDate: new Date().toString(),
    };
    const mockList: List = {
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
    };

    const list = editTaskInList(mockList, task);
    console.log(list)
    expect(list.tasks.length).toBe(2);
    expect(list.tasks[0]).toStrictEqual(task);
    expect(list.tasks[1]).toStrictEqual(mockList.tasks[1]);
});