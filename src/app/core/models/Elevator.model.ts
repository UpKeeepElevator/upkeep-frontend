import { Building, BuildingAPI } from './Client.model';

export interface ElevatorAPI {
  ascensorId: number;
  numeroPisos: number;
  marca: string;
  modelo: string;
  capacidad: number;
  tipoAscensor: string;
  tipoDeUso: string;
  ubicacionEnEdificio: string;
  geolocalizacion: string;
  edificioId: number;
  edificio: BuildingAPI;
  secciones: ElevatorSectionAPI[];
}

export interface ElevatorSectionAPI {
  parteAscensorId: number;
  seccionId: number;
  nombreSeccion: string;
  ascensorId: number;
  ultimaRevision: string | null;
}

export interface Elevator {
  id: number;
  floorNumber: number;
  branch: string;
  model: string;
  capacity: number;
  type: string;
  usage: string;
  buildingAddress: string;
  location: string;
  buildingId: number;
  building: Building;
  sections: ElevatorSection[];
}

export interface ElevatorSection {
  elevatorPartId: number;
  elevatorPartName: string;
  id: number;
  elevatorId: number;
  lastCheck: string | null;
}
