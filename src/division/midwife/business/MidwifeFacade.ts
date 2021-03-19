import AbstractFacade from "../../../headquarter/core/facade/AbstractFacade";
import MidwifeFactory from "./MidwifeFactory";
import MidwifeFacadeInterface from "./MidwifeFacadeInterface";

export default class MidwifeFacade extends AbstractFacade<MidwifeFactory> implements MidwifeFacadeInterface {
    bornBugs(): void {
        console.log("Born bugs");
    }
}
