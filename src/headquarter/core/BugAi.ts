import {BugAiInterface} from "./BugAiInterface";
import Container from "../dependencies/Container";
import Localizer from "../localizer/Localizer";
import RegistryInterface from "./types/RegistryInterface";
import ContainerInterface from "../dependencies/types/ContainerInterface";
import LocalizerInterface from "../localizer/types/LocalizerInterface";

export default class BugAi implements BugAiInterface {
    private static instance: BugAiInterface;
    private registry: RegistryInterface;
    private dependencyContainer: ContainerInterface;
    private localizer: LocalizerInterface;

    private constructor(registry: RegistryInterface) {
        this.registry = registry;
        this.localizer = new Localizer();
        this.dependencyContainer = new Container(this.localizer);

        this.registry.getLocalizerProvider().forEach((provider) => {
            provider.provideFacade(this.localizer, this.dependencyContainer);
        });

        this.registry.getDependencyProvider().forEach((provider) => {
            provider.provideDependencies(this.dependencyContainer);
        });
    }

    public static getInstance(registry: RegistryInterface): BugAiInterface {
        if (!this.instance) {
            this.instance = new BugAi(registry);
        }
        return this.instance;
    }

    runTick() {
        console.log("Tick...")

        // Automatically delete memory of missing creeps
        for (const name in Memory.creeps) {
            if (!(name in Game.creeps)) {
                delete Memory.creeps[name];
            }
        }
    }
}
