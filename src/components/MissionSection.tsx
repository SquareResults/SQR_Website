import { motion } from "framer-motion";
import { Play } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-secondary mb-8">Mission Statement</h2>
          <div className="relative">
            <img
              src="/lovable-uploads/ff22ec66-2c1b-44d9-bf10-a30ecf286d97.png"
              alt="Team"
              className="w-full rounded-lg shadow-xl mb-8"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/90 p-4 rounded-full shadow-lg hover:bg-white transition-colors">
                <Play className="w-8 h-8 text-primary" />
              </button>
            </div>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            At SquareResults, our mission is to revolutionise talent acquisition by making job searching
            and hiring a swift, transparent, and empowering experience. We leverage cutting-edge
            technology and community-driven insights to eliminate inefficiencies, ensuring candidates
            feel confident and recruiters make smarter, faster hiring decisions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;