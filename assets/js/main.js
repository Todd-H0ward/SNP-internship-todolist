import {TodoList} from "./todoList.js";

const input = document.querySelector(".input");
const tasksWrapper = document.querySelector(".tasks-wrapper");
const controlsNumber = document.querySelector(".controls__number");
const todoList = new TodoList(".tasks-wrapper");

const addTask = () => {
    if (input.value.length !== 0) {
        todoList.addTask(input.value);
        input.value = "";
    }
}

const updateTasksCount = () => {
    controlsNumber.textContent = String(todoList.tasks.length);
}

const toggleTaskActivity = (elem) => {
    const elemId = Number(elem.dataset.id);
    todoList.toggleActive(elemId);
    elem.classList.toggle("task--finished");
}

const deleteTask = (elem) => {
    const elemId = Number(elem.dataset.id);
    todoList.removeTask(elemId);
}

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
        updateTasksCount();
    }
})

tasksWrapper.addEventListener("click", (event) => {
    const elem = event.target;
    const task = elem.closest(".task");
    if (elem.classList.contains("checkbox")) {
        toggleTaskActivity(task);
    } else if (elem.classList.contains("delete")) {
        deleteTask(task);
    }
})

tasksWrapper.addEventListener("dblclick", (event) => {
    const elem = event.target;
    if (elem.classList.contains("title")) {
        const elemId = elem.closest(".task").dataset.id;
        todoList.changeTitle(Number(elemId));
    }
})