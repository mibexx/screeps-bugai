import ContainerInterface from "../../dependencies/types/ContainerInterface";
import FactoryInterface from "../types/FactoryInterface";

export default abstract class AbstractFactory implements FactoryInterface {
    private container: ContainerInterface;

    constructor(container: ContainerInterface) {
        this.container = container;
    }

    protected getDependency(key: string): any {
        return this.container.get(key);
    };
}
