import { motion } from "framer-motion";

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
            <h2 className="text-4xl md:text-5xl font-bold text-secondary">
              WHY <br />
              <span className="text-primary">SQUARERESULTS?</span>
            </h2>
            <p className="text-lg text-gray-600">
              SquareResults is revolutionising the hiring process by creating an ecosystem that
              bridges the gaps in recruitment. We eliminate the chaos, improve
              transparency, and prioritise human connections—ensuring job seekers find
              real opportunities and recruiters discover the best talent, faster.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src="/lovable-uploads/9c68146b-3348-46d8-aabc-2cf248041ea6.png"
              alt="Team collaboration"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;