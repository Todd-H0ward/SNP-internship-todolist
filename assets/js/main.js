import {TodoList} from "./todoList.js";

const input = document.querySelector(".input");
const controls = document.querySelector(".controls");
const tasksWrapper = document.querySelector(".tasks-wrapper");
const controlsNumber = document.querySelector(".controls__number");
const todoButtons = document.querySelectorAll(".todos__btn");
const arrowButton = document.querySelector(".arrow-btn");
const clearButton = document.querySelector(".clear");

const todoList = new TodoList(".tasks-wrapper");

const addTask = () => {
	if (input.value.length !== 0) {
		todoList.addTask(input.value);
		input.value = "";
		updateTasksCount();
	}
};

const updateTasksCount = () => {
	controlsNumber.textContent = String(todoList.getTasksCount());
	controls.style.display = todoList.tasks.length === 0 ? "none" : "flex";
	arrowButton.style.display = todoList.tasks.length === 0 ? "none" : "block";
};

const handleTaskAction = event => {
	const elem = event.target;
	const task = elem.closest(".task");
	if (!task) return;

	const taskId = Number(task.dataset.id);

	if (elem.classList.contains("checkbox")) {
		todoList.toggleActive(taskId);
		task.classList.toggle("task--finished");
	} else if (elem.classList.contains("delete")) {
		todoList.removeTask(taskId);
		updateTasksCount();
	}
};

const handleTitleChange = event => {
	const elem = event.target;
	const task = elem.closest(".task");
	if (elem.classList.contains("title")) {
		elem.setAttribute("contenteditable", true);
		elem.addEventListener("blur", () => {
			todoList.changeTitle(Number(task.dataset.id), elem.textContent);
			elem.removeAttribute("contenteditable");
		});
	}
};

const clearActiveButton = () => {
	todoButtons.forEach(btn => btn.classList.remove("button--active"));
};

todoButtons.forEach(btn =>
	btn.addEventListener("click", () => {
		clearActiveButton();
		btn.classList.add("button--active");
		const filterValue = btn.dataset.filter;
		todoList.setFilter(filterValue);
		updateTasksCount();
	})
);

input.addEventListener("keydown", event => {
	if (event.key === "Enter") {
		addTask();
	}
});

tasksWrapper.addEventListener("click", handleTaskAction);
tasksWrapper.addEventListener("dblclick", handleTitleChange);

arrowButton.addEventListener("click", () => {
	todoList.toggleAllActive();
	updateTasksCount();
});

clearButton.addEventListener("click", () => {
	todoList.clearFinished();
	updateTasksCount();
});
