// MARK: Function
const EnvironmentVariableMissingError = (missingVariable: string) => {
    return missingVariable + " Environment Variable does not exist."
}

export default EnvironmentVariableMissingError