import "../scss/main.scss";

const todosWrapper = document.querySelector(".todos__wrapper");
const tasksWrapper = todosWrapper.querySelector(".tasks-wrapper");
const controls = todosWrapper.querySelector(".controls");
const controlsNumber = controls.querySelector(".number");
const taskTemplate = tasksWrapper.querySelector("#task-template");
const input = todosWrapper.querySelector(".input");
const arrowButton = todosWrapper.querySelector(".arrow-btn");
const clearButton = todosWrapper.querySelector(".clear");
const todosFilter = todosWrapper.querySelector(".todos__filters");
const filterButtons = todosFilter.querySelectorAll(".todos__btn");

const savedTasks = JSON.parse(localStorage.getItem("tasks"));
let filter = savedTasks ? savedTasks.filter : "all";
let tasks = savedTasks ? savedTasks.tasks : [];

const saveTasks = () => localStorage.setItem("tasks", JSON.stringify({ filter, tasks }));

// Utilities
const satisfyFilter = (task, filter) => {
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

const getFilteredTasks = (filter) => {
    if (filter === "active") {
        return tasks.filter((task) => task.isActive);
    } else if (filter === "completed") {
        return tasks.filter((task) => !task.isActive);
    }
    return tasks;
};

const handleOutsideClick = (event, elem, taskElem) => {
    if (!elem.contains(event.target)) {
        taskElem.classList.remove("task--active");
        window.removeEventListener("click", handleOutsideClick);
    }
};

const makeOutline = (taskElem, elem) => {
    taskElem.classList.add("task--active");
    window.addEventListener("click", (event) => handleOutsideClick(event, elem, taskElem));
};

const makeSelection = (elem) => {
    elem.setAttribute("contenteditable", "true");
    elem.setAttribute("spellcheck", "true");
    elem.classList.add("task__title--active");
    elem.focus();
};

const clearSelection = (elem) => {
    elem.setAttribute("contenteditable", "false");
    elem.setAttribute("spellcheck", "false");
    elem.classList.remove("task__title--active");
};

const clearActiveButton = () => {
    filterButtons.forEach((btn) => btn.classList.remove("button--active"));
};

const updateTaskClasses = (taskElem, isActive) => {
    const closestTask = taskElem.closest(".task");
    closestTask.classList.toggle("task--finished", !isActive);
};

// Dom utils
const updateTasksCount = () => {
    const activeTasksCount = tasks.filter((task) => task.isActive).length;
    controlsNumber.textContent = String(activeTasksCount);
    controls.style.display = tasks.length === 0 ? "none" : "grid";
    arrowButton.style.display = tasks.length === 0 ? "none" : "block";
    clearButton.classList.toggle("hidden", activeTasksCount === tasks.length);
};

const updateTaskElement = (elem, taskId) => {
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

const handleTaskDelete = (elem, taskId) => {
    tasks = tasks.filter((task) => task.id !== taskId);
    elem?.remove();
    updateTasksCount();
    saveTasks();
};

const saveTaskTitle = (elem, task) => {
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

const handleKeyDown = (event, elem, taskData) => {
    if (event.key === "Enter") {
        saveTaskTitle(elem, taskData);
    } else if (event.key === "Escape") {
        elem.textContent = taskData.title;
        clearSelection(elem);
    }
};

const handleTitleChange = (elem, taskId) => {
    const taskData = tasks.find((task) => task.id === taskId);

    makeSelection(elem);
    updateTaskClasses(elem, true);

    elem.addEventListener("focusout", () => saveTaskTitle(elem, taskData));
    elem.addEventListener("keydown", (event) => handleKeyDown(event, elem, taskData));
};

const renderTask = (task) => {
    const template = taskTemplate.content.cloneNode(true);
    const taskElem = template.querySelector(".task");
    const taskCheckbox = taskElem.querySelector(".task__checkbox");
    const taskBtn = taskElem.querySelector(".task__btn");
    const taskTitle = taskElem.querySelector(".task__title");

    taskCheckbox.checked = !task.isActive;
    taskTitle.textContent = task.title;
    taskElem.dataset.id = task.id;
    taskElem.classList.toggle("task--finished", !task.isActive);

    taskBtn.addEventListener("click", () => handleTaskDelete(taskElem, task.id));
    taskTitle.addEventListener("dblclick", () => handleTitleChange(taskTitle, task.id));
    taskTitle.addEventListener("touchstart", () => handleTitleChange(taskTitle, task.id), { passive: true });
    taskCheckbox.addEventListener("change", (event) => {
        updateTaskElement(taskElem, task.id);
        makeOutline(taskElem, event.target);
    });

    tasksWrapper.appendChild(taskElem);
};

const render = (filter) => {
    tasksWrapper.innerHTML = "";
    const filteredTasks = getFilteredTasks(filter);
    filteredTasks.forEach((task) => renderTask(task));
    updateTasksCount();
    saveTasks();
};

const addTask = () => {
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

// Event listener functions
const handleClickOutsideTaskInput = (event) => {
    if (!todosWrapper.contains(event.target)) addTask();
};

const addTaskOnEnter = (event) => {
    if (event.key === "Enter") addTask();
};

const handleFilterSelection = (event) => {
    const currentBtn = event.target;
    const filterValue = currentBtn.dataset.filter;
    clearActiveButton();
    currentBtn.classList.add("button--active");
    render(filterValue);
    updateTasksCount();
    filter = filterValue;
    saveTasks();
};

const handleClearFinished = () => {
    tasks = tasks.filter((task) => task.isActive);
    render(filter);
};

const handleToggleAll = () => {
    const isAllActive = tasks.some((task) => task.isActive);
    tasks.forEach((task) => (task.isActive = !isAllActive));
    render(filter);
    updateTasksCount();
};

arrowButton.addEventListener("click", handleToggleAll);
clearButton.addEventListener("click", handleClearFinished);
window.addEventListener("click", handleClickOutsideTaskInput);
input.addEventListener("keydown", addTaskOnEnter);

filterButtons.forEach((btn) => btn.addEventListener("click", handleFilterSelection));

if (tasks.length !== 0) {
    clearActiveButton();
    todosFilter.querySelector(`[data-filter="${filter}"]`).classList.add("button--active");
    render(filter);
    updateTasksCount();
}
