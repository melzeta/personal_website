import React from 'react';
import { Flower2 } from 'lucide-react';
import { useBlossom } from '../contexts/BlossomContext';
import { useSound } from '../contexts/SoundContext';

const Flower2OffIcon: React.FC<React.ComponentProps<'svg'>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1" />
    <circle cx="12" cy="8" r="2" />
    <path d="M12 10v12" />
    <path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z" />
    <path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z" />
    <path d="m3 3 18 18" />
  </svg>
);

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
        {petalsEnabled ? (
          <Flower2 className="w-6 h-6" style={{ color: 'var(--accent-primary)' }} />
        ) : (
          <Flower2OffIcon className="w-6 h-6" style={{ color: 'var(--text-secondary)' }} />
        )}
      </span>
    </button>
  );
};
