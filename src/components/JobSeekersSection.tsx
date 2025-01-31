import { motion } from "framer-motion";
import { FileText, Users, CheckCircle } from "lucide-react";

const features = [
  {
    title: "No More Black Holes",
    description: "Get real visibility and feedback on your applications.",
    image: "/lovable-uploads/04fcb239-ae7b-4912-bf19-01895ccf5011.png",
    icon: FileText
  },
  {
    title: "Smarter Job Matching",
    description: "Connect with roles that truly fit your skills and aspirations.",
    image: "/lovable-uploads/04fcb239-ae7b-4912-bf19-01895ccf5011.png",
    icon: Users
  },
  {
    title: "Transparent Hiring Process",
    description: "No ghosting, no false promises—just real opportunities.",
    image: "/lovable-uploads/04fcb239-ae7b-4912-bf19-01895ccf5011.png",
    icon: CheckCircle
  }
];

const JobSeekersSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-secondary mb-16"
        >
          For Job Seekers
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <feature.icon className="w-10 h-10 text-primary mb-4" />
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

export default JobSeekersSection;