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
  const [squish, setSquish] = useState(false);

  useEffect(() => {
    setTheme(getInitialTheme());
    setMounted(true);
  }, []);

  const apply = useCallback((next: "light" | "dark") => {
    const root = document.documentElement;
    if (next === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
  }, []);

  const toggle = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const next = theme === "light" ? "dark" : "light";
      setTheme(next);
      apply(next);

      // squish
      setSquish(true);
      window.setTimeout(() => setSquish(false), 110);

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
    [theme, apply],
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
      className={`theme-toggle relative inline-flex items-center shrink-0 rounded-full transition-transform duration-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CC0000] focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
        squish ? "scale-x-[0.88]" : "scale-x-100"
      } ${isDark ? "theme-toggle--dark" : "theme-toggle--light"}`}
      style={{ width: 64, height: 32 }}
    >
      <Sun
        className={`absolute left-2 h-4 w-4 transition-opacity duration-300 ${
          isDark ? "opacity-30 text-slate-300" : "opacity-100 text-amber-400"
        }`}
        style={!isDark ? { filter: "drop-shadow(0 0 4px rgba(250,204,21,0.7))" } : undefined}
        aria-hidden="true"
      />
      <Moon
        className={`absolute right-2 h-4 w-4 transition-opacity duration-300 ${
          isDark ? "opacity-100 text-white" : "opacity-30 text-slate-500"
        }`}
        style={isDark ? { filter: "drop-shadow(0 0 4px rgba(255,255,255,0.8))" } : undefined}
        aria-hidden="true"
      />
      <span
        className={`theme-toggle__knob ${isDark ? "theme-toggle__knob--dark" : "theme-toggle__knob--light"}`}
        style={{
          transform: `translateX(${isDark ? 34 : 2}px)`,
        }}
        aria-hidden="true"
      />
      {!mounted && <span className="sr-only">Loading theme</span>}
    </button>
  );
}
