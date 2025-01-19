import { FaultType, FaultTypeAPI } from "../models/Fault";

export const faultTypeTransform = (typesAPI: FaultTypeAPI[]) => {
    const types: FaultType[] = typesAPI.map(type_api => {
        return {
            id: type_api.tipoAveriaId,
            name: type_api.tipoNombre,
            description: type_api.tipoDescripcion
        }
    })
    return types
}