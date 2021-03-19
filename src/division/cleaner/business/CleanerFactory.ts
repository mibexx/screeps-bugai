import AbstractFactory from "../../../headquarter/core/factory/AbstractFactory";
import CleanerInterface from "./cleaner/CleanerInterface";
import Cleaner from "./cleaner/Cleaner";

export default class CleanerFactory extends AbstractFactory {
    createCleaner(): CleanerInterface {
        return new Cleaner();
    }
}
