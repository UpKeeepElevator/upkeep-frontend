import {
  Fault,
  FaultAPI,
  FaultAttachment,
  FaultAttachmentAPI,
  FaultType,
  FaultTypeAPI,
} from '../models/Fault';

export const faultTypeTransform = (typesAPI: FaultTypeAPI[]) => {
  const types: FaultType[] = typesAPI.map((type_api) => {
    return {
      id: type_api.tipoAveriaId,
      name: type_api.tipoNombre,
      description: type_api.tipoDescripcion,
    };
  });
  return types;
};

export const faultListTransform = (faultsAPI: FaultAPI[]) => {
  const types: Fault[] = faultsAPI.map((faultAPI) => {
    return {
      elevatorId: faultAPI.ascensorId,
      faultId: faultAPI.averiaId,
      faultTypeId: faultAPI.tipoAveriaId,
      reporteDate: faultAPI.fechaReporte,
      evidence: faultAPI.evidencia,
      faultComment: faultAPI.comentarioAveria,
      responseDate: faultAPI.fechaRespuesta,
      failFound: faultAPI.errorEncontrado,
      reparationDone: faultAPI.reparacionRealizada,
      faultSection: faultAPI.seccionAveria,
      technicianId: faultAPI.tecnicoId,
      repartionTime: faultAPI.tiempoReparacion,
      responseTime: faultAPI.tiempoRespuesta,
      sign: faultAPI.firma,
      geolocation: faultAPI.geolocalizacion,
      faultAttachment: attachmentListTransform(faultAPI.anexoAveria),
    };
  });
  return types;
};

export const faultTransform = (faultAPI: FaultAPI) => {
  const fault: Fault = {
    elevatorId: faultAPI.ascensorId,
    faultId: faultAPI.averiaId,
    faultTypeId: faultAPI.tipoAveriaId,
    reporteDate: faultAPI.fechaReporte,
    evidence: faultAPI.evidencia,
    faultComment: faultAPI.comentarioAveria,
    responseDate: faultAPI.fechaRespuesta,
    failFound: faultAPI.errorEncontrado,
    reparationDone: faultAPI.reparacionRealizada,
    faultSection: faultAPI.seccionAveria,
    technicianId: faultAPI.tecnicoId,
    repartionTime: faultAPI.tiempoReparacion,
    responseTime: faultAPI.tiempoRespuesta,
    sign: faultAPI.firma,
    geolocation: faultAPI.geolocalizacion,
    faultAttachment: attachmentListTransform(faultAPI.anexoAveria),
  };

  return fault;
};

export const attachmentTransform = (attachmentAPI: FaultAttachmentAPI) => {
  const attachment: FaultAttachment = {
    attachmentId: attachmentAPI.anexoId,
    attachmentName: attachmentAPI.anexoNombre,
    attachmentType: attachmentAPI.anexoTipo,
    attachmentPath: attachmentAPI.anexoRuta,
    faultId: attachmentAPI.averiaId,
    attachmentWeight: attachmentAPI.anexoPeso,
  };

  return attachment;
};

export const attachmentListTransform = (
  attachmentsAPI: FaultAttachmentAPI[]
) => {
  const attachments: FaultAttachment[] = attachmentsAPI.map((attachmentAPI) => {
    return {
      attachmentId: attachmentAPI.anexoId,
      attachmentName: attachmentAPI.anexoNombre,
      attachmentType: attachmentAPI.anexoTipo,
      attachmentPath: attachmentAPI.anexoRuta,
      faultId: attachmentAPI.averiaId,
      attachmentWeight: attachmentAPI.anexoPeso,
    };
  });
  return attachments;
};
