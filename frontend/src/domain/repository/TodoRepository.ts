import { Todo, TodoResponse } from "../models/Todo";

export interface TodoRepository {
    getTodo(): Promise<TodoResponse>
    addTodo(todo: Pick<Todo, "title" | "priority">): Promise<string>
    updateTodo(id: string, todo: Pick<Todo, "title" | "priority">): Promise<string>
    deleteTodo(id: string): Promise<string>
}