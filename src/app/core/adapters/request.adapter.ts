import { Priority, PriorityAPI, Requesst, RequestAPI } from '../models/request';

export const PriorityListTransform = (prioritiesAPI: PriorityAPI[]) => {
  const types: Priority[] = prioritiesAPI.map((priority_api) => {
    return {
      description: priority_api.descripcion,
      priorityId: priority_api.prioridadId,
      priorityName: priority_api.nombrePrioridad,
    };
  });
  return types;
};

export const PriorityTransform = (priority_api: PriorityAPI) => {
  const attachment: Priority = {
    description: priority_api.descripcion,
    priorityId: priority_api.prioridadId,
    priorityName: priority_api.nombrePrioridad,
  };

  return attachment;
};

export const RequestListTransform = (requestsAPI: RequestAPI[]) => {
  const types: Requesst[] = requestsAPI.map((request_api) => {
    return {
      elevatorId: request_api.ascensorId,
      priority: PriorityTransform(request_api.prioridad),
      priorityId: request_api.prioridadId,
      requestDate: request_api.fechaSolicitud,
      requestDescription: request_api.descripcionSolicitud,
      requestId: request_api.solicitudId,
      responseDate: request_api.fechaRespuesta,
      serviceId: request_api.servicioId,
      state: request_api.estado,
      technicianId: request_api.tecnicoId,
    };
  });
  return types;
};

export const RequestTransform = (request_api: RequestAPI) => {
  const attachment: Requesst = {
    elevatorId: request_api.ascensorId,
    priority: PriorityTransform(request_api.prioridad),
    priorityId: request_api.prioridadId,
    requestDate: request_api.fechaSolicitud,
    requestDescription: request_api.descripcionSolicitud,
    requestId: request_api.solicitudId,
    responseDate: request_api.fechaRespuesta,
    serviceId: request_api.servicioId,
    state: request_api.estado,
    technicianId: request_api.tecnicoId,
  };

  return attachment;
};
