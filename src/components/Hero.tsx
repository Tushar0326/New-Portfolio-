import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Tushar Raj Choudhary
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-400 mb-6">
              Intern @ServiceNow X @Smartbridge | Former SDE Intern @Bluestock Fintech | McKinsey Forward Program 2025 
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              I'm Tushar Raj Choudhary, a Mechanical Engineering student and a passionate AI/ML and Full-Stack Developer focused on building scalable real-world products.
              I'm currently doing an internship at ServiceNow, where I work with modern platforms and enterprise-level technologies while learning to build high-quality, reliable systems
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                View Projects
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;