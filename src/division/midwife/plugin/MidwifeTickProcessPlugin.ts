import TickProcessPluginInterface from "../../../headquarter/core/types/plugins/TickProcessPluginInterface";
import LocalizerInterface from "../../../headquarter/localizer/types/LocalizerInterface";
import MidwifeFacadeInterface from "../business/MidwifeFacadeInterface";

export default class MidwifeTickProcessPlugin implements TickProcessPluginInterface {
    process(localizer: LocalizerInterface): void {
        localizer
            .get<MidwifeFacadeInterface>("midwife")
            .bornBugs();
    }
}
