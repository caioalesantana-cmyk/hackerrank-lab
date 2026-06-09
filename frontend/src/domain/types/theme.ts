export type AppTheme = "light" | "dark";

export const APP_THEMES: AppTheme[] = ["light", "dark"];

export function isAppTheme(value: unknown): value is AppTheme {
  return value === "light" || value === "dark";
}
