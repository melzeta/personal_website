import React from 'react';
import { Flower2, Slash } from 'lucide-react';
import { useBlossom } from '../contexts/BlossomContext';
import { useSound } from '../contexts/SoundContext';

export const PetalToggle: React.FC = () => {
  const { petalsEnabled, togglePetals } = useBlossom();
  const { playToggle } = useSound();

  const handleToggle = () => {
    playToggle();
    togglePetals();
  };

  return (
    <button
      onClick={handleToggle}
      className="fixed top-6 z-50 p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
      style={{
        right: '10.5rem',
        backgroundColor: 'var(--bg-card)',
        boxShadow: 'var(--shadow-md)',
      }}
      aria-label="Toggle cherry blossom petals"
    >
      <span className="relative block w-6 h-6">
        <Flower2
          className="w-6 h-6"
          style={{ color: 'var(--accent-primary)' }}
        />
        {!petalsEnabled && (
          <Slash
            className="w-6 h-6 absolute inset-0"
            style={{ color: 'var(--text-primary)' }}
          />
        )}
      </span>
    </button>
  );
};
