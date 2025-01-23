import {
  Route,
  RouteAPI,
  RouteElevator,
  RouteElevatorAPI,
} from '../models/route';

export const routeTransform = (routeAPI: RouteAPI): Route => {
  return {
    routeId: routeAPI.rutaId,
    routeName: routeAPI.nombreRuta,
    elevatorAmount: routeAPI.cantidadAscensores,
    visitsAmount: routeAPI.cantidadVisitas,
    elevators: routeElevatorListTransform(routeAPI.ascensores),
  };
};

export const routeListTransform = (routesAPI: RouteAPI[]): Route[] => {
  return routesAPI.map((routeAPI) => routeTransform(routeAPI));
};

export const routeElevatorTransform = (
  routeElevatorAPI: RouteElevatorAPI
): RouteElevator => {
  return {
    routeId: routeElevatorAPI.rutaId,
    elevatorId: routeElevatorAPI.ascensorId,
    visitDate: routeElevatorAPI.fechaVisita,
    order: routeElevatorAPI.orden,
  };
};

export const routeElevatorListTransform = (
  routeElevatorsAPI: RouteElevatorAPI[]
): RouteElevator[] => {
  return routeElevatorsAPI.map((routeElevatorAPI) =>
    routeElevatorTransform(routeElevatorAPI)
  );
};
