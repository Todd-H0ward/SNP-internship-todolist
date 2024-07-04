import {
	arrowButton,
	clearButton,
	controls,
	controlsNumber,
	filterButtons,
	tasksWrapper,
	todoList,
} from "./main";
import { getTaskById, satisfyFilter } from "./utils";

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
		taskElem.className = `task ${taskData.isActive ? "" : "task--finished"}`;
		taskElem.querySelector(".checkbox").checked = !taskData.isActive;
	} else {
		taskElem.remove();
	}

	updateTasksCount();
};

export const renderTask = task => {
	const taskElem = document.createElement("div");
	taskElem.className = `task ${task.isActive ? "" : "task--finished"}`;
	taskElem.dataset.id = task.id;

	taskElem.innerHTML = `
            <input class="task__checkbox checkbox" type="checkbox" ${
							task.isActive ? "" : "checked"
						}>
            <div class="task__inner">
                <span class="task__title title">${task.title}</span>
                <button class="task__btn">
                    <img class="delete" src="./icons/cross.svg" alt="delete icon">
                </button>
            </div>
    `;
	tasksWrapper.appendChild(taskElem);
};

export const render = filter => {
	{
		tasksWrapper.innerHTML = "";
		const filteredTasks = todoList.getFilteredTasks(filter);
		filteredTasks.forEach(task => renderTask(task));
	}
};

export const clearActiveButton = () => {
	filterButtons.forEach(btn => btn.classList.remove("button--active"));
};

export const removeTaskElement = taskId => {
	getTaskById(taskId)?.remove();
	updateTasksCount();
};
