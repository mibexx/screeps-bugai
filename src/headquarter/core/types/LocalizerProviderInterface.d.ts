export default interface LocalizerProviderInterface {
    provideFacade(localizer: LocalizerInterface, dependencyContainer: ContainerInterface): void;
}
