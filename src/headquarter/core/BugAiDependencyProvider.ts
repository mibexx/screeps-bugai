import {DependencyProviderPluginInterface} from "./types/plugins/DependencyProviderPluginInterface";
import ContainerInterface from "../dependencies/types/ContainerInterface";

export default class BugAiDependencyProvider implements DependencyProviderPluginInterface{
    provideDependencies(container: ContainerInterface): void {

    }
}
