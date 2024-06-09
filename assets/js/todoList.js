export class TodoList {
	constructor(todoClass) {
		this.tasks = [];
		this.taskWrapper = document.querySelector(todoClass);
		this.filter = "all";
		this.renderTasks();
	}

	addTask(title) {
		const task = {
			id: Date.now(),
			title,
			isActive: true,
			elem: null,
		};

		task.elem = this.createTaskElement(task);

		this.tasks.push(task);
		this.taskWrapper.appendChild(task.elem);
	}

	createTaskElement(task) {
		const taskElem = document.createElement("div");
		taskElem.classList.add("task");
		taskElem.setAttribute("data-id", task.id);
		taskElem.innerHTML = `
            <input class="task__checkbox checkbox" type="checkbox"> 
            <div class="task__inner">
                <p class="task__title title">${task.title}</p>
                <button class="task__btn">
                    <img class="delete" src="assets/icons/cross.svg" alt="delete icon">
                </button>
            </div>
        `;
		return taskElem;
	}

	findTask(taskId) {
		return this.tasks.find(task => task.id === taskId);
	}

	removeTask(taskId) {
		const currentTask = this.findTask(taskId).elem;
		currentTask.remove();
	}

	toggleActive(taskId) {
		const task = this.findTask(taskId);
		task.isActive = !task.isActive;
	}

	changeTitle(taskId, newTitle) {
		const task = this.findTask(taskId);
		if (task) {
			task.title = newTitle;
			task.elem.querySelector(".title").textContent = newTitle;
		}
	}

	setFilter(filter) {
		this.filter = filter;
		this.renderTasks();
	}

	toggleAllActive() {
		console.log(this.tasks);
		const isAllActive = this.tasks.every(task => task.isActive);
		console.log(isAllActive);
		this.tasks.forEach(task => {
			task.isActive = !task.isActive;
			task.elem.querySelector(".checkbox").checked = !task.isActive;
			task.elem.classList.toggle("task--finished", !task.isActive);
		});
	}

	getFilteredTasks() {
		if (this.filter === "active") {
			return this.tasks.filter(task => task.isActive);
		} else if (this.filter === "completed") {
			return this.tasks.filter(task => !task.isActive);
		}
		return this.tasks;
	}

	getTasksCount() {
		return this.getFilteredTasks().length;
	}

	clearFinished() {
		this.tasks = this.tasks.filter(task => task.isActive);
		this.renderTasks(this.tasks);
	}

	renderTasks(tasks) {
		const taskToRender = tasks ?? this.getFilteredTasks();
		this.taskWrapper.innerHTML = "";
		taskToRender.forEach(task => this.taskWrapper.appendChild(task.elem));
	}
}
