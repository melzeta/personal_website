import React, { createContext, useContext, useState, useCallback } from 'react';

interface SoundContextType {
  soundEnabled: boolean;
  toggleSound: () => void;
  playClick: () => void;
  playToggle: () => void;
  playSuccess: () => void;
  playHover: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [soundEnabled, setSoundEnabled] = useState(true);

  // Create simple sound effects using Web Audio API
  const playSound = useCallback((frequency: number, duration: number, type: OscillatorType = 'sine') => {
    if (!soundEnabled) return;
    
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = frequency;
      oscillator.type = type;
      
      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + duration);
    } catch (error) {
      console.log('Audio not supported');
    }
  }, [soundEnabled]);

  const playClick = useCallback(() => {
    playSound(800, 0.1, 'sine');
  }, [playSound]);

  const playToggle = useCallback(() => {
    playSound(600, 0.15, 'square');
    setTimeout(() => playSound(900, 0.1, 'sine'), 50);
  }, [playSound]);

  const playSuccess = useCallback(() => {
    playSound(600, 0.1, 'sine');
    setTimeout(() => playSound(800, 0.1, 'sine'), 100);
    setTimeout(() => playSound(1000, 0.15, 'sine'), 200);
  }, [playSound]);

  const playHover = useCallback(() => {
    playSound(500, 0.1, 'sine');
  }, [playSound]);

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound, playClick, playToggle, playSuccess, playHover }}>
      {children}
    </SoundContext.Provider>
  );
};

export const useSound = () => {
  const context = useContext(SoundContext);
  if (context === undefined) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
};