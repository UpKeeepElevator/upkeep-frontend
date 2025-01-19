import { Component, computed, inject, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { Fault } from 'src/app/core/models/Fault';
import { TechService } from 'src/app/core/services/tech.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-select-fault',
  templateUrl: './select-fault.component.html',
  styleUrls: ['./select-fault.component.scss'],
  imports: [],
})
export class SelectFaultComponent implements OnInit {
  protected activeUser = computed(() => this._userService.user());
  private _userService = inject(UserService);
  private _techService = inject(TechService);
  private _modal = inject(ModalController);

  @Input({ required: true })
  faults: Fault[] = [];
  currentFault = computed(() => this._techService.activeFault());

  constructor() {}

  ngOnInit() {}

  SetActiveFault(fault: Fault) {
    this._techService.SetActiveFault(fault);
  }
}
