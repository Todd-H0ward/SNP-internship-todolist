import "../scss/main.scss";
import {
    clearActiveButton,
    render,
    todosWrapper,
    updateTasksCount,
} from "./domUtils";
import { addTask, handleClearFinished, handleToggleAll } from "./handlers";

export const input = todosWrapper.querySelector(".input");
export const todosFilter = todosWrapper.querySelector(".todos__filters");
export const filterButtons = todosFilter.querySelectorAll(".todos__btn");
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
        saveTasks();
    }),
);

arrowButton.addEventListener("click", handleToggleAll);
clearButton.addEventListener("click", handleClearFinished);
window.addEventListener("click", (event) => {
    if (!todosWrapper.contains(event.target)) addTask();
});
input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") addTask();
});

const loadTasks = () => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (!savedTasks) return { filter: "all", tasks: [] };
    return savedTasks;
};

export const saveTasks = () =>
    localStorage.setItem("tasks", JSON.stringify({ filter, tasks }));

export let { filter, tasks } = loadTasks();
export const setTasks = (newTasks) => (tasks = newTasks);

if (tasks.length !== 0) {
    clearActiveButton();
    todosFilter
        .querySelector(`[data-filter="${filter}"]`)
        .classList.add("button--active");
    render(filter);
    updateTasksCount();
}
