import TickProcessPluginInterface from "../../../headquarter/core/types/plugins/TickProcessPluginInterface";

export default class StorageTickProcessPlugin implements TickProcessPluginInterface {
    process(): void {
        console.log("Storage: Check (" + Game.time + ")");
    }
}
