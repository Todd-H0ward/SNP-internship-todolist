import { tasks, tasksWrapper } from "./main.js";

export const satisfyFilter = (task, filter) => {
    switch (filter) {
        case "all":
            return true;
        case "active":
            return task.isActive;
        case "completed":
            return !task.isActive;
        default:
            return true;
    }
};

export const getTaskById = (taskId) => {
    return tasksWrapper.querySelector(`[data-id="${taskId}"]`);
};

export const getFilteredTasks = (filter) => {
    if (filter === "active") {
        return tasks.filter((task) => task.isActive);
    } else if (filter === "completed") {
        return tasks.filter((task) => !task.isActive);
    }
    return tasks;
};

export const makeOutline = (task, elem) => {
    task.classList.add("task--active");
    window.addEventListener("click", (event) => {
        if (!elem.contains(event.target)) {
            task.classList.remove("task--active");
        }
    });
};

export const makeSelection = (elem) => {
    elem.setAttribute("contenteditable", "true");
    elem.setAttribute("spellcheck", "true");
    elem.classList.add("task__title--active");
    elem.focus();
};

export const clearSelection = (elem) => {
    elem.setAttribute("contenteditable", "false");
    elem.setAttribute("spellcheck", "false");
    elem.classList.remove("task__title--active");
};
