import { Component, Input, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DashboardTile } from 'src/app/pages/admin/gestionar-admin/gestionar-admin.page';

@Component({
  selector: 'app-card-admin',
  templateUrl: './card-admin.component.html',
  styleUrls: ['./card-admin.component.scss'],
  imports: [RouterLink]
})

export class CardAdminComponent  implements OnInit {
   @Input({required: true}) 
   tile: DashboardTile = {
    title: '',
    imageSrc: '',
    borderColor: ''
  }


  constructor() { }

  ngOnInit() {}

}
