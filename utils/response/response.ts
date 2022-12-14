// MARK: Types
import { CallbackError, CallbackResponse } from "types/common/callback/functionCallback";
// MARK: Function
const response = (callback: any, code: number, error: CallbackError, response: CallbackResponse) => {
  return callback( null, {
    statusCode: code,
    headers: {
      "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials" : true, // Required for cookies, authorization headers with HTTPS
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      error: error,
      response: response
    })
  });
}

export default response