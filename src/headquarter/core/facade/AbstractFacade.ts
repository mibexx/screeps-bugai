import FactoryInterface from "../types/FactoryInterface";

export default abstract class AbstractFacade {
    private factory: FactoryInterface;

    constructor(factory: FactoryInterface) {
        this.factory = factory;
    }

    protected getFactory(): FactoryInterface {
        return this.factory;
    };
}
