import { useEffect, useState, useCallback } from "react";
import { Sun, Moon } from "lucide-react";

const STORAGE_KEY = "monopolymers-theme";

function getInitialTheme(): "light" | "dark" {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(getInitialTheme());
    setMounted(true);
  }, []);

  const toggle = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const next = theme === "light" ? "dark" : "light";
      setTheme(next);
      const root = document.documentElement;
      if (next === "dark") root.classList.add("dark");
      else root.classList.remove("dark");
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {}

      // ripple
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const ripple = document.createElement("span");
      ripple.className = "theme-ripple";
      ripple.style.left = `${rect.left + rect.width / 2}px`;
      ripple.style.top = `${rect.top + rect.height / 2}px`;
      ripple.style.background =
        next === "dark"
          ? "radial-gradient(circle, rgba(204,0,0,0.18) 0%, rgba(204,0,0,0.10) 40%, transparent 70%)"
          : "radial-gradient(circle, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.25) 40%, transparent 70%)";
      document.body.appendChild(ripple);
      window.setTimeout(() => ripple.remove(), 600);
    },
    [theme],
  );

  const isDark = theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
      className="theme-toggle relative inline-flex items-center justify-center shrink-0 h-9 w-9 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC0000] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      <Sun
        className={`h-5 w-5 text-amber-400 transition-opacity duration-300 ${isDark ? "opacity-0" : "opacity-100"}`}
        aria-hidden="true"
      />
      <Moon
        className={`absolute h-5 w-5 text-white transition-opacity duration-300 ${isDark ? "opacity-100" : "opacity-0"}`}
        aria-hidden="true"
      />
      {!mounted && <span className="sr-only">Loading theme</span>}
    </button>
  );
}
