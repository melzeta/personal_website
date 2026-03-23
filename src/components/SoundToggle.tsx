import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useSound } from '../contexts/SoundContext';

export const SoundToggle: React.FC = () => {
  const { soundEnabled, toggleSound, playClick } = useSound();

  const handleToggle = () => {
    if (soundEnabled) {
      // Play sound before disabling
      playClick();
    }
    toggleSound();
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed top-6 right-24 z-50 p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
      style={{
        backgroundColor: 'var(--bg-card)',
        boxShadow: 'var(--shadow-md)',
      }}
      aria-label="Toggle sound"
    >
      {soundEnabled ? (
        <Volume2 className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
      ) : (
        <VolumeX className="w-6 h-6" style={{ color: 'var(--text-secondary)' }} />
      )}
    </button>
  );
};
