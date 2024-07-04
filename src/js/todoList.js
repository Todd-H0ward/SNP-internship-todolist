import {Task} from "./task.js";

export class TodoList {
    constructor() {
        this.tasks = [];
        this.filter = "all";
        this.loadTasks();
    }

    loadTasks() {
        const savedTasks = JSON.parse(localStorage.getItem("tasks"));
        if (!savedTasks) return;
        this.filter = savedTasks.filter;
        savedTasks.tasks.forEach(task => {
            this.addTask({
                id: task.id,
                title: task.title,
                isActive: task.isActive,
            });
        });
    }

    saveTasks() {
        const saveData = {
            filter: this.filter,
            tasks: this.tasks,
        };
        localStorage.setItem("tasks", JSON.stringify(saveData));
    }

    addTask({id, title, isActive}) {
        const task = new Task({id, title, isActive});
        this.tasks.push(task);
        this.saveTasks();
        return task;
    }

    removeTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.saveTasks();
    }

    findTask(taskId) {
        return this.tasks.find(task => task.id === taskId);
    }

    toggleActive(taskId) {
        const task = this.findTask(taskId);
        task.toggleActive();
        this.saveTasks();
    }

    changeTitle(taskId, newTitle) {
        const task = this.findTask(taskId);
        task.changeTitle(newTitle);
        this.saveTasks();
    }

    clearFinished() {
        const tasksToDelete = this.tasks.filter(task => !task.isActive);
        this.tasks = this.tasks.filter(task => task.isActive);
        this.saveTasks();
        return tasksToDelete;
    }

    toggleAllActive() {
        const isAllActive = this.tasks.some(task => task.isActive);
        this.tasks.forEach(task => {
            task.isActive = !isAllActive;
        });
        this.saveTasks();
    }

    getActiveTasksCount() {
        return this.tasks.filter(task => task.isActive).length;
    }

    getFilteredTasks(filter) {
        this.filter = filter;
        this.saveTasks();
        if (filter === "active") {
            return this.tasks.filter(task => task.isActive);
        } else if (filter === "completed") {
            return this.tasks.filter(task => !task.isActive);
        }
        return this.tasks;
    }
}
