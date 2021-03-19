import {DependencyProviderInterface} from "../../dependencies/types/DependencyProviderInterface";
import LocalizerProviderInterface from "./LocalizerProviderInterface";

export default interface RegistryInterface {
    getDependencyProvider(): DependencyProviderInterface[];
    getLocalizerProvider(): LocalizerProviderInterface[];
}
