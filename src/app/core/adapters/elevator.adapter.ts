import {
  Elevator,
  ElevatorAPI,
  ElevatorSection,
  ElevatorSectionAPI,
} from '../models/Elevator.model';
import { BuildingTransform } from './client.adapter';

export const ElevatorTransform = (elevator_api: ElevatorAPI): Elevator => {
  const elevator_app: Elevator = {
    id: elevator_api.ascensorId,
    floorNumber: elevator_api.numeroPisos,
    branch: elevator_api.marca,
    model: elevator_api.modelo,
    capacity: elevator_api.capacidad,
    type: elevator_api.tipoAscensor,
    usage: elevator_api.tipoDeUso,
    buildingAddress: elevator_api.ubicacionEnEdificio,
    location: elevator_api.geolocalizacion,
    buildingId: elevator_api.edificioId,
    building: BuildingTransform(elevator_api.edificio),
    sections: ElevatorSectionListTransform(elevator_api.secciones),
  };
  return elevator_app;
};

export const ElevatorListTransform = (
  elevator_api: ElevatorAPI[]
): Elevator[] => {
  const elevatorList: Elevator[] = elevator_api.map((elevator) => {
    const elevator_app: Elevator = {
      id: elevator.ascensorId,
      floorNumber: elevator.numeroPisos,
      branch: elevator.marca,
      model: elevator.modelo,
      capacity: elevator.capacidad,
      type: elevator.tipoAscensor,
      usage: elevator.tipoDeUso,
      buildingAddress: elevator.ubicacionEnEdificio,
      location: elevator.geolocalizacion,
      buildingId: elevator.edificioId,
      building: BuildingTransform(elevator.edificio),
      sections: ElevatorSectionListTransform(elevator.secciones),
    };
    return elevator_app;
  });
  return elevatorList;
};

export const ElevatorSectionListTransform = (
  sections_api: ElevatorSectionAPI[] | undefined
): ElevatorSection[] => {
  if (!sections_api) return [];
  const sections_app: ElevatorSection[] = sections_api.map((section) => {
    const section_app: ElevatorSection = {
      elevatorPartId: section.parteAscensorId,
      id: section.seccionId,
      elevatorId: section.ascensorId,
      lastCheck: section.ultimaRevision,
      elevatorPartName: section.nombreSeccion,
    };
    return section_app;
  });

  return sections_app;
};

export const ElevatorSectionTransform = (
  section: ElevatorSectionAPI
): ElevatorSection => {
  const section_app: ElevatorSection = {
    elevatorPartId: section.parteAscensorId,
    id: section.seccionId,
    elevatorId: section.ascensorId,
    lastCheck: section.ultimaRevision,
    elevatorPartName: section.nombreSeccion,
  };

  return section_app;
};
