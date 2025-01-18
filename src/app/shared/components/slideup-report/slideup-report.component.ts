import { Component, inject, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone'
import { ReportClientComponent } from 'src/app/pages/client/report-client/report-client.component';

@Component({
  selector: 'app-slideup-report',
  templateUrl: './slideup-report.component.html',
  styleUrls: ['./slideup-report.component.scss'],
})
export class SlideupReportComponent  implements OnInit {
  private _modal = inject(ModalController)

  constructor() { }

  ngOnInit() {}

  async openReporter(){
    const modalReport = await this._modal.create({
      component: ReportClientComponent,
      breakpoints: [.5, .8],
      initialBreakpoint: .8,
      cssClass: 'modal-report'
    })

    await modalReport.present()
  }

}
