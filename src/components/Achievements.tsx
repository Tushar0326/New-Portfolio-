import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const achievements = [
  {
    title: 'Winner at Pragnyan 2024',
    description: 'First place in the technical competition showcasing innovative solutions.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    title: 'Abhiyanta Karaandak 2024',
    description: 'Active participation and contribution in the prestigious engineering competition.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Coordinator – Techno Bharati 2025',
    description: 'Led the national-level technical fest at Bharat Vidyapeeth\'s College with 2000+ participants, managing 20+ events, logistics, and team coordination for seamless execution.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21h8M12 17v4m0-4c-2.21 0-4-1.79-4-4V5h8v8c0 2.21-1.79 4-4 4zM5 5h.01M19 5h.01M4 5a2 2 0 002 2h1V5H4zm16 0h-3v2h1a2 2 0 002-2z" />
      </svg>
    ),
  },
];

          

const AchievementCard = ({ achievement, index }: { achievement: typeof achievements[0]; index: number }) => {
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
      className="bg-gray-800 p-6 rounded-lg flex items-start space-x-4"
    >
      <div className="text-blue-400">{achievement.icon}</div>
      <div>
        <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
        <p className="text-gray-300">{achievement.description}</p>
      </div>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Achievements</h2>
          <p className="mt-4 text-gray-300">
            Recognition and accomplishments in my academic and professional journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.title} achievement={achievement} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 