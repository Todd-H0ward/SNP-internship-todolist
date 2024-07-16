import "../scss/main.scss";
import { clearActiveButton, render, updateTasksCount } from "./domUtils";
import {
    addTask,
    handleClearFinished,
    handleTaskAction,
    handleTitleChange,
    handleToggleAll,
} from "./handlers";

export const todosWrapper = document.querySelector(".todos__wrapper");
export const input = todosWrapper.querySelector(".input");
export const tasksWrapper = todosWrapper.querySelector(".tasks-wrapper");
export const filterButtons = todosWrapper.querySelectorAll(".todos__btn");
export const arrowButton = todosWrapper.querySelector(".arrow-btn");
export const clearButton = todosWrapper.querySelector(".clear");

filterButtons.forEach((btn) =>
    btn.addEventListener("click", () => {
        const filterValue = btn.dataset.filter;
        clearActiveButton();
        btn.classList.add("button--active");
        render(filterValue);
        updateTasksCount();
        filter = filterValue;
    }),
);

window.addEventListener("click", (event) => {
    if (!todosWrapper.contains(event.target)) addTask();
});

input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") addTask();
});

tasksWrapper.addEventListener("click", handleTaskAction);
tasksWrapper.addEventListener("dblclick", handleTitleChange);
tasksWrapper.addEventListener("touchend", handleTitleChange);
arrowButton.addEventListener("click", handleToggleAll);
clearButton.addEventListener("click", handleClearFinished);

const loadTasks = () => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (!savedTasks) return { filter: "all", tasks: [] };
    return {
        filter: savedTasks.filter,
        tasks: savedTasks.tasks,
    };
};

export const saveTasks = () =>
    localStorage.setItem("tasks", JSON.stringify({ filter, tasks }));
export let { filter, tasks } = loadTasks();
export const setTasks = (newTasks) => (tasks = newTasks);

if (tasks.length !== 0) {
    clearActiveButton();
    document
        .querySelector(`[data-filter="${filter}"]`)
        .classList.add("button--active");
    render(filter);
    updateTasksCount();
}
