import RegistryInterface from "./headquarter/core/types/RegistryInterface";
import {DependencyProviderInterface} from "./headquarter/dependencies/types/DependencyProviderInterface";
import BugAiDependencyProvider from "./headquarter/core/BugAiDependencyProvider";
import LocalizerProviderInterface from "./headquarter/core/types/LocalizerProviderInterface";
import StorageLocalizerProvider from "./division/storage/plugin/StorageLocalizerProvider";

export default class Registry implements RegistryInterface{
    getDependencyProvider(): DependencyProviderInterface[] {
        return [
            new BugAiDependencyProvider()
        ];
    }

    getLocalizerProvider(): LocalizerProviderInterface[] {
        return [
            new StorageLocalizerProvider()
        ];
    }
}
