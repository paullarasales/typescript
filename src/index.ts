import { todoService } from "./services/TodoService";

console.log("Adding Todos:");
const todo1 = todoService.addTodo("Learn TypeScript");
const todo2 = todoService.addTodo("Build a Todo App");
console.log(todoService.getTodos());

console.log("\nMarking the first todo as completed:");
todoService.markAsCompleted(todo1.id);
console.log(todoService.getTodos());

console.log("\nRemoving the second todo:");
todoService.removeTodo(todo2.id);
console.log(todoService.getTodos());