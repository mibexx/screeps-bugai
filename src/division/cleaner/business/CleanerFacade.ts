import CleanerFacadeInterface from "./CleanerFacadeInterface";
import AbstractFacade from "../../../headquarter/core/facade/AbstractFacade";
import CleanerFactory from "./CleanerFactory";

export default class CleanerFacade extends AbstractFacade<CleanerFactory> implements CleanerFacadeInterface {
    clean(): void {
        this
            .getFactory()
            .createCleaner()
            .clean();
    }
}
