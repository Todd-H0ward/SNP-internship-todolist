import { arrowButton, clearButton, filterButtons, tasksWrapper } from "./main";
import { getFilteredTasks, getTaskById, satisfyFilter } from "./utils";
import { tasks, filter } from "./main";

const controls = document.querySelector(".controls");
const controlsNumber = controls.querySelector(".number");
const taskTemplate = document.getElementById("task-template");

export const updateTasksCount = () => {
    const activeTasksCount = tasks.filter((task) => task.isActive).length;
    controlsNumber.textContent = String(activeTasksCount);
    controls.style.display = tasks.length === 0 ? "none" : "grid";
    arrowButton.style.display = tasks.length === 0 ? "none" : "block";
    clearButton.classList.toggle("hidden", activeTasksCount === tasks.length);
};

export const updateTaskElement = (taskId) => {
    const taskElem = getTaskById(taskId);
    const taskData = tasks.find((task) => task.id === taskId);

    if (satisfyFilter(taskData, filter)) {
        taskElem.className = "task";
        updateTaskClasses(taskId, taskData.isActive);
        taskElem.querySelector(".checkbox").checked = !taskData.isActive;
    } else {
        taskElem.remove();
    }

    updateTasksCount();
};

export const renderTask = (task) => {
    const template = taskTemplate.content.cloneNode(true);
    const taskElem = template.querySelector(".task");

    taskElem.querySelector(".checkbox").checked = !task.isActive;
    taskElem.querySelector(".title").textContent = task.title;
    taskElem.dataset.id = task.id;
    taskElem.classList.toggle("task--finished", !task.isActive);

    tasksWrapper.appendChild(taskElem);
};

export const render = (filter) => {
    tasksWrapper.innerHTML = "";
    const filteredTasks = getFilteredTasks(filter);
    filteredTasks.forEach((task) => renderTask(task));
};

export const clearActiveButton = () => {
    filterButtons.forEach((btn) => btn.classList.remove("button--active"));
};

export const removeTaskElement = (taskId) => {
    getTaskById(taskId)?.remove();
    updateTasksCount();
};

export const updateTaskClasses = (taskId, isActive) => {
    const taskElem = getTaskById(taskId);
    taskElem.classList.toggle("task--finished", !isActive);
};
