"use client";

import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/theme-switcher";

const navigationItems = [
  { name: "Experience", href: "#key-achievements" },
  { name: "Education", href: "#education" },
  { name: "CV", href: "#cv" },
];

export default function Navigation() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-center items-center relative">
          {/* Logo */}
          <div className="absolute left-0">
            <div className="text-2xl font-bold font-callestany text-zinc-800 dark:text-white flex items-center">
              <span>D</span>
              <span className="text-lg mx-[-2px]">O</span>
              <span className="ml-[-12px]">D</span>
            </div>
          </div>

          {/* Navigation Items - Centered */}
          <div className="flex space-x-8">
            {navigationItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-helixa"
              >
                {item.name}
              </Button>
            ))}
          </div>

          {/* Theme Switcher - Right side */}
          <div className="absolute right-0">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
}
