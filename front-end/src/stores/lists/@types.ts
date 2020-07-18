export interface Task {
    id: string;
    title: string;
    description: string;
    createdDate: string;
    isDone: boolean;
    listId: string;
}

export interface ListsState {
    lists?: List[];
}

export interface List {
    title: string;
    tasks: Task[];
    id: string;
}

export interface TaskPrepare {
    listId: string;
    id?: string;
    title: string;
    description: string;
    createdDate?: string;
    isDone?: boolean;
}

export interface ListPrepare {
    title: string;
    tasks?: Task[];
    id?: string;
}

export interface NewTaskPayload {
    listId: string;
    title: string;
    description: string;
}

export interface NewListPayload {
    title: string;
}

export interface DeleteListPayload {
    listId: string;
}

export interface DeleteTaskPayload {
    taskId: string;
    listId: string;
}