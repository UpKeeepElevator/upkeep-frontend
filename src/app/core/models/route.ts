export interface RouteAPI {
  rutaId: string;
  nombreRuta: string;
  cantidadAscensores: number;
  cantidadVisitas: number;
  ascensores: RouteElevatorAPI[];
}

export interface RouteElevatorAPI {
  rutaId: string;
  ascensorId: number;
  fechaVisita: string;
  orden: number;
}

export interface Route {
  routeId: string;
  routeName: string;
  elevatorAmount: number;
  visitsAmount: number;
  elevators: RouteElevator[];
}

export interface RouteElevator {
  routeId: string;
  elevatorId: number;
  visitDate: string;
  order: number;
}

export interface RouteForm {
  rutaId: string;
  nombreRuta: string;
}
