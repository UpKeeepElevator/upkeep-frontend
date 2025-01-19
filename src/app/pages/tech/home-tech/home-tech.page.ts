import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { addIcons } from 'ionicons';
import { SlideupReportComponent } from '../../../shared/components/slideup-report/slideup-report.component';

@Component({
  selector: 'app-home-tech',
  templateUrl: './home-tech.page.html',
  styleUrls: ['./home-tech.page.scss'],
  standalone: true,
  imports: [RouterOutlet, SlideupReportComponent],
})
export class HomeTechPage implements OnInit {
  constructor() {
    addIcons({
      menu: '/assets/icon/menu.svg',
      home: '/assets/icon/imagotipo.svg',
    });
  }

  ngOnInit(): void {}
}
