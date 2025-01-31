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
              src="/lovable-uploads/9655dd67-72db-49f7-88b2-a0b84b8e81b8.png"
              alt="Team"
              className="w-full rounded-lg shadow-xl mb-8"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button 
                className="bg-white/90 p-4 rounded-full shadow-lg hover:bg-white transition-colors group"
                onClick={() => console.log("Play video clicked")}
              >
                <Play className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            At SquareResults, our mission is to revolutionize talent acquisition by making job searching
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