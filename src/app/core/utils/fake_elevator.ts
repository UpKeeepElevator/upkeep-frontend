import { Elevator } from '../models/Elevator.model';
import { fake_building } from './fake_building';

export const fake_elevator: Elevator = {
  id: 0,
  floorNumber: 0,
  branch: '',
  model: '',
  capacity: 0,
  type: '',
  usage: '',
  buildingAddress: '',
  location: '',
  buildingId: 0,
  building: fake_building,
  sections: [],
};
