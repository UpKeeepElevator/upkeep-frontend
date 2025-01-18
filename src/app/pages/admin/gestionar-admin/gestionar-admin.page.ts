import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from 'src/app/shared/components/sidebar/sidebar.component';
import { CardAdminComponent } from '../../../shared/components/card-admin/card-admin.component';
export interface DashboardTile {
  title: string;
  imageSrc: string;
  borderColor: string;
  route?: string;
}

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './gestionar-admin.page.html',
  styleUrls: ['./gestionar-admin.page.scss'],
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterLink, CardAdminComponent],
})
export class AdminGestionarComponent {
  topTiles: DashboardTile[] = [
    {
      title: 'Averia',
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/e5d744eb684b4278d38fc369e45e57adf18283acbd03886c5ee733abb3e00e49?placeholderIfAbsent=true&apiKey=4a5647cb5c024e33bcc119afd56c69f6',
      borderColor: 'border-mantis-400',
      route: '/administrator/gestionar/averia',
    },
    {
      title: 'Usuario',
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/f6d89ea8c5cfe0fda0caa98f684b56ba3f0a6341dd1ad1467fe2c4912431b911?placeholderIfAbsent=true&apiKey=4a5647cb5c024e33bcc119afd56c69f6',
      borderColor: 'border-golden-bell-600',
      route: '/administrator/gestionar/usuario',
    },
    {
      title: 'Solicitud',
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/d2ededc3f5dc7a6d3400e373c608977cd6425a891075d2ac1d04e38d6f8492c4?placeholderIfAbsent=true&apiKey=4a5647cb5c024e33bcc119afd56c69f6',
      borderColor: 'border-mantis-400',
      route: '/administrator/gestionar/solicitud',
    },

    {
      title: 'Ruta',
      imageSrc: '/assets/icon/averia.svg',
      borderColor: 'border-golden-bell-600',
      route: '/administrator/gestionar/ruta',
    },
    {
      title: 'Equipo',
      imageSrc:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/1dbd8fb3e8df3f473fae62f50e27f047aed98f051f0fb3ae133112a8129ac113?placeholderIfAbsent=true&apiKey=4a5647cb5c024e33bcc119afd56c69f6',
      borderColor: 'border-mantis-400',
      route: '/administrator/gestionar/equipo',
    },
  ];
}
