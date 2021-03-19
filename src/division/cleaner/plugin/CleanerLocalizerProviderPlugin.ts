import LocalizerProviderPluginInterface from "../../../headquarter/core/types/plugins/LocalizerProviderPluginInterface";
import LocalizerInterface from "../../../headquarter/localizer/types/LocalizerInterface";
import ContainerInterface from "../../../headquarter/dependencies/types/ContainerInterface";
import CleanerFacade from "../business/CleanerFacade";
import CleanerFactory from "../business/CleanerFactory";

export default class CleanerLocalizerProviderPlugin implements LocalizerProviderPluginInterface {
    provideFacade(localizer: LocalizerInterface, dependencyContainer: ContainerInterface): void {
        localizer.addFacade(
            'cleaner',
            new CleanerFacade(
                new CleanerFactory(
                    dependencyContainer
                )
            )
        );
    }
}
