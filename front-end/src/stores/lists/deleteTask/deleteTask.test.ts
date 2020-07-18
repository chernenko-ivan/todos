import {DeleteTaskPayload, List, Task} from "../@types";
import {filterTasks, predicateTaskById, removeTaskFromList, removeTaskFromLists} from "./deleteTask";


test('remove task from lists', () => {
    const deletePayload: DeleteTaskPayload = {
        listId: 'list_1',
        taskId: 'task_11'
    };
    const testTask12: Task = {
        id: 'task_12',
        listId: 'list_1',
        description: 'test description 12',
        title: 'test task 12',
        isDone: true,
        createdDate: new Date().toString(),
    };
    const testTask11: Task = {
        id: 'task_11',
        listId: 'list_1',
        description: 'test description 11',
        title: 'test task 11',
        isDone: false,
        createdDate: new Date().toString(),
    };
    const testTask21: Task = {
        id: 'task_21',
        listId: 'list_2',
        description: 'test description 21',
        title: 'test task 21',
        isDone: true,
        createdDate: new Date().toString(),
    };
    const testTask22: Task = {
        id: 'task_22',
        listId: 'list_2',
        description: 'test description 22',
        title: 'test task 22',
        isDone: true,
        createdDate: new Date().toString(),
    };
    const listsMock: List[] = [
        {
            title: 'test list 1',
            id: 'list_1',
            tasks: [
                testTask11,
                testTask12
            ]
        },
        {
            title: 'test list 2',
            id: 'list_2',
            tasks: [
                testTask21,
                testTask22
            ]
        }
    ];

    const lists = removeTaskFromLists(listsMock, deletePayload);

    // check that all lists exists.
    expect(lists.length).toBe(2);
    // check that length of tasks in first list is equal to 1.
    expect(lists[0].tasks.length).toBe(1);
    // check second task in first list
    expect(lists[0].tasks[0].createdDate).toBe(testTask12.createdDate);
    expect(lists[0].tasks[0].isDone).toBe(testTask12.isDone);
    expect(lists[0].tasks[0].title).toBe(testTask12.title);
    expect(lists[0].tasks[0].description).toBe(testTask12.description);
    expect(lists[0].tasks[0].id).toBe(testTask12.id);
    expect(lists[0].tasks[0].listId).toBe(testTask12.listId);
    // check that length of tasks in second list is not changed.
    expect(lists[1].tasks.length).toBe(2);
    // check first task in second list.
    expect(lists[1].tasks[0].createdDate).toBe(testTask21.createdDate);
    expect(lists[1].tasks[0].isDone).toBe(testTask21.isDone);
    expect(lists[1].tasks[0].title).toBe(testTask21.title);
    expect(lists[1].tasks[0].description).toBe(testTask21.description);
    expect(lists[1].tasks[0].id).toBe(testTask21.id);
    expect(lists[1].tasks[0].listId).toBe(testTask21.listId);
    // check second task in second list.
    expect(lists[1].tasks[1].createdDate).toBe(testTask22.createdDate);
    expect(lists[1].tasks[1].isDone).toBe(testTask22.isDone);
    expect(lists[1].tasks[1].title).toBe(testTask22.title);
    expect(lists[1].tasks[1].description).toBe(testTask22.description);
    expect(lists[1].tasks[1].id).toBe(testTask22.id);
    expect(lists[1].tasks[1].listId).toBe(testTask22.listId);
});

test('remove task from list', () => {
    const deletePayload: DeleteTaskPayload = {
        listId: 'list_1',
        taskId: 'task_1'
    };
    const mockList: List = {
        title: 'test title',
        id: 'list_1',
        tasks: [
            {
                id: 'task_1',
                listId: 'list_1',
                description: 'test description 1',
                title: 'test task 1',
                isDone: true,
                createdDate: new Date().toString(),
            },
            {
                id: 'task_2',
                listId: 'list_1',
                description: 'test description 2',
                title: 'test task 2',
                isDone: true,
                createdDate: new Date().toString(),
            }
        ],
    };

    const list = removeTaskFromList(mockList, deletePayload);

    expect(list.tasks[0].createdDate).toBe(mockList.tasks[1].createdDate);
    expect(list.tasks[0].isDone).toBe(mockList.tasks[1].isDone);
    expect(list.tasks[0].title).toBe(mockList.tasks[1].title);
    expect(list.tasks[0].description).toBe(mockList.tasks[1].description);
    expect(list.tasks[0].id).toBe(mockList.tasks[1].id);
    expect(list.tasks[0].listId).toBe(mockList.tasks[1].listId);
});

test('filter tasks all false', () => {
    const tasksMock: Task[] = [
        {
            id: 'task_1',
            listId: 'list_1',
            description: 'test description 1',
            title: 'test task 1',
            isDone: true,
            createdDate: new Date().toString(),
        },
        {
            id: 'task_2',
            listId: 'list_1',
            description: 'test description 2',
            title: 'test task 2',
            isDone: true,
            createdDate: new Date().toString(),
        }
    ];

    const tasks = filterTasks(() => false, tasksMock);

    expect(tasks.length).toBe(0);
});

test('filter tasks all true', () => {
    const tasksMock: Task[] = [
        {
            id: 'task_1',
            listId: 'list_1',
            description: 'test description 1',
            title: 'test task 1',
            isDone: true,
            createdDate: new Date().toString(),
        },
        {
            id: 'task_2',
            listId: 'list_1',
            description: 'test description 2',
            title: 'test task 2',
            isDone: true,
            createdDate: new Date().toString(),
        }
    ];

    const tasks = filterTasks(() => true, tasksMock);

    expect(tasks).toStrictEqual(tasksMock);
});

test('filter task by predicate', () => {
    const tasksMock: Task[] = [
        {
            id: 'task_1',
            listId: 'list_1',
            description: 'test description 1',
            title: 'test task 1',
            isDone: true,
            createdDate: new Date().toString(),
        },
        {
            id: 'task_2',
            listId: 'list_1',
            description: 'test description 2',
            title: 'test task 2',
            isDone: true,
            createdDate: new Date().toString(),
        }
    ];

    const tasks = filterTasks(predicateTaskById('task_1'), tasksMock);

    expect(tasks[0]).toStrictEqual(tasksMock[1]);
    expect(tasks.length).toBe(1);
});