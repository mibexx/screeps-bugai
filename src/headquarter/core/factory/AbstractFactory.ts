import ContainerInterface from "../../dependencies/types/ContainerInterface";

export default abstract class AbstractFactory {
    private container: ContainerInterface;

    constructor(container: ContainerInterface) {
        this.container = container;
    }

    protected getDependency(key: string): any {
        return this.container.get(key);
    };
}
