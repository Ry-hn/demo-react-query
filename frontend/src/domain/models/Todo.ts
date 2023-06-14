export type Todo = {
    id: string;
    title: string;
    isDone: boolean;
    priority: "top" | "top-not"
}

export type TodoResponse = {
    data: Todo[],
}