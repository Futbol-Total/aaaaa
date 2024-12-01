// Simple storage implementation
class Store {
    constructor(key) {
        this.key = key;
    }

    get() {
        const data = localStorage.getItem(this.key);
        return data ? JSON.parse(data) : null;
    }

    set(value) {
        localStorage.setItem(this.key, JSON.stringify(value));
    }
}

// Create stores
const userStore = new Store('user-storage');
const diaryStore = new Store('diary-storage');