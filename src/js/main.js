import "../scss/main.scss";
import { addTask, handleClearFinished, handleToggleAll } from "./handlers";
import {
    arrowButton,
    clearButton,
    filterButtons,
    input,
    todosFilter,
    todosWrapper,
} from "./domElements";
import { clearActiveButton, render, updateTasksCount } from "./domUtils";

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
