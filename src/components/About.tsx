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
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">About Me</h2>
            <p className="text-gray-300">
              I am a final-year Mechanical Engineering student with a passion for technology and innovation.
              My journey in software development began with Python, and I've since expanded my expertise
              to include web development, AI/ML, and various modern technologies.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-400">Leadership & Experience</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Team Lead at Team Milemaster</li>
                <li>• Coordinator at Techno Bharati</li>
                <li>• Active participant in technical competitions and hackathons</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-blue-400">Education</h3>
              <p className="text-gray-300">
                Bachelor of Technology in Mechanical Engineering<br />
                <span className="text-sm text-gray-400">Expected Graduation: 2024</span>
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="/profile-placeholder.jpg"
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