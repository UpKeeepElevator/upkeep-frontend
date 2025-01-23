import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SlideupReportComponent } from "../../../shared/components/slideup-report/slideup-report.component";

@Component({
  selector: 'app-home-client',
  templateUrl: './home-client.page.html',
  styleUrls: ['./home-client.page.scss'],
  standalone: true,
  imports: [RouterOutlet, SlideupReportComponent]
})
export class HomeClientPage implements OnInit {


  constructor() {}

  ngOnInit() {
  }

}
