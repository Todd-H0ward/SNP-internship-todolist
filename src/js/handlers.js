import {
    removeTaskElement,
    render,
    renderTask,
    updateTaskClasses,
    updateTaskElement,
    updateTasksCount,
} from "./domUtils";
import {
    clearSelection,
    makeOutline,
    makeSelection,
    satisfyFilter,
} from "./utils";
import { filter, input, saveTasks, setTasks, tasks } from "./main";

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

export const handleTaskDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    saveTasks();
    removeTaskElement(taskId);
};

export const handleTaskAction = (event) => {
    const elem = event.target;
    const task = elem.closest(".task");
    if (!task) return;

    const taskId = Number(task.dataset.id);
    if (elem.classList.contains("checkbox")) {
        const currentTask = tasks.find((task) => task.id === taskId);
        currentTask.isActive = !currentTask.isActive;
        updateTaskElement(taskId);
        makeOutline(task, elem);
    } else if (elem.classList.contains("delete")) {
        handleTaskDelete(taskId);
    }

    saveTasks();
};

export const handleTitleChange = (event) => {
    const elem = event.target;
    if (!elem.classList.contains("title")) return;
    const taskId = Number(elem.closest(".task").dataset.id);
    const titleCopy = elem.textContent;

    makeSelection(elem);
    updateTaskClasses(taskId, true);

    elem.addEventListener("focusout", () =>
        saveTaskTitle(elem, taskId, titleCopy),
    );
    elem.addEventListener("keydown", (event) =>
        handleEditEvents(event, elem, titleCopy, taskId),
    );
};

export const saveTaskTitle = (elem, taskId) => {
    clearSelection(elem);

    const titleCopy = elem.textContent;
    const title = elem.textContent.trim();

    if (title.length === 0) {
        elem.textContent = titleCopy;
    } else {
        elem.textContent = title;
        const task = tasks.find((task) => task.id === taskId);
        task.title = title;
        updateTaskClasses(taskId, task.isActive);
    }
    saveTasks();
};

const handleEditEvents = (event, elem, titleCopy, taskId) => {
    if (event.key === "Enter") {
        saveTaskTitle(elem, taskId);
    } else if (event.key === "Escape") {
        elem.textContent = titleCopy;
        clearSelection(elem);
    }
};

export const handleClearFinished = () => {
    setTasks(tasks.filter((task) => task.isActive));
    render(filter);
    saveTasks();
};

export const handleToggleAll = () => {
    const isAllActive = tasks.some((task) => task.isActive);
    tasks.forEach((task) => (task.isActive = !isAllActive));
    render(filter);
    updateTasksCount();
};
