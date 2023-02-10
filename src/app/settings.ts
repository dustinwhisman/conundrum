export interface Settings {
  timerDuration: '30' | '60' | 'off';
  letterPositioning: 'linear' | 'radial';
}

export const defaultSettings: Settings = {
  timerDuration: '30',
  letterPositioning: 'linear',
};
