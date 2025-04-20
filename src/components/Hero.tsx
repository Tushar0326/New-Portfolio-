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
              Mechanical Engineering Student | AI & Python Enthusiast | Tech Innovator
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Passionate about technology, software development, and innovative engineering solutions.
              Currently exploring the intersection of mechanical engineering and artificial intelligence.
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