export class Task {
    constructor(title) {
        this.id = Date.now();
        this.title = title;
        this.isActive = true;
    }

    toggleActive() {
        this.isActive = !this.isActive;
    }

    changeTitle(newTitle) {
        this.title = newTitle;
    }
}