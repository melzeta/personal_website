import React from 'react';
import { useNavigate } from 'react-router';
import { User, Code, Briefcase, Mail, Heart, Github, Linkedin } from 'lucide-react';
import { useSound } from '../contexts/SoundContext';
import { useTheme } from '../contexts/ThemeContext';
import { personalInfo } from '../data/personal';
import { TimeWidget } from '../components/TimeWidget';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const { playClick, playHover } = useSound();
  const { theme } = useTheme();
  const profileImageSrc = 'profile_picture/profile.png';

  const handleNavigation = (path: string) => {
    playClick();
    navigate(path);
  };

  const handleDownloadCV = () => {
    playClick();
    const link = document.createElement('a');
    link.href = personalInfo.cvFile.path;
    link.download = personalInfo.cvFile.filename;
    link.click();
  };

  const handleLetsWorkTogether = () => {
    playClick();
    navigate('/contact');
  };

  const handleHover = () => {
    if (playHover && typeof playHover === 'function') {
      playHover();
    }
  };

  const socialIcons = {
    GitHub: Github,
    LinkedIn: Linkedin,
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-5 py-6 lg:py-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: 'var(--accent-primary)' }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: 'var(--accent-tertiary)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Hero section */}
        <div className="mb-8 lg:mb-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-6 lg:gap-8 items-stretch">
            <div className="text-center lg:text-left">
              <div className="home-hero-title-row mb-3">
                <h1 
                  className="home-hero-title"
                  style={{ color: 'var(--text-primary)' }}
                >
                  <span className="home-hero-title-top">Hi, I'm</span>
                  <span className="home-hero-title-bottom">
                    <span>{personalInfo.name}</span>
                  </span>
                </h1>

                <span className="home-hero-profile-wrap">
                  <span className="home-hero-profile-ring">
                    <img
                      src={profileImageSrc}
                      alt={`${personalInfo.name} profile photo`}
                      className="home-hero-profile-image"
                    />
                  </span>
                </span>
              </div>
              
              <h2 
                className="mb-4 home-hero-subtitle"
                style={{ 
                  color: 'var(--text-primary)',
                }}
              >
                {personalInfo.title}
              </h2>

              <p 
                className="max-w-2xl mx-auto lg:mx-0 text-xl home-hero-tagline"
                style={{ color: 'var(--text-primary)' }}
              >
                {personalInfo.tagline}
              </p>

            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm space-y-4">
                <TimeWidget />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-6">
          <button
            onClick={() => handleNavigation('/about')}
            onMouseEnter={handleHover}
            className="group p-5 lg:p-6 rounded-3xl transition-all duration-300 hover:scale-105 active:scale-95 hover:-translate-y-1"
            style={{
              backgroundColor: 'var(--card-bg)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <div 
              className="w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300"
              style={{
                backgroundColor: 'var(--accent-primary)',
                boxShadow: theme === 'night' ? 'var(--shadow-sm), 0 0 20px rgba(125, 211, 192, 0.3)' : 'var(--shadow-sm)',
              }}
            >
              <User className="w-8 h-8" style={{ color: 'var(--bg-primary)' }} />
            </div>
            <h3 className="mb-2" style={{ color: 'var(--text-primary)' }}>About Me</h3>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Academic background, research, and professional experience
            </p>
          </button>

          <button
            onClick={() => handleNavigation('/skills')}
            onMouseEnter={handleHover}
            className="group p-5 lg:p-6 rounded-3xl transition-all duration-300 hover:scale-105 active:scale-95 hover:-translate-y-1"
            style={{
              backgroundColor: 'var(--card-bg)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <div 
              className="w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300"
              style={{
                backgroundColor: 'var(--accent-secondary)',
                boxShadow: theme === 'night' ? 'var(--shadow-sm), 0 0 20px rgba(255, 216, 155, 0.3)' : 'var(--shadow-sm)',
              }}
            >
              <Code className="w-8 h-8" style={{ color: 'var(--bg-primary)' }} />
            </div>
            <h3 className="mb-2" style={{ color: 'var(--text-primary)' }}>Skills</h3>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Technical strengths across ML, XR, and software engineering
            </p>
          </button>

          <button
            onClick={() => handleNavigation('/projects')}
            onMouseEnter={handleHover}
            className="group p-5 lg:p-6 rounded-3xl transition-all duration-300 hover:scale-105 active:scale-95 hover:-translate-y-1"
            style={{
              backgroundColor: 'var(--card-bg)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <div 
              className="w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300"
              style={{
                backgroundColor: 'var(--accent-tertiary)',
                boxShadow: theme === 'night' ? 'var(--shadow-sm), 0 0 20px rgba(186, 148, 255, 0.3)' : 'var(--shadow-sm)',
              }}
            >
              <Briefcase className="w-8 h-8" style={{ color: 'var(--text-primary)' }} />
            </div>
            <h3 className="mb-2" style={{ color: 'var(--text-primary)' }}>Projects</h3>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Research and applied technical work drawn from the CV
            </p>
          </button>

          <button
            onClick={handleLetsWorkTogether}
            onMouseEnter={handleHover}
            className="group p-5 lg:p-6 rounded-3xl transition-all duration-300 hover:scale-105 active:scale-95 hover:-translate-y-1"
            style={{
              backgroundColor: 'var(--card-bg)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <div 
              className="w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:rotate-12 transition-transform duration-300"
              style={{
                backgroundColor: 'var(--accent-primary)',
                boxShadow: theme === 'night' ? 'var(--shadow-sm), 0 0 20px rgba(125, 211, 192, 0.3)' : 'var(--shadow-sm)',
              }}
            >
              <Mail className="w-8 h-8" style={{ color: 'var(--bg-primary)' }} />
            </div>
            <h3 className="mb-2" style={{ color: 'var(--text-primary)' }}>Get In Touch</h3>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Contact me about research, academic, or professional collaboration.
            </p>
          </button>
        </div>

        <div className="flex justify-center gap-4">
          {personalInfo.social.map((social) => {
            const Icon = socialIcons[social.platform as keyof typeof socialIcons];
            if (!Icon) return null;
            return (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playClick()}
                className="p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
                style={{
                  backgroundColor: 'var(--card-bg)',
                  boxShadow: 'var(--shadow-sm)',
                  color: 'var(--text-primary)',
                }}
                aria-label={social.platform}
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}

          <button
            onClick={handleDownloadCV}
            className="p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
            style={{
              backgroundColor: 'var(--card-bg)',
              boxShadow: 'var(--shadow-sm)',
              color: 'var(--text-primary)',
            }}
            aria-label="Download CV"
          >
            <Heart className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
};
