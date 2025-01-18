import { Component, input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DashboardTile } from 'src/app/pages/admin/gestionar-admin/gestionar-admin.page';

@Component({
  selector: 'app-card-admin',
  templateUrl: './card-admin.component.html',
  styleUrls: ['./card-admin.component.scss'],
  imports: [RouterLink],
})
export class CardAdminComponent implements OnInit {
  tile = input.required<DashboardTile>();

  constructor() {}

  ngOnInit() {}

  GetClass = () =>
    `px-20 py-16 rounded-3xl border border-solid max-md:px-5 max-md:max-w-full hover:bg-gray-300 ${
      this.tile().borderColor
    }`;
}
