import { user, UserApi } from "./User"

export interface ClientAPI {
    clienteId: number;
    nombre: string;
    telefono: string;
    nombreContacto: string;
    usuarioId: number;
    usuario: UserApi;
    edificios: BuildingAPI[];
}

export interface BuildingAPI{
    edificioId: number;
    edificio1: string;
    edificioUbicacion: string;
    geolocalizacion: string;
    clienteId: number;
}

export interface Building{
    id: number;
    name: string;
    address: string;
    location: string;
    clientId: number;
}

export interface Client{
    id: number;
    name: string;
    phone: string;
    contactName: string;
    userId: number;
    user: user;
    buildings: Building[];
}