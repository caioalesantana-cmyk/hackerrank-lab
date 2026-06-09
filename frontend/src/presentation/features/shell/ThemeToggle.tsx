import clsx from "clsx";
import { Moon, Sun } from "lucide-react";
import type { AppTheme } from "../../../domain/types/theme";
import { useThemeStore } from "../../../application/stores/themeStore";
import { Button, Icon } from "../../design-system";

const OPTIONS: { value: AppTheme; label: string; icon: typeof Sun }[] = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
];

export function ThemeToggle() {
  const theme = useThemeStore((s) => s.theme);
  const setTheme = useThemeStore((s) => s.setTheme);

  return (
    <div
      className="inline-flex rounded-panel border border-border0 bg-surfacePanel p-0.5"
      role="group"
      aria-label="Color theme"
    >
      {OPTIONS.map((option) => (
        <Button
          key={option.value}
          type="button"
          size="sm"
          variant={theme === option.value ? "primary" : "ghost"}
          className={clsx(
            "min-w-[4.75rem]",
            theme !== option.value && "text-text1",
          )}
          aria-pressed={theme === option.value}
          onClick={() => setTheme(option.value)}
        >
          <Icon icon={option.icon} size={16} />
          {option.label}
        </Button>
      ))}
    </div>
  );
}
