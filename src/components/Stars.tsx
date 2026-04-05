import React, { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
}

export const Stars: React.FC = () => {
  const { theme } = useTheme();
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate random stars for night mode
    const newStars: Star[] = Array.from({ length: 54 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 2,
    }));
    setStars(newStars);
  }, []);

  if (theme !== 'night') return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full sparkle"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            backgroundColor: 'var(--accent-secondary)',
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
};
