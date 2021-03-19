import LocalizerProviderInterface from "../../../headquarter/core/types/LocalizerProviderInterface";
import LocalizerInterface from "../../../headquarter/localizer/types/LocalizerInterface";
import ContainerInterface from "../../../headquarter/dependencies/types/ContainerInterface";
import StorageFacade from "../business/StorageFacade";
import StorageFactory from "../business/StorageFactory";

export default class StorageLocalizerProvider implements LocalizerProviderInterface{
    provideFacade(localizer: LocalizerInterface, dependencyContainer: ContainerInterface): void {
        localizer.addFacade(
            'storage',
            new StorageFacade(
                new StorageFactory(dependencyContainer)
            )
        );
    }
}
