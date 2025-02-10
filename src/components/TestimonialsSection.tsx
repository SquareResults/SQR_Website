import { motion } from "framer-motion";
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    name: "Marcus J",
    review: "I needed a web portfolio that showcases my skills, achievements and projects in a clear and attractive way. That's why I chose SquareResults to create my personal website. They did an amazing job of designing and developing a responsive and user-friendly site that highlights my professional profile. I'm very impressed by their creativity, expertise and attention to detail. They also provided excellent support and guidance throughout the process. I highly recommend SquareResults to anyone looking for a web portfolio that stands out from the crowd.",
    position: "Economic Development Director"
  },
  {
    name: "Elnora C",
    review: "I am always looking for ways to showcase my work and attract new opportunities. That's why I chose SquareResults to create my Web Portfolio. They did an amazing job of designing a website that reflects my personality, style and vision. They also made it easy for me to update and manage my portfolio with their user-friendly platform. I am very happy with the results and I have received many compliments and inquiries from potential customers. Thank you, SquareResults, for helping me take my digital marketing career to the next level!",
    position: "Director of Digital Marketing"
  },
  {
    name: "Jean L",
    review: "I know how important it is to have a professional and attractive web portfolio that showcases my skills and achievements. That's why I chose SquareResults to create my web portfolio. They did an amazing job of designing a website that mirrors my personality and brand, as well as highlighting my accomplishments and projects. They were easy to work with, responsive to my feedback, and delivered the final product on time and within budget. I am very happy with the result and I have received many compliments on my web portfolio from colleagues, clients, and recruiters. I would highly recommend SquareResults to anyone looking for a web portfolio that stands out from the crowd.",
    position: "Director of Talent Acquisition"
  },
  {
    name: "Ken B",
    review: "I'm so happy with the web portfolio that SquareResults created for me. They really captured my personality and skills in a professional and engaging way. The design is sleek and modern, and the content is clear and concise. I've received many compliments from potential clients and employers who visited my site. SquareResults is the best choice for anyone who wants to showcase their talents online",
    position: "Student"
  },
  {
    name: "Oscar B",
    review: "I know how important it is to have a web portfolio that showcases my skills and achievements. That's why I hired SquareResults to create one for me. They did an amazing job of designing a website that reflects my background. They also made it easy for me to  provide updates and modifications with their user-friendly tools. I'm very happy with the result and I've received many compliments from my clients and colleagues. SquareResults is the best choice for anyone who wants a web portfolio.",
    position: "technology professional"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-32 bg-sky-200 text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl text-[#1E3A8A] font-bold text-center mb-16 font-antonio"
        >
          Read the reviews
        </motion.h2>

        <div className={`scroll-container ${styles['scroll-container']}`}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white text-black rounded-lg shadow-lg p-6 min-w-[400px] flex flex-col justify-between font-antonio" // Adjust min-width as needed
            >
              <div>
                <p className="text-lg mb-4">"{testimonial.review}"</p>
              </div>
              <p className="font-bold mt-auto">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.position}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;