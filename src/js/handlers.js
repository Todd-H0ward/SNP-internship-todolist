import {makeOutline, satisfyFilter} from "./utils";
import {input, todoList} from "./main";
import {removeTaskElement, render, renderTask, updateTaskElement, updateTasksCount} from "./domUtils";

export const addTask = () => {
    if (input.value.length !== 0) {
        const task = todoList.addTask({title: input.value.trim()});
        input.value = "";
        if (satisfyFilter(task, todoList.filter)) {
            renderTask(task);
        }
        updateTasksCount();
    }
};

export const handleTaskDelete = (taskId) => {
    todoList.removeTask(taskId);
    removeTaskElement(taskId);
}

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

export const saveTaskTitle = (elem, taskId) => {
    elem.setAttribute("contenteditable", "false");
    elem.setAttribute("spellcheck", "false");
    elem.classList.remove("task__title--active");
    const title = elem.textContent.trim();
    if (title.length === 0) {
        handleTaskDelete(taskId);
        todoList.removeTask(taskId);
    } else {
        todoList.changeTitle(taskId, title);
    }
}

export const makeTitleEditable = (elem, taskId) => {
    elem.setAttribute("contenteditable", "true");
    elem.setAttribute("spellcheck", "true");
    elem.classList.add("task__title--active");
    elem.focus();
    elem.addEventListener("focusout", () => saveTaskTitle(elem, taskId));
}

export const handleClearFinished = () => {
    const tasksToDelete = todoList.clearFinished();
    tasksToDelete.forEach(task => removeTaskElement(task.id));
}

export const handleTitleChange = (event) => {
    const elem = event.target;
    const taskId = Number(elem.closest(".task").dataset.id);
    if (!elem.classList.contains("title")) return;
    makeTitleEditable(elem, taskId);
}

export const handleToggleAll = () => {
    todoList.toggleAllActive();
    render(todoList.filter);
    updateTasksCount();
}