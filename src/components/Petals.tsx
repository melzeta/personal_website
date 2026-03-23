import React, { useEffect, useRef, useState } from 'react';
import { useBlossom } from '../contexts/BlossomContext';

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  drift: number;
  rotation: number;
  opacity: number;
}

export const Petals: React.FC = () => {
  const { petalsEnabled } = useBlossom();
  const [petals, setPetals] = useState<Petal[]>([]);
  const petalRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const generatedPetals: Petal[] = Array.from({ length: 38 }, (_, index) => ({
      id: index,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 12 + Math.random() * 10,
      size: 12 + Math.random() * 12,
      drift: (Math.random() - 0.5) * 120,
      rotation: Math.random() * 360,
      opacity: 0.25 + Math.random() * 0.3,
    }));

    setPetals(generatedPetals);
  }, []);

  useEffect(() => {
    if (!petalsEnabled) return;

    let animationFrame = 0;
    let mouseX = -9999;
    let mouseY = -9999;
    const influenceRadius = 220;
    const maxOffset = 24;

    const updatePetalOffsets = () => {
      petalRefs.current.forEach((petal) => {
        if (!petal) return;

        const rect = petal.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = mouseX - centerX;
        const dy = mouseY - centerY;
        const distance = Math.hypot(dx, dy);

        if (distance < influenceRadius) {
          const strength = (1 - distance / influenceRadius) ** 1.7;
          const offsetX = Math.max(-maxOffset, Math.min(maxOffset, dx * 0.22 * strength));
          const offsetY = Math.max(-maxOffset, Math.min(maxOffset, dy * 0.24 * strength));
          petal.style.setProperty('--petal-offset-x', `${offsetX}px`);
          petal.style.setProperty('--petal-offset-y', `${offsetY}px`);
        } else {
          petal.style.setProperty('--petal-offset-x', '0px');
          petal.style.setProperty('--petal-offset-y', '0px');
        }
      });

      animationFrame = window.requestAnimationFrame(updatePetalOffsets);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    animationFrame = window.requestAnimationFrame(updatePetalOffsets);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [petalsEnabled]);

  if (!petalsEnabled) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="absolute blossom-petal-shell"
          style={{
            left: `${petal.left}%`,
            top: '-10%',
            opacity: petal.opacity,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            ['--petal-drift' as string]: `${petal.drift}px`,
          }}
        >
          <span
            ref={(element) => {
              petalRefs.current[petal.id] = element;
            }}
            className="blossom-petal"
            style={{
              width: `${petal.size}px`,
              height: `${petal.size * 1.35}px`,
              ['--petal-rotation' as string]: `${petal.rotation}deg`,
            }}
          />
        </span>
      ))}
    </div>
  );
};
