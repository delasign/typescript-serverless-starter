// MARK: Types
import response from "utils/response/response";
import LogComplete from "utils/logs/complete";
// MARK: Function
const SuccessfulResponse = (callback: any, process: string) => {
  LogComplete(process);
  return response(callback, 200, null, process + " Complete");
};

export default SuccessfulResponse;