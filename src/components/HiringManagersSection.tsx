import { motion } from "framer-motion";
import { Search, Clock, Users } from "lucide-react";

const features = [
  {
    title: "Access to Quality Talent",
    description: "AI-driven matching helps you find the right candidates faster.",
    image: "/images/quality_talent.png",
    icon: Search
  },
  {
    title: "Seamless Hiring Workflow",
    description: "Reduce time-to-hire with a structured and efficient process.",
    image: "/images/seamless_workflow.png",
    icon: Clock
  },
  {
    title: "Better Candidate Engagement",
    description: "Build real connections with top talent and avoid drop-offs.",
    image: "/images/candidate_engagement.png",
    icon: Users
  }
];

const HiringManagersSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-secondary mb-16"
        >
          For Hiring Managers
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <feature.icon className="w-10 h-10 text-[#4DCCE6] mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HiringManagersSection;