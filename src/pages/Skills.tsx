import React from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { useSound } from '../contexts/SoundContext';
import { useTheme } from '../contexts/ThemeContext';
import { skills } from '../data/skills';
import { personalInfo } from '../data/personal';

export const Skills: React.FC = () => {
  const navigate = useNavigate();
  const { playClick, playHover } = useSound();
  const { theme } = useTheme();

  const handleBack = () => {
    playClick();
    navigate('/');
  };

  const handleHover = () => {
    if (playHover && typeof playHover === 'function') {
      playHover();
    }
  };

  const groupedSkills = {
    language: skills.filter(s => s.category === 'language'),
    framework: skills.filter(s => s.category === 'framework'),
    'ml-robotics': skills.filter(s => s.category === 'ml-robotics'),
    other: skills.filter(s => s.category === 'other'),
  };

  const categoryLabels = {
    language: 'Programming Languages',
    framework: 'Frameworks & Libraries',
    'ml-robotics': 'ML & Robotics',
    other: 'Tools & Technologies',
  };

  const categoryColors = {
    language: 'var(--accent-primary)',
    framework: 'var(--accent-secondary)',
    'ml-robotics': 'var(--accent-tertiary)',
    other: 'var(--accent-primary)',
  };

  return (
    <div className="min-h-screen px-6 py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: 'var(--accent-secondary)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
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
              backgroundColor: 'var(--accent-secondary)',
              boxShadow: theme === 'night' ? 'var(--shadow-sm), 0 0 20px rgba(255, 216, 155, 0.3)' : 'var(--shadow-sm)',
            }}
          >
            <span style={{ color: 'var(--bg-primary)' }}>⚡ Skills</span>
          </div>
          
          <h1 
            className="mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Technical Profile
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            Languages, frameworks, tools, and methods referenced in the CV
          </p>
        </div>

        {/* Skills by category */}
        <div className="space-y-8">
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <div key={category}>
              <h2 className="mb-4" style={{ color: 'var(--text-primary)' }}>
                {categoryLabels[category as keyof typeof categoryLabels]}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {categorySkills.map((skill) => (
                  <div
                    key={skill.name}
                    onMouseEnter={handleHover}
                    className="group p-6 rounded-2xl text-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 cursor-default"
                    style={{
                      backgroundColor: 'var(--card-bg)',
                      boxShadow: 'var(--shadow-sm)',
                    }}
                  >
                    <div 
                      className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300"
                      style={{
                        filter: theme === 'night' ? 'drop-shadow(0 0 10px rgba(125, 211, 192, 0.5))' : 'none',
                      }}
                    >
                      {skill.icon}
                    </div>
                    <p className="text-sm" style={{ color: 'var(--text-primary)' }}>
                      {skill.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Fun fact card */}
        <div
          className="mt-12 p-8 rounded-3xl text-center"
          style={{
            backgroundColor: 'var(--card-bg)',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
            <em>{personalInfo.skillsFunFact}</em>
          </p>
        </div>
      </div>
    </div>
  );
};
