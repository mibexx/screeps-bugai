import LocalizerInterface from "../../localizer/types/LocalizerInterface";

export default interface ContainerInterface {
    set(key: string, callable: Function): void;
    get(key: string): any;
    getLocalizer(): LocalizerInterface;
}
