import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, ChevronLeft, ChevronRight, Github } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useSound } from '../contexts/SoundContext';
import { useTheme } from '../contexts/ThemeContext';
import { projects } from '../data/projects';

export const Projects: React.FC = () => {
  const navigate = useNavigate();
  const { playClick, playHover } = useSound();
  const { theme } = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    containScroll: 'trimSnaps',
    dragFree: false,
    loop: true,
  });

  const handleBack = () => {
    playClick();
    navigate('/');
  };

  const handleGithubClick = (url: string, e: React.MouseEvent) => {
    e.stopPropagation();
    playClick();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleHover = () => {
    if (playHover && typeof playHover === 'function') {
      playHover();
    }
  };

  const scrollPrev = () => {
    playClick();
    emblaApi?.scrollPrev();
  };

  const scrollNext = () => {
    playClick();
    emblaApi?.scrollNext();
  };

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="min-h-screen px-4 sm:px-6 py-6 lg:py-5 relative overflow-hidden flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-20 right-10 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: 'var(--accent-tertiary)' }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        {/* Back button */}
        <button
          onClick={handleBack}
          className="mb-5 px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
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
        <div className="text-center mb-6">
          <div 
            className="inline-block px-6 py-2 rounded-full mb-4"
            style={{
              backgroundColor: 'var(--accent-tertiary)',
              boxShadow: theme === 'night' ? 'var(--shadow-sm), 0 0 20px rgba(186, 148, 255, 0.3)' : 'var(--shadow-sm)',
            }}
          >
            <span style={{ color: 'var(--bg-primary)' }}>🚀 Projects</span>
          </div>
          
          <h1 
            className="mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Research and Technical Projects
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            A concise selection of research, engineering, and product work from the CV
          </p>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 z-10" style={{ background: 'linear-gradient(90deg, var(--bg-primary), transparent)' }} />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 z-10" style={{ background: 'linear-gradient(270deg, var(--bg-primary), transparent)' }} />

          <div ref={emblaRef} className="overflow-hidden px-1 sm:px-8">
            <div className="flex">
              {projects.map((project, index) => {
                const isActive = index === selectedIndex;

                return (
                  <div
                    key={project.id}
                    className="min-w-0 shrink-0 grow-0 basis-[86%] sm:basis-[68%] lg:basis-[48%] xl:basis-[42%] pl-4"
                  >
                    <div
                      onMouseEnter={handleHover}
                      className="group h-full transition-all duration-500"
                      style={{
                        transform: isActive ? 'scale(1)' : 'scale(0.88)',
                        opacity: isActive ? 1 : 0.45,
                      }}
                    >
                      <div
                        className="p-5 lg:p-6 rounded-3xl min-h-[330px] lg:min-h-[360px] flex flex-col justify-between"
                        style={{
                          backgroundColor: 'var(--card-bg)',
                          boxShadow: isActive ? 'var(--shadow-lg)' : 'var(--shadow-md)',
                          border: isActive ? '2px solid var(--accent-primary)' : '2px solid transparent',
                        }}
                      >
                        <div>
                          {/* Project header */}
                          <div className="flex items-start justify-between mb-4 gap-4">
                            <div>
                              <h2 
                                className="mb-2"
                                style={{ 
                                  color: 'var(--text-primary)',
                                  transform: isActive ? 'scale(1.05)' : 'scale(1)',
                                  transformOrigin: 'left center',
                                  transition: 'transform 0.35s ease',
                                }}
                              >
                                {project.title}
                              </h2>
                            </div>
                            {project.githubUrl && (
                              <button
                                onClick={(e) => handleGithubClick(project.githubUrl, e)}
                                className="p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
                                style={{
                                  backgroundColor: 'var(--accent-primary)',
                                  color: 'var(--bg-primary)',
                                  boxShadow: 'var(--shadow-sm)',
                                }}
                                aria-label="View on GitHub"
                              >
                                <Github className="w-5 h-5" />
                              </button>
                            )}
                          </div>

                          {/* Project description */}
                          <p 
                            className="mb-5"
                            style={{ color: 'var(--text-secondary)' }}
                          >
                            {project.description}
                          </p>
                        </div>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded-full text-sm"
                              style={{
                                backgroundColor: theme === 'night' 
                                  ? 'rgba(125, 211, 192, 0.2)' 
                                  : 'rgba(108, 183, 110, 0.2)',
                                color: 'var(--accent-primary)',
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-3">
            <button
              onClick={scrollPrev}
              className="p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
              style={{
                backgroundColor: 'var(--card-bg)',
                boxShadow: 'var(--shadow-md)',
                color: 'var(--text-primary)',
              }}
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => {
                    playClick();
                    emblaApi?.scrollTo(index);
                  }}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: index === selectedIndex ? '2.25rem' : '0.65rem',
                    height: '0.65rem',
                    backgroundColor: index === selectedIndex ? 'var(--accent-primary)' : 'rgba(113, 128, 150, 0.35)',
                  }}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="p-3 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
              style={{
                backgroundColor: 'var(--card-bg)',
                boxShadow: 'var(--shadow-md)',
                color: 'var(--text-primary)',
              }}
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
