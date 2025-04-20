import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    title: 'SDE Intern',
    company: 'Bluestock Fintech',
    period: '2024 - Present',
    description: 'Working on modern web technologies including React, Express, and MongoDB.',
    skills: ['React', 'Express', 'MongoDB', 'Node.js'],
  },
  {
    title: 'Intern',
    company: 'MainFlow Service Technology',
    period: '2023',
    description: 'Developed and maintained web applications using React and Express.',
    skills: ['React', 'Express', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'Production Intern',
    company: 'Paralsons Enterprises',
    period: '2023',
    description: 'Gained hands-on experience in production processes and quality control.',
    skills: ['Production Management', 'Quality Control', 'Process Optimization'],
  },
];

const ExperienceCard = ({ experience, index }: { experience: typeof experiences[0]; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8 border-l-2 border-blue-500 last:border-l-0"
    >
      <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
      <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-bold text-white">{experience.title}</h3>
        <h4 className="text-blue-400 font-medium">{experience.company}</h4>
        <p className="text-gray-400 text-sm mb-2">{experience.period}</p>
        <p className="text-gray-300 mb-4">{experience.description}</p>
        <div className="flex flex-wrap gap-2">
          {experience.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-gray-700 text-white text-sm rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Experience</h2>
          <p className="mt-4 text-gray-300">
            My professional journey and internships in technology and engineering.
          </p>
        </div>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.company} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 