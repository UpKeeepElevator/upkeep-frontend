import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-elevator-section',
  templateUrl: './toggle-elevator-section.component.html',
  styleUrls: ['./toggle-elevator-section.component.scss'],
  imports: [CommonModule],
})
export class ToggleElevatorSectionComponent implements OnInit {
  ngOnInit(): void {}

  @Input() leftOption: string = 'Exterior';
  @Input() rightOption: string = 'Interior';
  @Output() optionChange = new EventEmitter<string>();

  selectedOption: 'left' | 'right' = 'left';

  toggleOption() {
    this.selectedOption = this.selectedOption === 'left' ? 'right' : 'left';
    this.optionChange.emit(
      this.selectedOption === 'left' ? this.leftOption : this.rightOption
    );
  }
}
