import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">About Me</h2>
            <p className="text-gray-300">
              I'm Tushar Raj Choudhary, a Mechanical Engineering student and a passionate AI/ML and Full-Stack Developer focused on building scalable real-world products.
              I'm currently doing an internship at ServiceNow, where I work with modern platforms and enterprise-level technologies while learning to build high-quality, reliable systems.
              I'm also selected for the McKinsey Forward Program 2025, a global program focused on leadership, problem-solving, and analytical thinking.I love building impactful products — from SafeHire, a smart security-service platform, 
              to AI Finance Tracker using ML/NLP, to LogiTrack for telematics automation, and Tommy, a voice-activated AI assistant. I've also developed an IPO Analytics Platform with Django REST APIs and end-to-end workflows.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-400">Leadership & Experience</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Team Lead at Team Milemaster in SIH 2024</li>
                <li>• Coordinator at Techno Bharati 2024</li>
                <li>• Active participant in technical competitions and hackathons</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-400">Education</h3>
              <p className="text-gray-300">
                Bachelor of Technology in Mechanical Engineering<br />
                <span className="text-sm text-gray-400">Expected Graduation: 2026</span>
              </p>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="aspect-square rounded-lg overflow-hidden w-74 h-74 shadow-lg">
              <img
                src="/images/me photo.png"
                alt="Tushar Raj Choudhary"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500 rounded-lg -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;