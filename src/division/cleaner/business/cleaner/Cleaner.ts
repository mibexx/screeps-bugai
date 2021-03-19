import CleanerInterface from "./CleanerInterface";

export default class Cleaner implements CleanerInterface{
    clean(): void {
        this.cleanMissingCreeps();
    }

    private cleanMissingCreeps(): void {
        for (const name in Memory.creeps) {
            if (!(name in Game.creeps)) {
                delete Memory.creeps[name];
            }
        }
    }
}
