import TickProcessPluginInterface from "../../../headquarter/core/types/plugins/TickProcessPluginInterface";
import LocalizerInterface from "../../../headquarter/localizer/types/LocalizerInterface";
import CleanerFacadeInterface from "../business/CleanerFacadeInterface";

export default class CleanerTickProcessPlugin implements TickProcessPluginInterface {
    process(localizer: LocalizerInterface): void {
        localizer.get<CleanerFacadeInterface>('cleaner').clean();
    }
}
