import FactoryInterface from "../types/FactoryInterface";
import FacadeInterface from "../types/FacadeInterface";

export default abstract class AbstractFacade<T extends FactoryInterface> implements FacadeInterface {
    private factory: T;

    constructor(factory: T) {
        this.factory = factory;
    }

    protected getFactory(): T {
        return this.factory;
    };
}
