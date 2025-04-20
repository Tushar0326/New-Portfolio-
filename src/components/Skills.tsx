import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'JavaScript', 'HTML/CSS', 'TypeScript'],
  },
  {
    title: 'Frameworks',
    skills: ['Django', 'React', 'Express', 'Node.js'],
  },
  {
    title: 'Tools',
    skills: ['Git', 'Postman', 'Vite', 'MongoDB', 'PostgreSQL'],
  },
  {
    title: 'Concepts',
    skills: ['REST APIs', 'AI/ML basics', 'Web Development', 'Database Design'],
  },
];

const SkillCard = ({ category, index }: { category: typeof skillCategories[0]; index: number }) => {
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
      className="bg-gray-800 p-6 rounded-lg"
    >
      <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Skills & Tools</h2>
          <p className="mt-4 text-gray-300">
            My technical expertise and the tools I use to bring ideas to life.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 