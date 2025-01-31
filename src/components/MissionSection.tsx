import { motion } from "framer-motion";
import { Play } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-secondary mb-8">Mission Statement</h2>
          <div className="relative">
            <div className="w-full h-full rounded-lg shadow-xl mb-8 overflow-hidden">
              <iframe
                width="100%"
                height="800"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Corporate Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
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