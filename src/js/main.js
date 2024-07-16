import "../scss/main.scss";
import {
    clearActiveButton,
    render,
    updateTasksCount
} from "./domUtils";
import {
    addTask,
    handleClearFinished,
    handleTaskAction,
    handleTitleChange,
    handleToggleAll,
} from "./handlers";
import {TodoList} from "./todoList.js";

export const todosWrapper = document.querySelector(".todos__wrapper");
export const input = todosWrapper.querySelector(".input");
export const controls = todosWrapper.querySelector(".controls");
export const tasksWrapper = todosWrapper.querySelector(".tasks-wrapper");
export const controlsNumber = todosWrapper.querySelector(".number");
export const filterButtons = todosWrapper.querySelectorAll(".todos__btn");
export const arrowButton = todosWrapper.querySelector(".arrow-btn");
export const clearButton = todosWrapper.querySelector(".clear");

export const todoList = new TodoList();

filterButtons.forEach(btn =>
    btn.addEventListener("click", () => {
        clearActiveButton();
        btn.classList.add("button--active");
        render(btn.dataset.filter);
        updateTasksCount();
    })
);

window.addEventListener("click", event => {
    if (!todosWrapper.contains(event.target)) addTask();
});
input.addEventListener("keydown", event => {
    if (event.key === "Enter") addTask();
});

tasksWrapper.addEventListener("click", handleTaskAction);
tasksWrapper.addEventListener("dblclick", handleTitleChange);
tasksWrapper.addEventListener("touchend", handleTitleChange);
arrowButton.addEventListener("click", handleToggleAll);
clearButton.addEventListener("click", handleClearFinished);

if (todoList.tasks.length !== 0) {
    clearActiveButton();
    document
        .querySelector(`[data-filter="${todoList.filter}"]`)
        .classList.add("button--active");
    render(todoList.filter);
    updateTasksCount();
}
