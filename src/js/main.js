import "../scss/main.scss";
import {
    addTaskOnEnter,
    handleClearFinished,
    handleClickOutsideTaskInput,
    handleFilterSelection,
    handleToggleAll,
} from "./handlers";
import {
    arrowButton,
    clearButton,
    filterButtons,
    input,
    todosFilter,
} from "./domElements";
import { clearActiveButton, render, updateTasksCount } from "./domUtils";
import { loadTasks } from "./utils";

export let { filter, tasks } = loadTasks();

export const setTasks = (newTasks) => (tasks = newTasks);
export const setFilter = (newFilter) => (filter = newFilter);

arrowButton.addEventListener("click", handleToggleAll);
clearButton.addEventListener("click", handleClearFinished);
window.addEventListener("click", handleClickOutsideTaskInput);
input.addEventListener("keydown", addTaskOnEnter);

filterButtons.forEach((btn) =>
    btn.addEventListener("click", handleFilterSelection),
);

if (tasks.length !== 0) {
    clearActiveButton();
    todosFilter
        .querySelector(`[data-filter="${filter}"]`)
        .classList.add("button--active");
    render(filter);
    updateTasksCount();
}
