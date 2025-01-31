import { motion } from "framer-motion";
import { ArrowRight, Users, Target, Clock } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            About <span className="text-primary">SquareResults</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Revolutionizing the hiring process through innovation and technology
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Users,
              title: "Expert Team",
              description: "Industry veterans with decades of combined experience"
            },
            {
              icon: Target,
              title: "Precision Matching",
              description: "AI-powered algorithms for perfect candidate-job fits"
            },
            {
              icon: Clock,
              title: "Fast Results",
              description: "Reduce hiring time by up to 60% with our platform"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <item.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-primary/5 rounded-2xl p-8 md:p-12"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              To transform the recruitment landscape by connecting the right talent with the right opportunities, 
              creating lasting professional relationships that drive success for both companies and candidates.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-dark transition-colors"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;