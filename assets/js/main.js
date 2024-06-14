import {TodoList} from "./todoList.js";

const input = document.querySelector(".input");
const controls = document.querySelector(".controls");
const tasksWrapper = document.querySelector(".tasks-wrapper");
const controlsNumber = document.querySelector(".number");
const filterButtons = document.querySelectorAll(".todos__btn");
const arrowButton = document.querySelector(".arrow-btn");
const clearButton = document.querySelector(".clear");

const todoList = new TodoList(".tasks-wrapper");

const addTask = () => {
    if (input.value.length !== 0) {
        const task = todoList.addTask({title: input.value});
        input.value = "";
        if (satisfyFilter(task, todoList.filter)) {
            renderTask(task);
        }
        updateTasksCount();
    }
};

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


const updateTasksCount = () => {
    const tasksCount = todoList.tasks.length;
    const activeTasksCount = todoList.getActiveTasksCount();
    controlsNumber.textContent = activeTasksCount;
    controls.style.display = tasksCount === 0 ? "none" : "grid";
    arrowButton.style.display = tasksCount === 0 ? "none" : "block";
    clearButton.classList.toggle("hidden", activeTasksCount === tasksCount);
};

const updateTaskElement = (taskId) => {
    const taskElem = tasksWrapper.querySelector(`[data-id="${taskId}"]`);
    const taskData = todoList.findTask(taskId);

    if (satisfyFilter(taskData, todoList.filter)) {
        taskElem.className = `task ${taskData.isActive ? "" : "task--finished"}`;
        taskElem.querySelector(".checkbox").checked = !taskData.isActive;
    } else {
        taskElem.remove()
    }

    updateTasksCount();
}

const handleTaskDelete = (taskId) => {
    todoList.removeTask(taskId);
    tasksWrapper.querySelector(`[data-id="${taskId}"]`).remove();
    updateTasksCount();
}

const makeOutline = (task, elem) => {
    task.classList.add("task--active");
    window.addEventListener("click", (event) => {
        if (!elem.contains(event.target)) {
            task.classList.remove("task--active");
        }
    });
}

const handleTaskAction = event => {
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

const handleClearFinished = () => {
    const tasksToDelete = todoList.clearFinished();
    tasksToDelete.forEach(task => handleTaskDelete(task.id));
    updateTasksCount();
}

const makeTitleEditable = (elem, taskId) => {
    elem.setAttribute("contenteditable", "true");
    elem.setAttribute("spellcheck", "true");
    elem.classList.add("task__title--active");
    elem.focus();
    elem.addEventListener("focusout", () => {
        elem.setAttribute("contenteditable", "false");
        elem.setAttribute("spellcheck", "false");
        elem.classList.remove("task__title--active");
        todoList.changeTitle(taskId, elem.textContent);
    })
}

const handleTitleChange = (event) => {
    const elem = event.target;
    const taskId = Number(elem.closest(".task").dataset.id);
    if (!elem.classList.contains("title")) return;
    makeTitleEditable(elem, taskId);
}

const handleToggleAll = () => {
    todoList.toggleAllActive();
    todoList.tasks.forEach(task => updateTaskElement(task.id));
}

const render = (filter) => {{
    tasksWrapper.innerHTML = "";
    const filteredTasks = todoList.getFilteredTasks(filter);
    filteredTasks.forEach(task => renderTask(task));
}}

const renderTask = (task) => {
    const taskElem = document.createElement("div");
    taskElem.className = `task ${task.isActive ? "" : "task--finished"}`;
    taskElem.dataset.id = task.id;

    taskElem.innerHTML = `
            <input class="task__checkbox checkbox" type="checkbox" ${task.isActive ? "" : "checked"}>
            <div class="task__inner">
                <span class="task__title title">${task.title}</span>
                <button class="task__btn">
                    <img class="delete" src="assets/icons/cross.svg" alt="delete icon">
                </button>
            </div>
    `;
    tasksWrapper.appendChild(taskElem);
}

const clearActiveButton = () => {
    filterButtons.forEach(btn => btn.classList.remove("button--active"));
};

filterButtons.forEach(btn => btn.addEventListener("click", () => {
    clearActiveButton();
    btn.classList.add("button--active");
    render(btn.dataset.filter);
    updateTasksCount();
}));

input.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        addTask();
    }
});

tasksWrapper.addEventListener("click", handleTaskAction);
tasksWrapper.addEventListener("dblclick", handleTitleChange);
tasksWrapper.addEventListener("touchend", handleTitleChange);
arrowButton.addEventListener("click", handleToggleAll);
clearButton.addEventListener("click", handleClearFinished);

if (todoList.tasks.length !== 0) {
    const activeButton = document.querySelector(`[data-filter="${todoList.filter}"]`);
    activeButton.classList.add("button--active");
    render(todoList.filter);
    updateTasksCount();
}