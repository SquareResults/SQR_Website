import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl font-extrabold text-[#081321] mb-8">About Us</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At SquareResults, we are redefining the future of talent acquisition and job searching. Our ecosystem
              —SquareTop, SquareCircle, and RADAR—creates a seamless, engaging, and empowering experience for
              both candidates and recruiters. We eliminate the frustration of traditional hiring processes with AI-driven 
              insights, smart automation, and community-driven support. Whether you're a job seeker looking for confidence 
              and clarity in your career journey or a recruiter aiming for smarter, more efficient hiring, SquareResults 
              provides the tools, transparency, and technology to make it happen.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src="/lovable-uploads/b94539dd-e762-460f-a9a4-0619f921778b.png"
              alt="About Illustration"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;