import LocalizerProviderPluginInterface from "../../../headquarter/core/types/plugins/LocalizerProviderPluginInterface";
import LocalizerInterface from "../../../headquarter/localizer/types/LocalizerInterface";
import ContainerInterface from "../../../headquarter/dependencies/types/ContainerInterface";
import MidwifeFacade from "../business/MidwifeFacade";
import MidwifeFactory from "../business/MidwifeFactory";

export default class MidwifeLocalizerProviderPlugin implements LocalizerProviderPluginInterface {
    provideFacade(localizer: LocalizerInterface, dependencyContainer: ContainerInterface): void {
        localizer.addFacade(
            "midwife",
            new MidwifeFacade(
                new MidwifeFactory(dependencyContainer)
            )
        );
    }
}
