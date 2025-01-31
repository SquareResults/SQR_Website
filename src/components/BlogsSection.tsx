import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";

const BlogsSection = () => {
  const blogs = [
    {
      title: "The Future of AI in Recruitment",
      excerpt: "Exploring how artificial intelligence is transforming the hiring process...",
      date: "March 15, 2024",
      author: "Sarah Johnson",
      category: "Technology"
    },
    {
      title: "Building Inclusive Hiring Practices",
      excerpt: "Best practices for creating diverse and inclusive recruitment strategies...",
      date: "March 12, 2024",
      author: "Michael Chen",
      category: "DEI"
    },
    {
      title: "Remote Hiring Success Stories",
      excerpt: "Case studies of successful remote recruitment and onboarding...",
      date: "March 10, 2024",
      author: "Emma Williams",
      category: "Remote Work"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-secondary mb-6">Blogs</h2>
          <p className="text-lg text-gray-600">Stay updated with the latest insights in recruitment and HR technology</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="text-sm text-primary font-semibold mb-2">{blog.category}</div>
                <h3 className="text-xl font-bold text-secondary mb-3">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{blog.date}</span>
                  <User className="w-4 h-4 ml-4 mr-2" />
                  <span>{blog.author}</span>
                </div>
                <button className="text-primary font-semibold flex items-center hover:text-primary-dark transition-colors">
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;