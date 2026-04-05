import React from 'react';
import { Outlet } from 'react-router';
import { ThemeToggle } from './ThemeToggle';
import { SoundToggle } from './SoundToggle';
import { PetalToggle } from './PetalToggle';
import { Stars } from './Stars';
import { Petals } from './Petals';
import dayThemeBackground from '../../images_background/Day Theme.jpg';
import nightThemeBackground from '../../images_background/Night Theme.jpg';

export const Layout: React.FC = () => {
  return (
    <div className="relative isolate min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="theme-background" aria-hidden="true">
        <div
          className="theme-background-layer theme-background-day"
          style={{ backgroundImage: `url("${dayThemeBackground}")` }}
        />
        <div
          className="theme-background-layer theme-background-night"
          style={{ backgroundImage: `url("${nightThemeBackground}")` }}
        />
        <div className="theme-background-overlay" />
      </div>

      {/* Background stars for night mode */}
      <Stars />
      <Petals />
      
      {/* Theme, sound, and petals toggles */}
      <ThemeToggle />
      <SoundToggle />
      <PetalToggle />
      
      {/* Main content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};
