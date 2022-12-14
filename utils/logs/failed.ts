// MARK: Types
import { CallbackError } from "types/common/callback/functionCallback";
// MARK: Function
const LogFailure = (process: string, error: CallbackError) => {
    console.log("❌ " + process + " Failed: " + error);
}

export default LogFailure