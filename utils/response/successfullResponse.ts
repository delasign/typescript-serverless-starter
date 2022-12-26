// MARK: Types
import response from "utils/response/response";
import LogComplete from "utils/logs/complete";
// MARK: Function
const SuccessfulResponse = (callback: any, process: string, object?: any) => {
  LogComplete(process, object);
  if (object) {
    return response(callback, 200, null, object);
  } else {
    return response(callback, 200, null, process + " Complete");
  }
};

export default SuccessfulResponse;
