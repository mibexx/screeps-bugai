import RegistryInterface from "./headquarter/core/types/RegistryInterface";
import {DependencyProviderPluginInterface} from "./headquarter/core/types/plugins/DependencyProviderPluginInterface";
import BugAiDependencyProvider from "./headquarter/core/BugAiDependencyProvider";
import LocalizerProviderPluginInterface from "./headquarter/core/types/plugins/LocalizerProviderPluginInterface";
import StorageLocalizerProvider from "./division/storage/plugin/StorageLocalizerProvider";
import TickProcessPluginInterface from "./headquarter/core/types/plugins/TickProcessPluginInterface";
import StorageTickProcessPlugin from "./division/storage/plugin/StorageTickProcessPlugin";
import CleanerTickProcessPlugin from "./division/cleaner/plugin/CleanerTickProcessPlugin";
import CleanerLocalizerProviderPlugin from "./division/cleaner/plugin/CleanerLocalizerProviderPlugin";
import MidwifeLocalizerProviderPlugin from "./division/midwife/plugin/MidwifeLocalizerProviderPlugin";
import MidwifeTickProcessPlugin from "./division/midwife/plugin/MidwifeTickProcessPlugin";

export default class Registry implements RegistryInterface{
    getDependencyProvider(): DependencyProviderPluginInterface[] {
        return [
            new BugAiDependencyProvider()
        ];
    }

    getLocalizerProvider(): LocalizerProviderPluginInterface[] {
        return [
            new StorageLocalizerProvider(),
            new MidwifeLocalizerProviderPlugin(),
            new CleanerLocalizerProviderPlugin()
        ];
    }

    getTickProcessPlugins(): TickProcessPluginInterface[] {
        return [
            // Pre
            new StorageTickProcessPlugin(),

            // Do
            new MidwifeTickProcessPlugin(),

            // Post
            new CleanerTickProcessPlugin(),
        ];
    }
}
