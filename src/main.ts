import { ErrorMapper } from "utils/ErrorMapper";
import BugAi from "./headquarter/core/BugAi";
import Registry from "./Registry";

const bugAi = BugAi.getInstance(new Registry());

// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
export const loop = ErrorMapper.wrapLoop(() => {
  bugAi.runTick();
});
