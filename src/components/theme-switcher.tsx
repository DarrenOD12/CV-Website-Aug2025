"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const ICON_SIZE = 16;

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="text-foreground hover:text-primary transition-colors duration-300 font-helixa flex items-center gap-2"
    >
      {theme === "dark" ? (
        <>
          <Sun size={ICON_SIZE} className="text-muted-foreground" />
          <span className="hidden sm:inline">Switch to Light Mode</span>
        </>
      ) : (
        <>
          <Moon size={ICON_SIZE} className="text-muted-foreground" />
          <span className="hidden sm:inline">Switch to Dark Mode</span>
        </>
      )}
    </Button>
  );
};

export { ThemeSwitcher };
