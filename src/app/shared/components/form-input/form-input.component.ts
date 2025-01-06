import { Component, effect, forwardRef, input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

type InputCss = 'login' | 'admin' | 'tech'

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss'],
  imports: [ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormInputComponent),
      multi: true
    }
  ]
})
export class FormInputComponent  implements ControlValueAccessor, OnInit {
  control = input.required<FormControl<any>>();
  cssClass = input.required<InputCss>();
  type = input<string>('text')
  errorMessage = input<string>();
  placeholder = input<string>('');

  protected style = ''

  onTouched = () => {};
  onChange = (_value:any) => {};

  constructor(){
    effect(() => {
      const currentSignalValue = this.control().value
      if(this.control().dirty || this.control().touched){
        const newValue = this.control().value

        if(newValue != currentSignalValue){
          this.onChange(newValue)
        }
      } 
    })
  }

  ngOnInit(): void {
    this.loadStyle()
  }

  writeValue(value: any): void {
    if(value != this.control().value){
      this.control().setValue(value, {emitEvent: false})
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.control().disable() : this.control().enable()
  }

  private loadStyle(){
    const option = this.cssClass()

    switch(option){
      case 'login':
        this.style = 'w-full border border-solid border-white rounded  text-black p-2'
        break;
      case 'admin':
        this.style = 'w-full border border-solid border-grenadier-700 rounded  text-black p-2'
        break;
      case 'tech':
        this.style = 'w-full border border-solid border-sea-green-700 rounded  text-black p-2'
        break;
      default:
        this.style = 'w-full border border-solid border-white rounded  text-white p-2'
        break;
    }
  }

}
