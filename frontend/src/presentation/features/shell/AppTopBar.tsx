import { Container } from "./Container";
import { ThemeToggle } from "./ThemeToggle";

export function AppTopBar() {
  return (
    <div className="sticky top-0 z-50 border-b border-border0 bg-glassFillStrong backdrop-blur-[var(--blur-2)]">
      <Container className="flex h-12 items-center justify-between gap-3">
        <span className="truncate text-meta font-semibold text-text0">Hackerrank Study</span>
        <ThemeToggle />
      </Container>
    </div>
  );
}
