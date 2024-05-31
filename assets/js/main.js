import {TodoList} from "./todoList";

const input = document.querySelector(".input");
const tasksWrapper = document.querySelector(".tasks-wrapper");

const todoList = new TodoList(".tasks-wrapper");

console.log(todoList.tasks);
todoList.addTask("some 1");
todoList.addTask("some 2");
todoList.addTask("some 3");
todoList.addTask("some 4");
console.log(todoList.tasks);
todoList.renderTasks();
