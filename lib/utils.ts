export const COLOR_CHOICES = ["primary", "secondary", "success", "warning", "danger"];

export function chooseColor(): "primary" | "secondary" | "success" | "warning" | "danger" {
  // this is necessary because typescript is very particular >:(
  const index = Math.min(Math.floor(Math.random() * 5), 4);
  switch (index) {
    case 0: return "primary";
    case 1: return "secondary";
    case 2: return "success";
    case 3: return "warning";
    case 4: return "danger";
    default: return "primary";
  }
}