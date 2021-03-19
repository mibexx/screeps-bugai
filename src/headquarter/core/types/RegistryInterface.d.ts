import {DependencyProviderPluginInterface} from "./plugins/DependencyProviderPluginInterface";
import LocalizerProviderPluginInterface from "./plugins/LocalizerProviderPluginInterface";

export default interface RegistryInterface {
    getDependencyProvider(): DependencyProviderPluginInterface[];
    getLocalizerProvider(): LocalizerProviderPluginInterface[];
    getTickProcessPlugins(): TickProcessPluginInterface[];
}
