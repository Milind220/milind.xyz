'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { FaMoon, FaSun } from 'react-icons/fa';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = storedTheme || (systemDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "h-9 w-9 rounded-lg flex items-center justify-center",
        "text-foreground hover:bg-accent/10 transition-colors",
        "border border-border hover:border-accent/30"
      )}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <FaSun className="h-4 w-4" />
      ) : (
        <FaMoon className="h-4 w-4" />
      )}
    </button>
  );
}
