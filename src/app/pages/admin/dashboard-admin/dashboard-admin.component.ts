import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { Elevator } from 'src/app/core/models/Elevator.model';
import { Fault } from 'src/app/core/models/Fault';
import { Maintenance } from 'src/app/core/models/maintanance';
import { user } from 'src/app/core/models/User';
import { ClientService } from 'src/app/core/services/client.service';
import { ElevatorService } from 'src/app/core/services/elevator.service';
import { FaultService } from 'src/app/core/services/fault.service';
import { MaintananceService } from 'src/app/core/services/maintanance.service';
import { TechService } from 'src/app/core/services/tech.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.scss'],
  imports: [CommonModule],
})
export class DashboardAdminComponent implements OnInit {
  protected activeUser = computed(() => this._userService.user());
  private _userService = inject(UserService);
  private _maintananceService = inject(MaintananceService);
  private _faultService = inject(FaultService);
  private _clientService = inject(ClientService);
  private _techService = inject(TechService);
  private _elevatorService = inject(ElevatorService);

  maintanances: Maintenance[] = [];
  faults: Fault[] = [];
  clients: Elevator[] = [];
  technicians: user[] = [];
  activeFaults: Fault[] = [];

  ngOnInit(): void {
    this._techService.getTechnicians().subscribe({
      next: (data) => (this.technicians = data),
    });
    this._maintananceService.getAllMaintanances().subscribe({
      next: (data) => {
        this.maintanances = data;
      },
    });
    this._faultService.getFaults().subscribe({
      next: (data) => (this.faults = data),
    });
    this._faultService.getActiveFaults().subscribe({
      next: (data) => {
        this.activeFaults = data;
        this.CalculateWork();
      },
    });
    this._elevatorService.getElevators().subscribe({
      next: (data) => {
        this.clients = data;
        console.log(data);
      },
    });
  }

  todoFaults: Fault[] = [];
  doingFaults: Fault[] = [];
  doneFaults: Fault[] = [];
  CalculateWork() {
    this.todoFaults = this.activeFaults;

    this.doingFaults = this.activeFaults.filter((x) => x.technicianId == null);
    this.doneFaults = this.faults.filter((x) => x.responseDate != null);
  }

  getMaintenanceNumber() {
    return this.maintanances.length;
  }
  getFaultsNumber() {
    return this.faults.length;
  }

  getInProgres() {
    let data = (100 * this.doingFaults.length) / this.faults.length;
    return data.toFixed(2);
  }
  getToDoProgress() {
    let data = (100 * this.todoFaults.length) / this.faults.length;
    return data.toFixed(2);
  }
  getDoneProgress() {
    let data = 100 * (this.doneFaults.length / this.faults.length);
    console.log(data);

    return data.toFixed(2);
  }
}
