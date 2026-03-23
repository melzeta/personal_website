import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { personalInfo } from '../data/personal';

interface TimeWidgetProps {
  className?: string;
}

export const TimeWidget: React.FC<TimeWidgetProps> = ({ className = '' }) => {
  const { theme } = useTheme();
  const [myTime, setMyTime] = useState<Date>(new Date());
  const [yourTime, setYourTime] = useState<Date>(new Date());

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setYourTime(now);
      
      // Convert to my timezone
      const myTimezone = personalInfo.contact.timezone || 'Europe/London';
      const myTimeDate = new Date(now.toLocaleString('en-US', { timeZone: myTimezone }));
      setMyTime(myTimeDate);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date, timezone?: string) => {
    return new Intl.DateTimeFormat('en-GB', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
      timeZone: timezone,
    }).format(date);
  };

  const getTimezoneAbbr = (timezone?: string) => {
    if (!timezone) {
      const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (localTimezone === 'Europe/London') return 'GMT';
      return 'Local';
    }

    if (timezone === 'Europe/London') return 'GMT';
    if (timezone === 'Europe/Paris' || timezone === 'Europe/Rome' || timezone === 'Europe/Berlin') return 'CET';

    const parts = timezone.split('/');
    return parts[parts.length - 1].replace('_', ' ');
  };

  return (
    <div 
      className={`p-6 rounded-3xl ${className}`}
      style={{
        backgroundColor: 'var(--card-bg)',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      <div 
        className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
        style={{
          backgroundColor: 'var(--accent-primary)',
          boxShadow: theme === 'night' ? 'var(--shadow-sm), 0 0 20px rgba(125, 211, 192, 0.3)' : 'var(--shadow-sm)',
        }}
      >
        <Clock 
          className="w-7 h-7" 
          style={{ 
            color: 'var(--bg-primary)',
            filter: theme === 'night' ? 'drop-shadow(0 0 4px rgba(125, 211, 192, 0.25))' : 'none',
          }} 
        />
      </div>

      <div className="space-y-3">
        {/* My Time */}
        <div className="flex flex-col gap-1">
          <div 
            className="text-sm opacity-70"
            style={{ color: 'var(--text-secondary)' }}
          >
            My Time
          </div>
          <div 
            className="text-3xl font-bold"
            style={{ 
              color: 'var(--accent-primary)',
              filter: theme === 'night' ? 'drop-shadow(0 0 4px rgba(125, 211, 192, 0.3))' : 'none',
            }}
          >
            {formatTime(myTime, personalInfo.contact.timezone)}
          </div>
          <div 
            className="text-sm opacity-60"
            style={{ color: 'var(--text-secondary)' }}
          >
            {getTimezoneAbbr(personalInfo.contact.timezone)}
          </div>
        </div>

        {/* Divider */}
        <div 
          className="h-px my-2"
          style={{ 
            backgroundColor: theme === 'night' 
              ? 'rgba(125, 211, 192, 0.15)' 
              : 'rgba(168, 213, 186, 0.4)',
          }}
        />

        {/* Your Time */}
        <div className="flex flex-col gap-1">
          <div 
            className="text-sm opacity-70"
            style={{ color: 'var(--text-secondary)' }}
          >
            Your Time
          </div>
          <div 
            className="text-3xl font-bold"
            style={{ 
              color: 'var(--accent-tertiary)',
              filter: theme === 'night' ? 'drop-shadow(0 0 4px rgba(186, 148, 255, 0.3))' : 'none',
            }}
          >
            {formatTime(yourTime)}
          </div>
          <div 
            className="text-sm opacity-60"
            style={{ color: 'var(--text-secondary)' }}
          >
            {getTimezoneAbbr()}
          </div>
        </div>
      </div>
    </div>
  );
};
