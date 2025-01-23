import {
  Service,
  ServiceAPI,
  ServiceType,
  ServiceTypeAPI,
} from '../models/service';

export const ServiceTypeTransform = (
  serviceTypeAPI: ServiceTypeAPI
): ServiceType => {
  const userApp: ServiceType = {
    serviceTypeId: serviceTypeAPI.tipoServicioId,
    description: serviceTypeAPI.descripcion,
    serviceTypeName: serviceTypeAPI.nombreServicio,
  };
  return userApp;
};

export const ServiceTypeListTransform = (
  serviceTypesApi: ServiceTypeAPI[]
): ServiceType[] => {
  if (!serviceTypesApi.length) return [];
  const users_app: ServiceType[] = serviceTypesApi.map((serviceTypeAPI) => {
    const userApp: ServiceType = {
      serviceTypeId: serviceTypeAPI.tipoServicioId,
      description: serviceTypeAPI.descripcion,
      serviceTypeName: serviceTypeAPI.nombreServicio,
    };
    return userApp;
  });
  return users_app;
};

export const ServiceTransform = (serviceAPI: ServiceAPI): Service => {
  const userApp: Service = {
    serviceId: serviceAPI.servicioId,
    serviceName: serviceAPI.nombreServicio,
    description: serviceAPI.descripcion,
    serviceTypeId: serviceAPI.tipoServicioId,
    serviceType: ServiceTypeTransform(serviceAPI.tipoServicio),
  };
  return userApp;
};

export const ServiceListTransform = (servicesAPI: ServiceAPI[]): Service[] => {
  if (!servicesAPI.length) return [];
  const users_app: Service[] = servicesAPI.map((serviceAPI) => {
    const userApp: Service = {
      serviceId: serviceAPI.servicioId,
      serviceName: serviceAPI.nombreServicio,
      description: serviceAPI.descripcion,
      serviceTypeId: serviceAPI.tipoServicioId,
      serviceType: ServiceTypeTransform(serviceAPI.tipoServicio),
    };
    return userApp;
  });
  return users_app;
};
