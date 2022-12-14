// MARK: Types
import response from "utils/response/response";
import LogFailure from "utils/logs/failed";
import CallbackError from "types/common/callback/callbackError";
// MARK: Function
const FailedResponse = (callback: any, process: string, error: CallbackError) => {
    LogFailure(process, error);
    return response(callback, 400, error, null);
}

export default FailedResponse