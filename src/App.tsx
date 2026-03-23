import React from 'react';
import { RouterProvider } from 'react-router';
import { ThemeProvider } from './contexts/ThemeContext';
import { SoundProvider } from './contexts/SoundContext';
import { BlossomProvider } from './contexts/BlossomContext';
import { router } from './routes';

export default function App() {
  return (
    <ThemeProvider>
      <SoundProvider>
        <BlossomProvider>
          <RouterProvider router={router} />
        </BlossomProvider>
      </SoundProvider>
    </ThemeProvider>
  );
}
