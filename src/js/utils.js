import { tasksWrapper } from "./main.js";

// Checking that the task that we are changing or adding satisfies the current filter
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

export const getTaskById = taskId => {
	return tasksWrapper.querySelector(`[data-id="${taskId}"]`);
};

export const makeOutline = (task, elem) => {
	task.classList.add("task--active");
	window.addEventListener("click", event => {
		if (!elem.contains(event.target)) {
			task.classList.remove("task--active");
		}
	});
};

export const clearSelection = elem => {
	elem.setAttribute("contenteditable", "false");
	elem.setAttribute("spellcheck", "false");
	elem.classList.remove("task__title--active");
};
