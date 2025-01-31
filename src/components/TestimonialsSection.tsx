import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
    author: "Ingrid Correa",
    stars: 5
  },
  {
    quote: "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
    author: "Hilford Press",
    stars: 5
  },
  {
    quote: "Testimonials are short quotes from people who love your brand. It's a great way to convince customers to try your services.",
    author: "Daichi Hamada",
    stars: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-primary-dark text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Read the reviews
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-colors"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg mb-4">{testimonial.quote}</blockquote>
              <cite className="text-primary-light font-medium">{testimonial.author}</cite>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;