import {Task} from "./task.js";

export class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(title) {
        const task = new Task(title);
        this.tasks.push(task);
        return task;
    }

    removeTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
    }

    findTask(taskId) {
        return this.tasks.find(task => task.id === taskId);
    }

    toggleActive(taskId) {
        const task = this.findTask(taskId);
        task.toggleActive();
    }

    changeTitle(taskId, newTitle) {
        const task = this.findTask(taskId);
        task.changeTitle(newTitle);
    }

    clearFinished() {
        const tasksToDelete = this.tasks.filter(task => !task.isActive);
        this.tasks = this.tasks.filter(task => task.isActive);
        return tasksToDelete;
    }

    toggleAllActive() {
        const isAllActive = this.tasks.some(task => task.isActive);
        this.tasks.forEach(task => {
            task.isActive = !isAllActive;
        });
    }

    getActiveTasksCount() {
        return this.tasks.filter(task => task.isActive).length;
    }

    getFilteredTasks(filter) {
        if (filter === "active") {
            return this.tasks.filter(task => task.isActive);
        } else if (filter === "completed") {
            return this.tasks.filter(task => !task.isActive);
        }
        return this.tasks;
    }
}