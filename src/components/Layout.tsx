import React from 'react';
import { Outlet } from 'react-router';
import { ThemeToggle } from './ThemeToggle';
import { SoundToggle } from './SoundToggle';
import { PetalToggle } from './PetalToggle';
import { Stars } from './Stars';
import { Petals } from './Petals';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
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
