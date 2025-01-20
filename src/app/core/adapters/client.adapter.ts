import {
  Building,
  BuildingAPI,
  Client,
  ClientAPI,
} from '../models/Client.model';
import { fake_building } from '../utils/fake_building';
import { userTransform } from './user.adapter';

export const ClientTransform = (client_api: ClientAPI): Client => {
  const client_app: Client = {
    id: client_api.clienteId,
    name: client_api.nombre,
    phone: client_api.telefono,
    contactName: client_api.nombreContacto,
    userId: client_api.usuarioId,
    user: userTransform(client_api.usuario),
    buildings: BuildingsListTransfrom(client_api.edificios),
  };
  return client_app;
};

export const BuildingsListTransfrom = (list: BuildingAPI[]): Building[] => {
  const buildings: Building[] = list.map((building) => {
    const build: Building = {
      id: building.edificioId,
      name: building.edificio1,
      address: building.edificioUbicacion,
      location: building.geolocalizacion,
      clientId: building.clienteId,
    };
    return build;
  });
  return buildings;
};

export const BuildingTransform = (building?: BuildingAPI): Building => {
  if (!building) return fake_building;
  const build: Building = {
    id: building.edificioId,
    name: building.edificio1,
    address: building.edificioUbicacion,
    location: building.geolocalizacion,
    clientId: building.clienteId,
  };

  return build;
};
