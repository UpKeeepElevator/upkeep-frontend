import { Fault } from '../models/Fault';
import { fake_building } from './fake_building';

export const fake_fault: Fault = {
  faultId: 0,
  elevatorId: 0,
  faultTypeId: 0,
  reporteDate: '',
  evidence: '',
  faultComment: '',
  faultAttachment: [],
  building: fake_building,
};
