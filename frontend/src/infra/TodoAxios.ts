import axios from "axios";
import { Todo, TodoResponse } from "../domain/models/Todo";
import { TodoRepository } from "../domain/repository/TodoRepository";

const http = axios.create({
    baseURL: process.env.REACT_APP_SECRET_SERVICE,
    headers: {
        'Content-Type': "application/json"
    }
})

export class TodoAxios implements TodoRepository {
    async getTodo(): Promise<TodoResponse> {
        return await http.get('/todo').then(res => res.data)
    }
    async addTodo(todo: Pick<Todo, "title" | "priority">): Promise<string> {
        return await http.post('/todo/add', todo).then(res => res.data)
    }
    async updateTodo(id: string, todo: Pick<Todo, "title" | "priority">): Promise<string> {
        return await http.put(`/todo/update/${id}`, todo).then(res => res.data)
    }
    async deleteTodo(id: string): Promise<string> {
        return await http.delete(`/todo/update/${id}`).then(res => res.data)
    }
}