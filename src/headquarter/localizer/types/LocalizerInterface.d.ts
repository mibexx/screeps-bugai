import FacadeInterface from "../../core/types/FacadeInterface";

export default interface LocalizerInterface {
    addFacade(key: string, facade: FacadeInterface): void;
    get<T>(key: string): T;
}
