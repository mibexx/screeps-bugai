import DependencyNotFound from "./error/DependencyNotFound";
import ContainerInterface from "./types/ContainerInterface";
import LocalizerInterface from "../localizer/types/LocalizerInterface";

export default class Container implements ContainerInterface {
    private dependencies: {[key: string]: (container: ContainerInterface) => any} = {};
    private localizer: LocalizerInterface;

    constructor(localizer: LocalizerInterface) {
        this.localizer = localizer;
    }

    set(key: string, callable: (container: ContainerInterface) => any): void {
        this.dependencies[key] = callable;
    }

    get(key: string): any {
        if (!this.dependencies[key]) {
            throw new DependencyNotFound(key);
        }

        return this.dependencies[key](this);
    }

    getLocalizer(): LocalizerInterface {
        return this.localizer;
    }
}
