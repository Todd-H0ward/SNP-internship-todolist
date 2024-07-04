export class Task {
    constructor({id, title, isActive}) {
        this.id = id ?? Date.now();
        this.title = title;
        this.isActive = isActive ?? true;
    }

    toggleActive() {
        this.isActive = !this.isActive;
    }

    changeTitle(newTitle) {
        this.title = newTitle;
    }
}
