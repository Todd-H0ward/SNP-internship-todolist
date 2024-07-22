import { input, todosWrapper } from "./domElements";
import { filter, setFilter, setTasks, tasks } from "./main";
import {
    clearSelection,
    makeSelection,
    satisfyFilter,
    saveTasks,
} from "./utils";
import {
    clearActiveButton,
    render,
    renderTask,
    updateTaskClasses,
    updateTasksCount,
} from "./domUtils";

export const addTask = () => {
    const inputValue = input.value.trim();
    if (inputValue) {
        const task = {
            id: Date.now(),
            title: inputValue,
            isActive: true,
        };
        tasks.push(task);
        input.value = "";
        if (satisfyFilter(task, filter)) renderTask(task);
        saveTasks();
        updateTasksCount();
    }
};

export const handleClickOutsideTaskInput = (event) => {
    if (!todosWrapper.contains(event.target)) addTask();
};

export const addTaskOnEnter = (event) => {
    if (event.key === "Enter") addTask();
};

export function handleFilterSelection() {
    const filterValue = this.dataset.filter;
    clearActiveButton();
    this.classList.add("button--active");
    render(filterValue);
    updateTasksCount();
    setFilter(filterValue);
    saveTasks();
}

export const handleTaskDelete = (elem, taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    elem?.remove();
    updateTasksCount();
    saveTasks();
};

export const handleTitleChange = (elem, taskId) => {
    const taskData = tasks.find((task) => task.id === taskId);

    makeSelection(elem);
    updateTaskClasses(elem, true);

    elem.addEventListener("focusout", () => saveTaskTitle(elem, taskData));
    elem.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            saveTaskTitle(elem, taskData);
        } else if (event.key === "Escape") {
            elem.textContent = taskData.title;
            clearSelection(elem);
        }
    });
};

export const saveTaskTitle = (elem, task) => {
    const title = elem.textContent.trim();
    clearSelection(elem);

    if (title.length === 0) {
        elem.textContent = task.title;
    } else {
        elem.textContent = title;
        task.title = title;
        updateTaskClasses(elem, task.isActive);
    }

    saveTasks();
};

export const handleClearFinished = () => {
    setTasks(tasks.filter((task) => task.isActive));
    render(filter);
};

export const handleToggleAll = () => {
    const isAllActive = tasks.some((task) => task.isActive);
    tasks.forEach((task) => (task.isActive = !isAllActive));
    render(filter);
    updateTasksCount();
};
