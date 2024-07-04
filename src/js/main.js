import "./../scss/main.scss";
import { clearActiveButton, render, updateTasksCount } from "./domUtils";
import {
	addTask,
	handleClearFinished,
	handleTaskAction,
	handleTitleChange,
	handleToggleAll,
} from "./handlers";
import { TodoList } from "./todoList.js";

export const input = document.querySelector(".input");
export const controls = document.querySelector(".controls");
export const tasksWrapper = document.querySelector(".tasks-wrapper");
export const controlsNumber = document.querySelector(".number");
export const filterButtons = document.querySelectorAll(".todos__btn");
export const arrowButton = document.querySelector(".arrow-btn");
export const clearButton = document.querySelector(".clear");

export const todoList = new TodoList(".tasks-wrapper");

filterButtons.forEach(btn =>
	btn.addEventListener("click", () => {
		clearActiveButton();
		btn.classList.add("button--active");
		render(btn.dataset.filter);
		updateTasksCount();
	})
);

input.addEventListener("focusout", addTask);
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
	clearActiveButton();
	document
		.querySelector(`[data-filter="${todoList.filter}"]`)
		.classList.add("button--active");
	render(todoList.filter);
	updateTasksCount();
}
