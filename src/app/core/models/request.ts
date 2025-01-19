export interface RequestAPI {
  solicitudId: number;
  tecnicoId: number;
  ascensorId: number;
  fechaSolicitud: string;
  fechaRespuesta: string;
  estado: string;
  prioridadId: number;
  prioridad: PriorityAPI;
  descripcionSolicitud: string;
  servicioId: number;
}

export interface PriorityAPI {
  prioridadId: number;
  descripcion: string;
  nombrePrioridad: string;
}

export interface Request {
  requestId: number;
  technicianId: number;
  elevatorId: number;
  requestDate: string;
  responseDate: string;
  state: string;
  priorityId: number;
  priority: Priority;
  requestDescription: string;
  serviceId: number;
}

export interface Priority {
  priorityId: number;
  description: string;
  priorityName: string;
}

export interface RequestForm {
  tecnicoId: number;
  ascensorId: number;
  fechaSolicitud: string;
  prioridadId: number;
  descripcionSolicitud: string;
  servicioId: number;
}
