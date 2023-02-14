import { Injectable } from '@angular/core';

import { type Settings, defaultSettings } from './settings';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  settings: Settings = {
    ...defaultSettings,
  };

  constructor() {}

  getSettings() {
    const savedSettings = localStorage.getItem('settings') ?? '';
    if (!savedSettings) {
      return this.settings;
    }

    const parsedSettings: Settings = JSON.parse(savedSettings);
    this.setSettings(parsedSettings);
    return this.settings;
  }

  setSettings({ timerDuration, letterPositioning }: Settings) {
    this.settings.timerDuration = timerDuration;
    this.settings.letterPositioning = letterPositioning;
    localStorage.setItem('settings', JSON.stringify(this.settings));
  }
}
