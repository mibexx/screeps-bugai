import ContainerInterface from "../../../dependencies/types/ContainerInterface";

interface DependencyProviderPluginInterface {
    provideDependencies(container: ContainerInterface): void;
}
