export default class FacadeNotFound {
    public message: string;

    constructor(name: string) {
        this.message = "Facade not found: " + name;
    }
}
