import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, Send, Mail, MapPin, Download, Heart } from 'lucide-react';
import { useSound } from '../contexts/SoundContext';
import { useTheme } from '../contexts/ThemeContext';
import { personalInfo } from '../data/personal';

export const Contact: React.FC = () => {
  const navigate = useNavigate();
  const { playClick, playHover } = useSound();
  const { theme } = useTheme();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleBack = () => {
    playClick();
    navigate('/');
  };

  const handleDownloadCV = () => {
    playClick();
    const link = document.createElement('a');
    link.href = personalInfo.cvFile.path;
    link.download = personalInfo.cvFile.filename;
    link.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleHover = () => {
    if (playHover && typeof playHover === 'function') {
      playHover();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    playClick();
    setIsSubmitting(true);

    // CUSTOMIZE: Implement your form submission logic here
    // For now, this is a mock submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen px-6 py-12 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: 'var(--accent-primary)' }}
        />
        <div 
          className="absolute bottom-20 right-10 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: 'var(--accent-tertiary)' }}
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
            <span style={{ color: 'var(--bg-primary)' }}>📧 Contact</span>
          </div>
          
          <h1 
            className="mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Contact Melissa
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>
            For research collaborations, speaking, internships, or professional opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact info cards */}
          <div className="space-y-4">
            <div
              onMouseEnter={handleHover}
              className="p-6 rounded-2xl flex items-start gap-4"
              style={{
                backgroundColor: 'var(--card-bg)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: 'var(--accent-primary)',
                  boxShadow: theme === 'night' ? 'var(--shadow-sm), 0 0 15px rgba(125, 211, 192, 0.3)' : 'var(--shadow-sm)',
                }}
              >
                <Mail className="w-5 h-5" style={{ color: 'var(--bg-primary)' }} />
              </div>
              <div>
                <h3 className="mb-1" style={{ color: 'var(--text-primary)' }}>Email</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {personalInfo.contact.email}
                </p>
              </div>
            </div>

            <div
              onMouseEnter={handleHover}
              className="p-6 rounded-2xl flex items-start gap-4"
              style={{
                backgroundColor: 'var(--card-bg)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: 'var(--accent-secondary)',
                  boxShadow: theme === 'night' ? 'var(--shadow-sm), 0 0 15px rgba(255, 216, 155, 0.3)' : 'var(--shadow-sm)',
                }}
              >
                <MapPin className="w-5 h-5" style={{ color: 'var(--bg-primary)' }} />
              </div>
              <div>
                <h3 className="mb-1" style={{ color: 'var(--text-primary)' }}>Location</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {personalInfo.contact.location}
                </p>
              </div>
            </div>

            <button
              onClick={handleDownloadCV}
              onMouseEnter={handleHover}
              className="w-full p-6 rounded-2xl flex items-start gap-4 text-left transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                backgroundColor: 'var(--card-bg)',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: 'var(--accent-secondary)',
                  boxShadow: theme === 'night' ? 'var(--shadow-sm), 0 0 15px rgba(255, 216, 155, 0.3)' : 'var(--shadow-sm)',
                }}
              >
                <Download className="w-5 h-5" style={{ color: 'var(--bg-primary)' }} />
              </div>
              <div className="flex-1">
                <h3 className="mb-1" style={{ color: 'var(--text-primary)' }}>Download CV</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Download my professional CV.
                </p>
              </div>
              <Heart className="w-5 h-5 mt-1" style={{ color: 'var(--accent-tertiary)' }} />
            </button>
          </div>

          {/* Contact form */}
          <div
            onMouseEnter={handleHover}
            className="p-8 rounded-3xl"
            style={{
              backgroundColor: 'var(--card-bg)',
              boxShadow: 'var(--shadow-md)',
            }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label 
                  htmlFor="name" 
                  className="block mb-2 text-sm"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    border: '2px solid transparent',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'transparent'}
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block mb-2 text-sm"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    border: '2px solid transparent',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'transparent'}
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block mb-2 text-sm"
                  style={{ color: 'var(--text-primary)' }}
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 resize-none"
                  style={{
                    backgroundColor: 'var(--bg-primary)',
                    color: 'var(--text-primary)',
                    border: '2px solid transparent',
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'transparent'}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: 'var(--accent-primary)',
                  color: 'var(--bg-primary)',
                  boxShadow: theme === 'night' ? 'var(--shadow-md), 0 0 20px rgba(125, 211, 192, 0.3)' : 'var(--shadow-md)',
                }}
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>

              {submitStatus === 'success' && (
                <div 
                  className="p-4 rounded-2xl text-center"
                  style={{
                    backgroundColor: 'var(--accent-primary)',
                    color: 'var(--bg-primary)',
                  }}
                >
                  ✨ Message sent successfully!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
