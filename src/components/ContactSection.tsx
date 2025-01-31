import { motion } from "framer-motion";
import { Phone, Mail, Facebook, Twitter, Instagram } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 bg-secondary text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-12 text-[#4DCCE6]"
        >
          Contact
        </motion.h2>

        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4"
          >
            <h3 className="text-xl font-semibold w-24">Phone</h3>
            <a href="tel:(123) 456-7890" className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2">
              <Phone className="w-5 h-5" />
              (123) 456-7890
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <h3 className="text-xl font-semibold w-24">Email</h3>
            <a href="mailto:hello@reallygreatsite.com" className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2">
              <Mail className="w-5 h-5" />
              hello@reallygreatsite.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <h3 className="text-xl font-semibold w-24">Social</h3>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;