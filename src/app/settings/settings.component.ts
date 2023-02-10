import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  settingsForm = this.formBuilder.group({
    timerDuration: '30',
    letterPositioning: 'linear',
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit(): void {
    console.log('Your settings have been saved', this.settingsForm.value);
  }
}
