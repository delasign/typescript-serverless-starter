import CallbackError from "./callbackError";
import CallbackResponse from "./callbackResponse";

type FunctionCallback = (
  error: CallbackError,
  response: CallbackResponse
) => void;

export default FunctionCallback;
export { FunctionCallback, CallbackError, CallbackResponse };
