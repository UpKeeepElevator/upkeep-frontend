import { Component, inject, input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { ReportClientComponent } from 'src/app/pages/client/report-client/report-client.component';
import { RouteTechComponent } from 'src/app/pages/tech/route-tech/route-tech.component';

@Component({
  selector: 'app-slideup-report',
  templateUrl: './slideup-report.component.html',
  styleUrls: ['./slideup-report.component.scss'],
})
export class SlideupReportComponent implements OnInit {
  private _modal = inject(ModalController);

  type = input.required<'client' | 'tech'>();

  constructor() {}

  ngOnInit() {}

  reportModalClass = () =>
    `absolute left-1/2 translate-x-[-50%] top-2 w-1/6 h-1 rounded-full bg-${
      this.type() == 'client' ? 'golden-bell-600' : 'mantis-400'
    }`;

  private Debug() {
    this.openReporter();
  }

  async openReporter() {
    if (this.type() === 'client') {
      const modalReport = await this._modal.create({
        component: ReportClientComponent,
        breakpoints: [0.5, 0.8, 1],
        initialBreakpoint: 0.8,
        cssClass: 'modal-report',
      });

      await modalReport.present();
    } else {
      const modalReport = await this._modal.create({
        component: RouteTechComponent,
        initialBreakpoint: 1,
        cssClass: 'modal-report',
      });

      await modalReport.present();
    }
  }
}
