import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import type { RadioGroup } from '../form-controls.type';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.css'],
})
export class RadioGroupComponent {
  @Input() formGroup: FormGroup | undefined;
  @Input() radioGroup: RadioGroup | undefined;
}
