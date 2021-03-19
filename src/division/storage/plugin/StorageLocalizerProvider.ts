import LocalizerProviderPluginInterface from "../../../headquarter/core/types/plugins/LocalizerProviderPluginInterface";
import LocalizerInterface from "../../../headquarter/localizer/types/LocalizerInterface";
import ContainerInterface from "../../../headquarter/dependencies/types/ContainerInterface";
import StorageFacade from "../business/StorageFacade";
import StorageFactory from "../business/StorageFactory";

export default class StorageLocalizerProvider implements LocalizerProviderPluginInterface{
    provideFacade(localizer: LocalizerInterface, dependencyContainer: ContainerInterface): void {
        localizer.addFacade(
            'storage',
            new StorageFacade(
                new StorageFactory(dependencyContainer)
            )
        );
    }
}
