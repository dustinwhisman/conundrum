import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-radio-group',
  templateUrl: './radio-group.component.html',
  styleUrls: ['./radio-group.component.css'],
})
export class RadioGroupComponent {
  @Input() legend: string | undefined;
}
