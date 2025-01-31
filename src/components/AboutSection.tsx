import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#f0f4f8] to-[#d9e2ec]">
      <div className="container mx-auto px-6">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
        <h2 className="text-4xl font-bold text-[#081321] mb-8">About Us</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          At SquareResults, we are redefining the future of talent acquisition and job searching. Our ecosystem
          —SquareTop, SquareCircle, and RADAR—creates a seamless, engaging, and empowering experience for
          both candidates and recruiters. We eliminate the frustration of traditional hiring processes with AI-driven 
          insights, smart automation, and community-driven support. Whether you're a job seeker looking for confidence 
          and clarity in your career journey or a recruiter aiming for smarter, more efficient hiring, SquareResults 
          provides the tools, transparency, and technology to make it happen.
        </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;