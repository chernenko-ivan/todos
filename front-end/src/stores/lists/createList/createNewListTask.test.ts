import {List, NewListPayload} from "../@types";
import {createNewList, generateListId, insertListIntoLists, setId} from "./createList";

test('create new list', () => {
    const data: NewListPayload = {
        title: 'test title',
    };
    const list = createNewList(data);

    expect(list.title).toBe(data.title);
    expect(list.id).toBeDefined();
    expect(list.tasks.length).toBe(0);
});

test('set tasks', () => {
    const data: NewListPayload = {
        title: 'test title',
    };
    const list = createNewList(data);

    expect(list.title).toBe(data.title);
    expect(list.tasks.length).toBe(0);
});

test('insert into lists', () => {
    const mockList: List = {
        title: 'test list',
        tasks: [],
        id: 'list_1',
    };

    const lists = insertListIntoLists([], mockList);

    expect(lists[0].title).toBe(mockList.title);
    expect(lists[0].tasks.length).toBe(0);
    expect(lists[0].id).toBe(mockList.id);
    expect(lists.length).toBe(1);
});

test('generate list id', () => {
   expect(generateListId().startsWith('list_')).toBe(true);
});

test('set id to list', () => {
    const data: NewListPayload = {
        title: 'test title',
    };

    const testData = setId(data);

    expect(testData.title).toBe(data.title);
    expect(testData.id).toBeDefined();
});
