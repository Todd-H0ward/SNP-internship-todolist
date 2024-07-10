import {
    removeTaskElement,
    render,
    renderTask, updateTaskClasses,
    updateTaskElement,
    updateTasksCount,
} from "./domUtils";
import {input, todoList} from "./main";
import {clearSelection, makeOutline, makeSelection, satisfyFilter} from "./utils";

export const addTask = () => {
    const inputValue = input.value.trim();
    if (inputValue) {
        const task = todoList.addTask({title: inputValue});
        input.value = "";
        if (satisfyFilter(task, todoList.filter)) renderTask(task);
        updateTasksCount();
    }
};

export const handleTaskDelete = taskId => {
    todoList.removeTask(taskId);
    removeTaskElement(taskId);
};

export const handleTaskAction = event => {
    const elem = event.target;
    const task = elem.closest(".task");
    if (!task) return;

    const taskId = Number(task.dataset.id);
    if (elem.classList.contains("checkbox")) {
        todoList.toggleActive(taskId);
        updateTaskElement(taskId);
        makeOutline(task, elem);
    } else if (elem.classList.contains("delete")) {
        handleTaskDelete(taskId);
    }
};

export const makeTitleEditable = (elem, taskId) => {
    makeSelection(elem);
    const titleCopy = elem.textContent;
    const saveOnFocusOut = () => saveTaskTitle(elem, taskId);
    const handleKeyDown = event => handleEditEvents(event, elem, titleCopy, taskId);

    updateTaskClasses(taskId, true);

    elem.addEventListener("focusout", saveOnFocusOut);
    elem.addEventListener("keydown", handleKeyDown);
};

export const saveTaskTitle = (elem, taskId) => {
    clearSelection(elem);
    const title = elem.textContent.trim();
    if (title.length === 0) {
        handleTaskDelete(taskId);
    } else {
        elem.textContent = title;
        todoList.changeTitle(taskId, title);
        const task = todoList.findTask(taskId);
        updateTaskClasses(taskId, task.isActive);
    }
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
    const tasksToDelete = todoList.clearFinished();
    tasksToDelete.forEach(task => removeTaskElement(task.id));
};

export const handleTitleChange = event => {
    const elem = event.target;
    if (!elem.classList.contains("title")) return;
    const taskId = Number(elem.closest(".task").dataset.id);
    makeTitleEditable(elem, taskId);
};

export const handleToggleAll = () => {
    todoList.toggleAllActive();
    render(todoList.filter);
    updateTasksCount();
};
