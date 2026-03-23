// CUSTOMIZE: Add your projects here - you can also load this from a CSV if needed
export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  imageUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Reference-Free Typing in VR',
    description: 'Research project on biomechanical and deep learning methods for subject-independent keystroke prediction in VR, built with end-to-end training pipelines and high-volume motion capture data.',
    tech: ['Python', 'PyTorch', 'Pandas', 'NumPy', 'Unity'],
    githubUrl: '',
  },
  {
    id: 2,
    title: 'Green Campus Platform',
    description: 'Sustainability management platform with backend services and event-driven data flows for ingestion, transformation, and reporting, designed around PostgreSQL-compatible schemas and MQTT-based pipelines.',
    tech: ['Python', 'PostgreSQL', 'MQTT', 'Docker'],
    githubUrl: '',
  },
  {
    id: 3,
    title: 'Haptic Feedback Wristband Prototype',
    description: 'Prototype wristband integrating ergonomic 3D design, Arduino-based embedded firmware, Bluetooth connectivity, IMU sensing, and real-time haptic actuation.',
    tech: ['Fusion 360', 'Arduino', 'Bluetooth', 'IMU Sensors'],
    githubUrl: '',
  },
  {
    id: 4,
    title: 'Presentation and Editor Interfaces',
    description: 'At LapisAI Studio, developed a PowerPoint and Google Slides replica together with a Notion-like editor using modern React and TypeScript tooling for real-time interaction with backend services.',
    tech: ['React', 'TypeScript', 'Zustand', 'Recharts'],
    githubUrl: '',
  },
  {
    id: 5,
    title: 'Wastewater Filtration Optimisation',
    description: 'Engineering project combining microorganism and polymer analysis with a machine learning-based system to improve filtration control and optimise chemical dosage in wastewater treatment.',
    tech: ['Machine Learning', 'Data Analysis', 'Python', 'Engineering'],
    githubUrl: '',
  },
];
