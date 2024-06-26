"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoService = void 0;
const Utils_1 = require("../utils/Utils");
class TodoService {
    constructor() {
        this.todos = [];
    }
    addTodo(title) {
        const newTodo = {
            id: (0, Utils_1.generateId)(),
            title,
            completed: false
        };
        this.todos.push(newTodo);
        return newTodo;
    }
    getTodos() {
        return this.todos;
    }
    markAsCompleted(id) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            todo.completed = true;
            return true;
        }
        return false;
    }
    removeTodo(id) {
        const index = this.todos.findIndex(todo => todo.id === id);
        if (index > -1) {
            this.todos.splice(index, 1);
            return true;
        }
        return false;
    }
}
exports.todoService = new TodoService();
