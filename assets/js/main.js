import {TodoList} from "./todoList.js";

const input = document.querySelector(".input");
const controls = document.querySelector(".controls");
const tasksWrapper = document.querySelector(".tasks-wrapper");
const controlsNumber = document.querySelector(".controls__number");
const todoButtons = document.querySelectorAll(".todos__btn");

const todoList = new TodoList(".tasks-wrapper");

const addTask = () => {
    if (input.value.length !== 0) {
        todoList.addTask(input.value);
        input.value = "";
    }
}

const updateTasksCount = () => {
    controlsNumber.textContent = String(todoList.getTasksCount());
    if (todoList.tasks.length === 0) {
        controls.style.display = "none";
    } else {
        controls.style.display = "flex";
    }
}

const toggleTaskActivity = (elem) => {
    const elemId = Number(elem.dataset.id);
    todoList.toggleActive(elemId);
    elem.classList.toggle("task--finished");
}

const deleteTask = (elem) => {
    const elemId = Number(elem.dataset.id);
    todoList.removeTask(elemId);
    updateTasksCount();
}

const changeTitle = (elem, task) => {
    const elemId = Number(task.dataset.id);
    elem.setAttribute("contenteditable", true);
    elem.addEventListener("blur", () => {
        todoList.changeTitle(elemId, elem.textContent);
    })
}

const clearActiveButton = () => {
    todoButtons.forEach(btn => btn.classList.remove("button--active"));
}

todoButtons.forEach(btn => btn.addEventListener("click", () => {
    clearActiveButton();
    btn.classList.add("button--active");
    const filterValue = btn.dataset.filter;
    todoList.setFilter(filterValue);
    updateTasksCount();
}))

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
    const task = elem.closest(".task");
    if (elem.classList.contains("title")) {
        changeTitle(elem, task);
    }
})