class localStorageService {

    static localSetItem(key, item) {
        localStorage.setItem(key, item)
    }

    static localGetItem(key) {
        return localStorage.getItem(key)
    }

    static localRemoveItem(key) {
        localStorage.removeItem(key)
    }

    static localClear() {
        localStorage.clear()
    }
};

export {localStorageService};

