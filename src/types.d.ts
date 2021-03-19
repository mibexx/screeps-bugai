import {BugAiInterface} from "./headquarter/core/BugAiInterface";

declare var global: any;

// `global` extension samples
declare namespace NodeJS {
    interface Global {
        log: any;
        bugAi: BugAiInterface;
    }
}
