import { Todo, TodoResponse } from "../models/Todo";
import { TodoRepository } from "../repository/TodoRepository";

export class TodoUsecase implements TodoRepository {
    constructor(private repo: TodoRepository) { }

    getTodo(): Promise<TodoResponse> {
        return this.repo.getTodo()
    }
    addTodo(todo: Pick<Todo, "title" | "priority">): Promise<string> {
        return this.repo.addTodo(todo)
    }
    updateTodo(id: string, todo: Pick<Todo, "title" | "priority">): Promise<string> {
        return this.repo.updateTodo(id, todo)
    }
    deleteTodo(id: string): Promise<string> {
        return this.repo.deleteTodo(id)
    }

}