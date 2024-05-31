import {TodoList} from "./todoList.js";

const input = document.querySelector(".input");
const tasksWrapper = document.querySelector(".tasks-wrapper");
const todoList = new TodoList(".tasks-wrapper");

const addTask = () => {
    todoList.addTask(input.value);
    input.value = "";

    console.log(todoList.tasks);
}

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
})

tasksWrapper.addEventListener("click", (event) => {
    const elem = event.target;
    if (elem.classList.contains("checkbox")) {
        const elemId = elem.closest(".task").dataset.id;
        todoList.toggleActive(Number(elem));
    }
})