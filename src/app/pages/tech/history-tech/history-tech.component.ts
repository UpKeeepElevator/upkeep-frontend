import { DatePipe } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { IonIcon, ModalController } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { Job } from 'src/app/core/models/job';
import { TechService } from 'src/app/core/services/tech.service';
import { UserService } from 'src/app/core/services/user.service';
import { HomeButtonComponent } from '../../../shared/components/home-button/home-button.component';
import { SidebarButtonComponent } from '../../../shared/components/sidebar-button/sidebar-button.component';

@Component({
  selector: 'app-history-tech',
  templateUrl: './history-tech.component.html',
  styleUrls: ['./history-tech.component.scss'],
  imports: [SidebarButtonComponent, HomeButtonComponent, IonIcon, DatePipe],
})
export class HistoryTechComponent implements OnInit {
  protected activeUser = computed(() => this._userService.user());
  private _userService = inject(UserService);
  private _techService = inject(TechService);
  private _modal = inject(ModalController);

  protected jobs: Job[] = [];

  constructor() {
    addIcons({
      attach: 'assets/icon/attachment.svg',
    });
  }

  ngOnInit() {
    this._techService.GetJobsDone(this.activeUser().id_user).subscribe({
      next: (jobs) => (this.jobs = jobs.filter((x) => x.date != null)),
    });
  }
}
