import LocalizerInterface from "../../../localizer/types/LocalizerInterface";

export default interface TickProcessPluginInterface {
    process(localizer: LocalizerInterface): void;
}
