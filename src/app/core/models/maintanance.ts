export interface MaintenanceAPI {
  mantenimientoId: number;
  tecnicoId: number;
  ascensorId: number;
  fecha: string;
  hora: string;
  firma: string;
  duracion: number;
  geolocalizacion: string;
  chequeos: CheckAPI[];
}

export interface CheckAPI {
  chequeoId: number;
  estadoSeccionId: number;
  chequeoComentarios: string;
  chequeoFecha: string;
  chequeoHora: string;
  mantenimientoId: number;
  seccionId: number;
  anexos: [];
}
export interface AttachmentCheckAPI {
  anexoId: string;
  anexoNombre: string;
  anexoTipo: string;
  anexoRuta: string;
  chequeoId: number;
  anexoPeso: string;
}

export interface Maintenance {
  maintenanceId: number;
  technicianId: number;
  elevatorId: number;
  date: string;
  time: string;
  signature: string;
  duration: number;
  geolocation: string;
  checks: Check[];
}

export interface Check {
  checkId: number;
  sectionStatusId: number;
  checkComments: string;
  checkDate: string;
  checkTime: string;
  maintenanceId: number;
  sectionId: number;
  attachments: AttachmentCheck[];
}

export interface AttachmentCheck {
  attachmentId: string;
  attachmentName: string;
  attachmentType: string;
  attachmentPath: string;
  checkId: number;
  attachmentWeight: string;
}
