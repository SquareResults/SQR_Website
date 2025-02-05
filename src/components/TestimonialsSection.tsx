import { motion } from "framer-motion";

const testimonials = [
  {
    name: "John Doe",
    review: "SquareResults has transformed our hiring process. The AI-driven insights are invaluable.",
    position: "HR Manager"
  },
  {
    name: "Jane Smith",
    review: "The platform is user-friendly and has significantly reduced our time-to-hire.",
    position: "Recruitment Specialist"
  },
  {
    name: "Michael Johnson",
    review: "We have found top talent quickly and efficiently thanks to SquareResults.",
    position: "Talent Acquisition Lead"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-sky-200 text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl text-[#1E3A8A] font-bold text-center mb-16"
        >
          Read the reviews
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white text-black rounded-lg shadow-lg p-6"
            >
              <p className="text-lg mb-4">"{testimonial.review}"</p>
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.position}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;