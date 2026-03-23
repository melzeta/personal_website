// CUSTOMIZE: Add or remove skills as needed
export interface Skill {
  name: string;
  icon: string; // emoji or icon name
  category: 'language' | 'framework' | 'ml-robotics' | 'other';
}

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', icon: '🐍', category: 'language' },
  { name: 'JavaScript', icon: '✨', category: 'language' },
  { name: 'TypeScript', icon: '📘', category: 'language' },
  { name: 'SQL', icon: '🗃️', category: 'language' },
  { name: 'C#', icon: '⚙️', category: 'language' },
  
  // Frameworks
  { name: 'React', icon: '⚛️', category: 'framework' },
  { name: 'Zustand', icon: '🧩', category: 'framework' },
  { name: 'Redux Toolkit', icon: '🧠', category: 'framework' },
  { name: 'Flask', icon: '🌐', category: 'framework' },
  { name: 'Django', icon: '🛠️', category: 'framework' },
  { name: 'Flutter', icon: '📱', category: 'framework' },
  { name: 'Unity', icon: '🎮', category: 'framework' },
  
  // ML / Robotics
  { name: 'PyTorch', icon: '🔥', category: 'ml-robotics' },
  { name: 'TensorFlow', icon: '📈', category: 'ml-robotics' },
  { name: 'Scikit-learn', icon: '🧪', category: 'ml-robotics' },
  { name: 'Pandas', icon: '🐼', category: 'ml-robotics' },
  { name: 'NumPy', icon: '📊', category: 'ml-robotics' },
  { name: 'Arduino', icon: '🤖', category: 'ml-robotics' },
  
  // Other
  { name: 'Git', icon: '🔀', category: 'other' },
  { name: 'Docker', icon: '🐳', category: 'other' },
  { name: 'PostgreSQL', icon: '🐘', category: 'other' },
  { name: 'Linux', icon: '🐧', category: 'other' },
  { name: 'CI/CD', icon: '🔁', category: 'other' },
  { name: 'GitHub', icon: '🐙', category: 'other' },
  { name: 'HPC', icon: '🖥️', category: 'other' },
  { name: 'GCP Fundamentals', icon: '☁️', category: 'other' },
  { name: 'Package Management', icon: '📦', category: 'other' },
];
