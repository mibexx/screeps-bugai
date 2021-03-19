export default class DependencyNotFound {
    public message: string;

    constructor(key: string) {
        this.message = "Dependency not found: " + key;
    }
}
