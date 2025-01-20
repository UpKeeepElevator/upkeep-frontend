import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, OnInit, Output } from '@angular/core';
import { Fault } from 'src/app/core/models/Fault';

@Component({
  selector: 'app-fault-small-card',
  templateUrl: './fault-small-card.component.html',
  styleUrls: ['./fault-small-card.component.scss'],
  imports: [CommonModule],
})
export class FaultSmallCardComponent implements OnInit {
  fault = input.required<Fault>();
  current = input<boolean>(false);

  @Output() faultSelected = new EventEmitter<Fault>();

  constructor() {}

  ngOnInit() {}

  SelectFault() {
    this.faultSelected.emit(this.fault());
  }
}
