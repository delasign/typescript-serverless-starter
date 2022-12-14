// MARK: Function
const LogSuccess = (message: string, object?: any) => {
    if (object) {
        console.log("✅ " + message + " : ", object);
    } else {
        console.log("✅ "+message+".")
    }
    
}

export default LogSuccess