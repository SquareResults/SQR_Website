import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-transparent">
      <div className="container mx-auto px-6 py-24">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold text-secondary mb-6"
          >
            Your one-stop
            <br />
            <span className="text-primary">Hiring solution</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            Connecting job seekers and recruiters, the right way.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors duration-200 transform hover:scale-105">
              Job Seekers
            </button>
            <button className="px-8 py-3 bg-white text-primary border-2 border-primary rounded-full hover:bg-primary/5 transition-colors duration-200 transform hover:scale-105">
              Hiring Partners
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;