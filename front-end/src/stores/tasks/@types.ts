export interface Task {
    id?: number;
    title: string;
    dueDate: string;
    createdDate?: string;
    isDone?: boolean;
}

export interface TasksState {
    tasks: Task[];
}

export interface AddTask {
    title: string;
    dueDate: string;
}

export interface DeleteTask {
    id: number;
}