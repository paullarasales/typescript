import { Todo } from "../models/Todo";
import { generateId } from "../utils/Utils";


class TodoService {
    private todos: Todo[] = [];

    addTodo(title: string): Todo {
        const newTodo: Todo = {
            id: generateId(),
            title,
            completed: false
        };
        this.todos.push(newTodo);
        return newTodo;
    }

    getTodos(): Todo[] {
        return this.todos;
    }

    markAsCompleted(id: number): boolean {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = true;
            return true;
        } 

        return false;
    }

    removeTodo(id: number): boolean {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index > -1) {
            this.todos.splice(index, 1);
            return true;
        }

        return false;
    }
}

export const todoService = new TodoService();