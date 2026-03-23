import React from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Heart, Sparkles, Zap } from 'lucide-react';
import { useSound } from '../contexts/SoundContext';
import { useTheme } from '../contexts/ThemeContext';
import { personalInfo } from '../data/personal';

export const About: React.FC = () => {
  const navigate = useNavigate();
  const { playClick, playHover } = useSound();
  const { theme } = useTheme();

  const handleBack = () => {
    playClick();
    navigate('/');
  };

  const traitIcons = [Heart, Sparkles, Zap];
  const traitColors = ['var(--accent-primary)', 'var(--accent-secondary)', 'var(--accent-tertiary)'];
  const educationEntries = [
    {
      degree: personalInfo.education.degree,
      institution: personalInfo.education.institution,
      year: personalInfo.education.year,
    },
  ];

  const handleHover = () => {
    if (playHover && typeof playHover === 'function') {
      playHover();
    }
  };

  return (
    <div className="min-h-screen px-6 py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-20 right-10 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: 'var(--accent-primary)' }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Back button */}
        <button
          onClick={handleBack}
          className="mb-8 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
          style={{
            backgroundColor: 'var(--card-bg)',
            boxShadow: 'var(--shadow-md)',
            color: 'var(--text-primary)',
          }}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </button>

        {/* Header */}
        <div className="text-center mb-12">
          <div 
            className="inline-block px-6 py-2 rounded-full mb-6"
            style={{
              backgroundColor: 'var(--accent-primary)',
              boxShadow: theme === 'night' ? 'var(--shadow-sm), 0 0 20px rgba(125, 211, 192, 0.3)' : 'var(--shadow-sm)',
            }}
          >
            <span style={{ color: 'var(--bg-primary)' }}>👨‍💻 About</span>
          </div>
          
          <h1 
            className="mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Academic and Professional Profile
          </h1>
        </div>

        {/* Content cards */}
        <div className="space-y-6">
          {/* Main bio */}
          <div
            onMouseEnter={handleHover}
            className="p-8 rounded-3xl"
            style={{
              backgroundColor: 'var(--card-bg)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <h2 className="mb-4" style={{ color: 'var(--text-primary)' }}>
              Overview
            </h2>
            <p className="mb-4" style={{ color: 'var(--text-secondary)' }}>
              {personalInfo.bio.paragraph1}
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              {personalInfo.bio.paragraph2}
            </p>
          </div>

          {/* Interests grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {personalInfo.traits.map((trait, index) => {
              const Icon = traitIcons[index];
              const color = traitColors[index];
              
              return (
                <div
                  key={trait.title}
                  onMouseEnter={handleHover}
                  className="p-6 rounded-3xl text-center transition-all duration-300 hover:scale-105"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    boxShadow: 'var(--shadow-sm)',
                  }}
                >
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                    style={{
                      backgroundColor: color,
                      boxShadow: theme === 'night' ? `var(--shadow-sm), 0 0 15px ${color.replace('var(--accent-', 'rgba(').replace(')', ', 0.3)')}` : 'var(--shadow-sm)',
                    }}
                  >
                    <Icon className="w-8 h-8" style={{ color: 'var(--bg-primary)' }} />
                  </div>
                  <h3 className="mb-2" style={{ color: 'var(--text-primary)' }}>{trait.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    {trait.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Experience/Education section */}
          <div
            onMouseEnter={handleHover}
            className="p-8 rounded-3xl"
            style={{
              backgroundColor: 'var(--card-bg)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <h2 className="mb-6" style={{ color: 'var(--text-primary)' }}>
              Background
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2" style={{ color: 'var(--text-primary)' }}>
                  🎓 Education
                </h3>
                <ul className="space-y-3">
                  {educationEntries.map((edu) => (
                    <li key={edu.degree} className="pl-1">
                      <div className="flex items-center gap-2">
                        <span
                          className="inline-block w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: 'var(--accent-tertiary)' }}
                          aria-hidden="true"
                        />
                        <p style={{ color: 'var(--text-primary)' }}>{edu.degree}</p>
                      </div>
                      <div className="mt-1 pl-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                          {edu.institution}
                        </p>
                        <p className="text-sm sm:text-right" style={{ color: 'var(--text-secondary)' }}>
                          {edu.year}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="mb-2" style={{ color: 'var(--text-primary)' }}>
                  💼 Selected Experience
                </h3>
                <ul className="space-y-3">
                  {personalInfo.experience.map((exp) => (
                    <li key={`${exp.position}-${exp.company}`} className="pl-1">
                      <div className="flex items-center gap-2">
                        <span
                          className="inline-block w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: 'var(--accent-secondary)' }}
                          aria-hidden="true"
                        />
                        <p style={{ color: 'var(--text-primary)' }}>{exp.position}</p>
                      </div>
                      <div className="mt-1 pl-4 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                          {exp.company}
                        </p>
                        <p className="text-sm sm:text-right" style={{ color: 'var(--text-secondary)' }}>
                          {exp.period}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
