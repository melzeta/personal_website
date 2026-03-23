import React, { createContext, useContext, useEffect, useState } from 'react';

interface BlossomContextType {
  petalsEnabled: boolean;
  togglePetals: () => void;
}

const BlossomContext = createContext<BlossomContextType | undefined>(undefined);

export const BlossomProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [petalsEnabled, setPetalsEnabled] = useState(false);

  useEffect(() => {
    const savedSetting = localStorage.getItem('petalsEnabled');
    if (savedSetting) {
      setPetalsEnabled(savedSetting === 'true');
    }
  }, []);

  const togglePetals = () => {
    setPetalsEnabled((current) => {
      const next = !current;
      localStorage.setItem('petalsEnabled', String(next));
      return next;
    });
  };

  return (
    <BlossomContext.Provider value={{ petalsEnabled, togglePetals }}>
      {children}
    </BlossomContext.Provider>
  );
};

export const useBlossom = () => {
  const context = useContext(BlossomContext);
  if (context === undefined) {
    throw new Error('useBlossom must be used within a BlossomProvider');
  }
  return context;
};
