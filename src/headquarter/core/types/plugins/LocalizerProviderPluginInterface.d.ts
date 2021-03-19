import LocalizerInterface from "../../../localizer/types/LocalizerInterface";
import ContainerInterface from "../../../dependencies/types/ContainerInterface";

export default interface LocalizerProviderPluginInterface {
    provideFacade(localizer: LocalizerInterface, dependencyContainer: ContainerInterface): void;
}
