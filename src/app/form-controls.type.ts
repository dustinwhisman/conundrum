export interface RadioGroupOption {
  value: string;
  label: string;
}

export interface RadioGroup {
  legend: string;
  name: string;
  options: Array<RadioGroupOption>;
}
