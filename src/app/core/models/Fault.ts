export interface FaultType {
  id: number;
  name: string;
  description: string;
}

export interface FaultTypeAPI {
  tipoAveriaId: number;
  tipoNombre: string;
  tipoDescripcion: string;
}

export interface FaultAPI {
  averiaId: number;
  ascensorId: number;
  tipoAveriaId: number;
  fechaReporte: string;
  evidencia: string;
  comentarioAveria: string;
  fechaRespuesta?: string;
  errorEncontrado?: string;
  reparacionRealizada?: string;
  seccionAveria?: number;
  tecnicoId?: number;
  tiempoReparacion?: number;
  tiempoRespuesta?: number;
  firma?: string;
  geolocalizacion?: string;
  anexoAveria: FaultAttachmentAPI[];
}

export interface Fault {
  faultId: number;
  elevatorId: number;
  faultTypeId: number;
  reporteDate: string;
  evidence: string;
  faultComment: string;
  responseDate?: string;
  failFound?: string;
  reparationDone?: string;
  faultSection?: number;
  technicianId?: number;
  repartionTime?: number;
  responseTime?: number;
  sign?: string;
  geolocation?: string;
  faultAttachment: FaultAttachment[];
}

export interface FaultAttachmentAPI {
  anexoId: string;
  anexoNombre: string;
  anexoTipo: string;
  anexoRuta: string;
  averiaId: number;
  anexoPeso: string;
}
export interface FaultAttachment {
  attachmentId: string;
  attachmentName: string;
  attachmentType: string;
  attachmentPath: string;
  faultId: number;
  attachmentWeight: string;
}
