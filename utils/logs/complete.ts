// MARK: Function
const LogComplete = (process: string, object?: any) => {
    if (object) {
        console.log("✅ " + process + " Complete : ", object);
    } else {
        console.log("✅ "+process+" Complete.")
    }
    
}

export default LogComplete