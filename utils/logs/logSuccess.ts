// MARK: Function
const LogSuccess = (process: string, object?: any) => {
  if (object) {
    console.log("✅ " + process + " : ", object);
  } else {
    console.log("✅ " + process + ".");
  }
};

export default LogSuccess;
