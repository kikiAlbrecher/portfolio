import { CommonModule } from '@angular/common';
import { Component, forwardRef, Input, ViewChild } from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor, NgModel } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-form-item',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './contact-form-item.component.html',
  styleUrl: '../contact-form.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ContactFormItemComponent),
      multi: true
    }
  ]
})
export class ContactFormItemComponent implements ControlValueAccessor {
  @Input() model!: string;
  @Input() name!: string;
  @Input() type: string = '';
  @Input() placeholder!: string;
  @Input() required: boolean = false;
  @Input() labelKey!: string;
  @Input() pattern?: string | any;

  value: string = '';
  touched = false;
  disabled = false;

  onChange = (value: string) => { };
  onTouched = () => { };

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handleInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
  }

  markTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  @ViewChild('ngModel', { static: true }) ngModel!: NgModel;

  reset() {
    this.ngModel.reset();
  }
}