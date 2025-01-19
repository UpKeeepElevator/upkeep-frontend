import { Component, computed, inject, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-dashboard-client-item',
  templateUrl: './dashboard-client-item.component.html',
  styleUrls: ['./dashboard-client-item.component.scss'],
})
export class DashboardClientItemComponent  implements OnInit {
  private userService = inject(UserService)
  private user = this.userService.getUser()

  constructor() { }

  ngOnInit() {}

}
