export const COLOR_CHOICES = ["primary", "secondary", "success", "warning", "danger"];

export function chooseColor() {
  return COLOR_CHOICES[Math.min(Math.floor(Math.random() * 5), 4)];
}