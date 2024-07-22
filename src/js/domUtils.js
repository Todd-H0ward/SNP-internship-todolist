import { filter, tasks } from "./main";
import {
    arrowButton,
    clearButton,
    controls,
    controlsNumber,
    filterButtons,
    tasksWrapper,
    taskTemplate,
} from "./domElements";
import {
    getFilteredTasks,
    makeOutline,
    satisfyFilter,
    saveTasks,
} from "./utils";
import { handleTaskDelete, handleTitleChange } from "./handlers";

export const updateTasksCount = () => {
    const activeTasksCount = tasks.filter((task) => task.isActive).length;
    controlsNumber.textContent = String(activeTasksCount);
    controls.style.display = tasks.length === 0 ? "none" : "grid";
    arrowButton.style.display = tasks.length === 0 ? "none" : "block";
    clearButton.classList.toggle("hidden", activeTasksCount === tasks.length);
};

export const updateTaskElement = (elem, taskId) => {
    const taskData = tasks.find((task) => task.id === taskId);
    taskData.isActive = !taskData.isActive;

    if (satisfyFilter(taskData, filter)) {
        elem.className = "task";
        updateTaskClasses(elem, taskData.isActive);
    } else {
        elem?.remove();
    }

    updateTasksCount();
    saveTasks();
};

export const renderTask = (task) => {
    const template = taskTemplate.content.cloneNode(true);
    const taskElem = template.querySelector(".task");
    const taskCheckbox = taskElem.querySelector(".task__checkbox");
    const taskBtn = taskElem.querySelector(".task__btn");
    const taskTitle = taskElem.querySelector(".task__title");

    taskCheckbox.checked = !task.isActive;
    taskTitle.textContent = task.title;
    taskElem.dataset.id = task.id;
    taskElem.classList.toggle("task--finished", !task.isActive);

    const handleTaskBtnClick = () => handleTaskDelete(taskElem, task.id);
    const handleTaskTitleClick = () => handleTitleChange(taskTitle, task.id);
    const handleTaskTitleTouch = () => handleTitleChange(taskTitle, task.id);
    const handleTaskCheckboxChange = (event) => {
        updateTaskElement(taskElem, task.id);
        makeOutline(taskElem, event.target);
    };

    taskBtn.addEventListener("click", handleTaskBtnClick);
    taskTitle.addEventListener("dblclick", handleTaskTitleClick);
    taskTitle.addEventListener("touch", handleTaskTitleTouch);
    taskCheckbox.addEventListener("change", handleTaskCheckboxChange);

    tasksWrapper.appendChild(taskElem);
};

export const render = (filter) => {
    tasksWrapper.innerHTML = "";
    const filteredTasks = getFilteredTasks(filter);
    filteredTasks.forEach((task) => renderTask(task));
    updateTasksCount();
    saveTasks();
};

export const clearActiveButton = () => {
    filterButtons.forEach((btn) => btn.classList.remove("button--active"));
};

export const updateTaskClasses = (taskElem, isActive) => {
    const closestTask = taskElem.closest(".task");
    closestTask.classList.toggle("task--finished", !isActive);
};
