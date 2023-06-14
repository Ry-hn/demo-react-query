import { Todo, TodoResponse } from "../domain/models/Todo";
import { TodoRepository } from "../domain/repository/TodoRepository";

const baseURL = process.env.REACT_APP_SECRET_SERVICE

const customFetch = async (url: string, options?: RequestInit) => {
    return await fetch(`${baseURL}/${url}`, {
        headers: {
            "Content-Type": "application/json"
        },
        ...options
    }).then(res => res.json())
}

export class TodoFetch implements TodoRepository {
    async getTodo(): Promise<TodoResponse> {
        return await customFetch('/todo')
    }
    async addTodo(todo: Pick<Todo, "title" | "priority">): Promise<string> {
        return await customFetch('/todo/add', {
            method: "POST",
            body: JSON.stringify(todo)
        })
    }
    async updateTodo(id: string, todo: Pick<Todo, "title" | "priority">): Promise<string> {
        return await customFetch(`/todo/update/${id}`, {
            method: "PUT",
            body: JSON.stringify(todo)
        })
    }
    async deleteTodo(id: string): Promise<string> {
        return await customFetch(`/todo/delete/${id}`, {
            method: "DELETE"
        })
    }

}