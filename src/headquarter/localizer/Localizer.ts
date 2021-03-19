import LocalizerInterface from "./types/LocalizerInterface";
import FacadeInterface from "../core/types/FacadeInterface";
import FacadeNotFound from "./error/FacadeNotFound";

export default class Localizer implements LocalizerInterface {
    private facades: { [key: string]: FacadeInterface } = {};

    addFacade(key: string, facade: FacadeInterface): void {
        this.facades[key] = facade;
    }

    get(key: string): FacadeInterface {
        if (!this.facades[key]) {
            throw new FacadeNotFound(key);
        }
        return this.facades[key];
    }
}
