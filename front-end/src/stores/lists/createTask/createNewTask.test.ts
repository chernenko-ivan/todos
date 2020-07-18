import {List, NewTaskPayload, Task} from "../@types";
import {
    addNewTaskToLists,
    createNewTask,
    generateTaskId,
    insertIntoList,
    insertTaskIntoLists, setId,
    setIsDoneFalse
} from "./createNewTask";


test('create new task', () => {
    const data: NewTaskPayload = {
        listId: 'list_1',
        title: 'test title',
        description: 'test description',
    };
    const task = createNewTask(data);

    expect(task.title).toBe(data.title);
    expect(task.description).toBe(data.description);
    expect(task.isDone).toBe(false);
    expect(task.id).toBeDefined();
    expect(task.createdDate).toBeDefined();
    expect(task.listId).toBeDefined();
});

test('set is done false', () => {
    const data: NewTaskPayload = {
        listId: 'list_1',
        title: 'test title',
        description: 'test description',
    };

    const testData = setIsDoneFalse(data);

    expect(testData.title).toBe(data.title);
    expect(testData.description).toBe(data.description);
    expect(testData.isDone).toBe(false);
    expect(testData.listId).toBeDefined();
});

test('insert into list', () => {
    const data: Task = {
        listId: 'list_1',
        title: 'test title',
        description: 'test description',
        id: 'task_1',
        isDone: false,
        createdDate: new Date().toString(),

    };
    const mockList: List = {
        title: 'test list',
        tasks: [],
        id: 'list_1',
    };

    const list = insertIntoList(mockList, data);

    expect(list.title).toBe(mockList.title);
    expect(list.tasks.length).toBe(1);
    expect(list.tasks[0].isDone).toBe(false);
    expect(list.tasks[0].createdDate).toBeDefined();
    expect(list.tasks[0].description).toBe(data.description);
    expect(list.tasks[0].listId).toBe(data.listId);
    expect(list.tasks[0].id).toBeDefined();
    expect(list.tasks[0].title).toBe(data.title);
    expect(list.id).toBe(mockList.id);
});

test('insert task into lists', () => {
    const data: Task = {
        listId: 'list_1',
        title: 'test title',
        description: 'test description',
        id: 'task_1',
        isDone: false,
        createdDate: new Date().toString(),
    };
    const mockList: List = {
        title: 'test list',
        tasks: [],
        id: 'list_1',
    };

    const lists = insertTaskIntoLists([mockList], data);

    expect(lists[0].title).toBe(mockList.title);
    expect(lists[0].tasks.length).toBe(1);
    expect(lists.length).toBe(1);
    expect(lists[0].tasks[0].isDone).toBe(false);
    expect(lists[0].tasks[0].createdDate).toBeDefined();
    expect(lists[0].tasks[0].description).toBe(data.description);
    expect(lists[0].tasks[0].listId).toBe(data.listId);
    expect(lists[0].tasks[0].id).toBeDefined();
    expect(lists[0].tasks[0].title).toBe(data.title);
    expect(lists[0].id).toBe(mockList.id);
});

test('add new tasks to list', () => {
    const data: NewTaskPayload = {
        listId: 'list_1',
        title: 'test title',
        description: 'test description',
    };
    const mockList: List = {
        title: 'test list',
        tasks: [],
        id: 'list_1',
    };
    const lists = addNewTaskToLists([mockList], data);

    expect(lists[0].tasks.length).toBe(1);
    expect(lists[0].title).toBe(mockList.title);
    expect(lists.length).toBe(1);
    expect(lists[0].tasks[0].isDone).toBe(false);
    expect(lists[0].tasks[0].createdDate).toBeDefined();
    expect(lists[0].tasks[0].description).toBe(data.description);
    expect(lists[0].tasks[0].listId).toBe(data.listId);
    expect(lists[0].tasks[0].id).toBeDefined();
    expect(lists[0].tasks[0].title).toBe(data.title);
    expect(lists[0].id).toBe(mockList.id);
});

test('generate list id', () => {
    expect(generateTaskId().startsWith('task_')).toBe(true);
});

test('set id to list', () => {
    const data: NewTaskPayload = {
        listId: 'list_1',
        title: 'test title',
        description: 'test description',
    };

    const testData = setId(data);

    expect(testData.title).toBe(data.title);
    expect(testData.description).toBe(data.description);
    expect(testData.listId).toBe(data.listId);
    expect(testData.id).toBeDefined();
});
