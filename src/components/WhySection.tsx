import { motion } from "framer-motion";
import styles from './WhySection.module.css';

const WhySection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-4xl text-[#1E3A8A] md:text-5xl font-bold text-secondary">
              PURPOSE <br />
              {/* <span className="text-[#1E3A8A]">PURPOSE</span> */}
            </h2>
            <p className="text-lg text-gray-600">
              SquareCircle is a dedicated community for Talent Acquisition (TA) professionals and HR leaders across industries. It’s built to address the biggest challenges in hiring—from sourcing top candidates to improving hiring strategies—by fostering meaningful discussions, sharing expert insights, and providing exclusive resources.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`relative p-4 bg-white rounded-2xl shadow-xl overflow-hidden ${styles['image-container']}`}
          >
              <img
                src="/images/why_sqr.png"
                alt="Team collaboration"
                className="w-full h-auto"
              />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;