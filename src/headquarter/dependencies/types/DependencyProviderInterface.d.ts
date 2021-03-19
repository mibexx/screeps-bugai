import ContainerInterface from "./ContainerInterface";

interface DependencyProviderInterface {
    provideDependencies(container: ContainerInterface): void;
}
