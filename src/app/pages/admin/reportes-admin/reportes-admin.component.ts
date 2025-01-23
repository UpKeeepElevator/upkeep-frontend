import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Maintenance } from 'src/app/core/models/maintanance';
import { MaintananceService } from 'src/app/core/services/maintanance.service';

@Component({
  selector: 'app-reportes-admin',
  templateUrl: './reportes-admin.component.html',
  styleUrls: ['./reportes-admin.component.scss'],
  imports: [CommonModule],
})
export class ReportesAdminComponent implements OnInit {
  reportTypes: string[] = ['Mantenimiento'];

  maintenances: Maintenance[] = [];

  printable: boolean = false;

  private _maintenanceService = inject(MaintananceService);

  constructor() {}

  ngOnInit() {}

  PrintReport() {
    console.log('Imprimiendo reporte');
    this._maintenanceService.getAllMaintanances().subscribe({
      next: (data) => {
        this.maintenances = data;
        this.printable = true;
      },
    });
  }
}
