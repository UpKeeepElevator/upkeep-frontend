import {
  AttachmentCheck,
  AttachmentCheckAPI,
  Check,
  CheckAPI,
  Maintenance,
  MaintenanceAPI,
} from '../models/maintanance';

export const maintenanceTransform = (
  maintenanceAPI: MaintenanceAPI
): Maintenance => {
  return {
    maintenanceId: maintenanceAPI.mantenimientoId,
    technicianId: maintenanceAPI.tecnicoId,
    elevatorId: maintenanceAPI.ascensorId,
    date: maintenanceAPI.fecha,
    time: maintenanceAPI.hora,
    signature: maintenanceAPI.firma,
    duration: maintenanceAPI.duracion,
    geolocation: maintenanceAPI.geolocalizacion,
    checks: checkListTransform(maintenanceAPI.chequeos),
  };
};

export const maintenanceListTransform = (
  maintenancesAPI: MaintenanceAPI[]
): Maintenance[] => {
  return maintenancesAPI.map(maintenanceTransform);
};

export const checkTransform = (checkAPI: CheckAPI): Check => {
  return {
    checkId: checkAPI.chequeoId,
    sectionStatusId: checkAPI.estadoSeccionId,
    checkComments: checkAPI.chequeoComentarios,
    checkDate: checkAPI.chequeoFecha,
    checkTime: checkAPI.chequeoHora,
    maintenanceId: checkAPI.mantenimientoId,
    sectionId: checkAPI.seccionId,
    attachments: attachmentCheckListTransform(checkAPI.anexos),
  };
};

export const checkListTransform = (checksAPI: CheckAPI[]): Check[] => {
  return checksAPI.map(checkTransform);
};

export const attachmentCheckTransform = (
  attachmentAPI: AttachmentCheckAPI
): AttachmentCheck => {
  return {
    attachmentId: attachmentAPI.anexoId,
    attachmentName: attachmentAPI.anexoNombre,
    attachmentType: attachmentAPI.anexoTipo,
    attachmentPath: attachmentAPI.anexoRuta,
    checkId: attachmentAPI.chequeoId,
    attachmentWeight: attachmentAPI.anexoPeso,
  };
};

export const attachmentCheckListTransform = (
  attachmentsAPI: AttachmentCheckAPI[]
): AttachmentCheck[] => {
  return attachmentsAPI.map(attachmentCheckTransform);
};
