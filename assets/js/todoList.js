import {task} from "gulp";

export class TodoList {
    constructor(todoClass) {
        this.tasks = [];
        this.taskWrapper = document.querySelector(todoClass);
    }

    addTask(title) {
        const date = new Date();
        this.tasks.push({
            id: date.getTime(),
            title,
            isActive: true
        })
    }

    toggleActive(taskId) {
        const todo = this.tasks.find(task => task.id === taskId);
        todo.isActive = !todo.isActive;
    }

    renderTasks() {
        const tasks = this.tasks.map(task =>
            `<div class="task">
                <input class="task__checkbox checkbox" type="checkbox"> 
                <p class="task__title title" data-id="${task.id}">${task.title}</p>
            </div>`
        );
        this.taskWrapper.innerHTML = tasks;

    }
}