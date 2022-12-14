// MARK: Function
const LogInProgress = (process: string, object?: any) => {
    if (object) {
        console.log("⚈ ⚈ ⚈ " + process + " ⚈ ⚈ ⚈ : ", object);
    } else {
        console.log("⚈ ⚈ ⚈ " + process + " ⚈ ⚈ ⚈");
    }
}

export default LogInProgress