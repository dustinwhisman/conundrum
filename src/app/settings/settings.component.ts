import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RadioGroup } from '../form-controls.type';
import { defaultSettings } from '../settings';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  settingsForm = this.formBuilder.group(this.settingsService.getSettings());
  timerDurationControl: RadioGroup = {
    name: 'timerDuration',
    legend: 'Timer Duration',
    options: [
      {
        label: '30 seconds',
        value: '30',
      },
      {
        label: '60 seconds',
        value: '60',
      },
      {
        label: 'No timer',
        value: 'off',
      },
    ],
  };
  letterPositioningControl: RadioGroup = {
    name: 'letterPositioning',
    legend: 'Letter Positioning',
    options: [
      {
        label: 'Arrange letters in a straight line',
        value: 'linear',
      },
      {
        label: 'Arrange letters in a circle',
        value: 'radial',
      },
    ],
  };

  constructor(
    private formBuilder: FormBuilder,
    private settingsService: SettingsService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.settingsService.setSettings({
      timerDuration:
        this.settingsForm.value.timerDuration ?? defaultSettings.timerDuration,
      letterPositioning:
        this.settingsForm.value.letterPositioning ??
        defaultSettings.letterPositioning,
    });

    this.router.navigate(['']);
  }
}
