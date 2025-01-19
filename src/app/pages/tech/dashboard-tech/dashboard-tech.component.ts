import { Component, computed, inject, OnInit } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { UserService } from 'src/app/core/services/user.service';
import { DashboardItemTechComponent } from '../../../shared/components/dashboard-item-tech/dashboard-item-tech.component';
import { HomeButtonComponent } from '../../../shared/components/home-button/home-button.component';
import { SidebarButtonComponent } from '../../../shared/components/sidebar-button/sidebar-button.component';

@Component({
  selector: 'app-dashboard-tech',
  templateUrl: './dashboard-tech.component.html',
  styleUrls: ['./dashboard-tech.component.scss'],
  imports: [
    SidebarButtonComponent,
    HomeButtonComponent,
    IonIcon,
    DashboardItemTechComponent,
  ],
})
export class DashboardTechComponent implements OnInit {
  protected activeUser = computed(() => this._userService.user());
  private _userService = inject(UserService);

  constructor() {
    addIcons({
      action: '/assets/icon/action.svg',
      star: '/assets/icon/star-full.svg',
    });
  }

  ngOnInit() {}

  GetActivities(): string[] {
    return [];
  }
  GetLastclients(): string[] {
    return [];
  }

  GetPendingFaults(): any[] {
    return [];
  }
  GetActiveFault(): string {
    return 'Solucionando una avería en Agora Mall. ¿Lograste descifrar qué está pasando? ¡Completa el reporte y cierra la solicitud!';
  }
}
