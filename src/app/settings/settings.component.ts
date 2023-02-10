import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { defaultSettings } from '../settings';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent {
  settingsForm = this.formBuilder.group(this.settingsService.getSettings());

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
