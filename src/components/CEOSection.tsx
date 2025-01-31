import { motion } from "framer-motion";

const CEOSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-secondary mb-6">Meet the CEO</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              With over two decades of experience in talent acquisition and HR technology, our CEO has been at the forefront of 
              revolutionizing how companies and candidates connect. Their vision for SquareResults stems from a deep understanding 
              of the challenges faced by both job seekers and recruiters in today's dynamic job market.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Under their leadership, SquareResults has grown from a startup to an industry leader, helping thousands of 
              professionals find their dream roles and enabling companies to build high-performing teams efficiently.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <img
              src="/lovable-uploads/f622e571-fce8-4a62-a95b-388c11b362fe.png"
              alt="Landscape"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CEOSection;