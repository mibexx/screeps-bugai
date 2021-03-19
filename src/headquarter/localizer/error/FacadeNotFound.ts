import FacadeInterface from "../../core/types/FacadeInterface";

export default class FacadeNotFound {
    public message: string;

    constructor(name: string, facades: { [key: string]: FacadeInterface }) {
        this.message = "Facade not found: " + name;
    }
}
