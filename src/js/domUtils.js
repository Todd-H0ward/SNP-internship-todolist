import {
    arrowButton,
    clearButton,
    controls,
    controlsNumber,
    filterButtons,
    tasksWrapper,
    todoList,
} from "./main";
import {getTaskById, satisfyFilter} from "./utils";

const taskTemplate = document.getElementById("task-template");

export const updateTasksCount = () => {
    const tasksCount = todoList.tasks.length;
    const activeTasksCount = todoList.getActiveTasksCount();
    controlsNumber.textContent = activeTasksCount;
    controls.style.display = tasksCount === 0 ? "none" : "grid";
    arrowButton.style.display = tasksCount === 0 ? "none" : "block";
    clearButton.classList.toggle("hidden", activeTasksCount === tasksCount);
};

export const updateTaskElement = taskId => {
    const taskElem = getTaskById(taskId);
    const taskData = todoList.findTask(taskId);

    if (satisfyFilter(taskData, todoList.filter)) {
        taskElem.className = "task";
        updateTaskClasses(taskId, taskData.isActive);
        taskElem.querySelector(".checkbox").checked = !taskData.isActive;
    } else {
        taskElem.remove();
    }

    updateTasksCount();
};

export const renderTask = task => {
    const template = taskTemplate.content.cloneNode(true);
    const taskElem = template.querySelector(".task");
    taskElem.querySelector(".checkbox").checked = task.isActive;
    taskElem.querySelector(".title").textContent = task.title;
    taskElem.dataset.id = task.id;
    taskElem.classList.toggle("task--finished", !task.isActive);
    tasksWrapper.appendChild(taskElem);
};

export const render = filter => {
    tasksWrapper.innerHTML = "";
    const filteredTasks = todoList.getFilteredTasks(filter);
    filteredTasks.forEach(task => renderTask(task));
};

export const clearActiveButton = () => {
    filterButtons.forEach(btn => btn.classList.remove("button--active"));
};

export const removeTaskElement = taskId => {
    getTaskById(taskId)?.remove();
    updateTasksCount();
};

export const updateTaskClasses = (taskId, isActive) => {
    const taskElem = getTaskById(taskId);
    taskElem.classList.toggle("task--finished", !isActive);
};
