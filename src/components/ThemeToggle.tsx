import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useSound } from '../contexts/SoundContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { playToggle } = useSound();

  const handleToggle = () => {
    playToggle();
    toggleTheme();
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed top-6 right-6 z-50 p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
      style={{
        backgroundColor: 'var(--bg-card)',
        boxShadow: 'var(--shadow-md)',
      }}
      aria-label="Toggle theme"
    >
      {theme === 'day' ? (
        <Moon className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
      ) : (
        <Sun className="w-6 h-6 glow-pulse" style={{ color: 'var(--accent-secondary)' }} />
      )}
    </button>
  );
};
