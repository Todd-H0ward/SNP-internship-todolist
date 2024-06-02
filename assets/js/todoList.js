export class TodoList {
    constructor(todoClass) {
        this.tasks = [];
        this.taskWrapper = document.querySelector(todoClass);
        this.filter = "all";
    }

    addTask(title) {
        const date = new Date();
        this.tasks.push({
            id: date.getTime(),
            title,
            isActive: true
        })

        this.renderTasks();
    }

    removeTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.renderTasks();
    }

    toggleActive(taskId) {
        const todo = this.tasks.find(task => task.id === taskId);
        todo.isActive = !todo.isActive;
    }

    changeTitle(taskId, newTitle) {
        const todo = this.tasks.find(task => task.id === taskId);
        todo.title = newTitle;
    }

    setFilter(filter) {
        this.filter = filter;
        this.renderTasks();
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

    renderTasks() {
        let tasksToRender = this.getFilteredTasks();

        const tasks = tasksToRender.map(task =>
            `<div class="task ${!task.isActive ? "task--finished" : ""}" data-id="${task.id}">
                <input class="task__checkbox checkbox" type="checkbox" ${!task.isActive ? "checked" : ""}> 
                <div class="task__inner">
                    <p class="task__title title" data-id="${task.id}">${task.title}</p>
                    <button class="task__btn">
                        <img class="delete" src="assets/icons/cross.svg" alt="delete icon">
                    </button>
                </div>
            </div>`
        );
        this.taskWrapper.innerHTML = tasks.join("");
    }
}