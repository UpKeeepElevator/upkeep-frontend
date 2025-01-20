export interface ServiceAPI {
  servicioId: number;
  nombreServicio: string;
  descripcion: string;
  tipoServicioId: number;
  tipoServicio: ServiceTypeAPI;
}

export interface ServiceTypeAPI {
  tipoServicioId: number;
  descripcion: string;
  nombreServicio: string;
}

export interface Service {
  serviceId: number;
  serviceName: string;
  description: string;
  serviceTypeId: number;
  serviceType: ServiceType;
}

export interface ServiceType {
  serviceTypeId: number;
  description: string;
  serviceTypeName: string;
}
