// MARK: Function
const APIBodyVariableMissingError = (missingVariable: string) => {
    return "The request is missing the following body variable : " + missingVariable + "."
}

export default APIBodyVariableMissingError