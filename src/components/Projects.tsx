import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useMemo } from 'react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  image: string;
  category: 'web' | 'ai' | 'mobile' | 'other';
}

const projects: Project[] = [
  {
    title: 'TripTrekker',
    description: 'A comprehensive travel planning and management application.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: '#',
    demo: '#',
    image: '/projects/triptrekker.jpg',
    category: 'web',
  },
  {
    title: 'Tommy: Voice-Activated Virtual Assistant',
    description: 'An AI-powered virtual assistant with voice recognition capabilities.',
    tech: ['Python', 'TensorFlow', 'Speech Recognition', 'NLP'],
    github: '#',
    demo: '#',
    image: '/projects/tommy.jpg',
    category: 'ai',
  },
  {
    title: 'LogiTrack: Telematics System',
    description: 'A fleet management and tracking system with real-time monitoring.',
    tech: ['Python', 'Django', 'PostgreSQL', 'WebSocket'],
    github: '#',
    demo: '#',
    image: '/projects/logitrack.jpg',
    category: 'web',
  },
  {
    title: 'IPO Web Application',
    description: 'A REST API-based application for IPO tracking and analysis.',
    tech: ['Django', 'PostgreSQL', 'REST API', 'React'],
    github: '#',
    demo: '#',
    image: '/projects/ipo-app.jpg',
    category: 'web',
  },
];

const categories = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web Development' },
  { id: 'ai', label: 'AI/ML' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'other', label: 'Other' },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 flex items-center"
            aria-label="View on GitHub"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 flex items-center"
              aria-label="View Live Demo"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') {
      return projects;
    }
    return projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Projects</h2>
          <p className="mt-4 text-gray-300">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 