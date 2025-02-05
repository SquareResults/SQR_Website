import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sky-200 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-300/20 to-sky-400/20" />
        <motion.div
          className="absolute inset-0 bg-[url('/images/dynamic_bg.svg')] animate-pulse opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      {/* Enhanced floating elements for dynamic effect */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-sky-900 rounded-full opacity-10 blur-lg"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.15, 1],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 30,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            Your one-stop
            <br />
            <span className="text-[#235B9C]">Hiring solution</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl text-[#235B9C] mb-12 max-w-2xl mx-auto"
          >
            Connecting job seekers and recruiters, the right way.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a href="https://theradarlist.com/" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="group relative px-8 py-3 bg-[#1E3A8A] text-white font-semibold rounded-full hover:shadow-lg hover:shadow-[#1E3A8A]/30 transition-all duration-200 transform overflow-hidden flex items-center"
              >
                <span className="relative z-10 group-hover:text-white">Job Seekers</span>
                <ChevronRight className="inline-block ml-2 w-5 h-5" />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#3B82F6] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-20 rounded-full pointer-events-none" />
              </motion.button>
            </a>
            <a href="https://squarecircle.group/" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="group relative px-8 py-3 bg-transparent text-[#1E3A8A] border-2 border-[#1E3A8A] rounded-full hover:bg-[#1E3A8A]/10 transition-colors duration-200 transform flex items-center"
              >
                <span className="relative z-10">Hiring Partners</span>
                <ChevronRight className="inline-block ml-2 w-5 h-5" />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#1E3A8A] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-20 rounded-full pointer-events-none" />
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Dynamic and engaging imagery */}
      <div className="absolute bottom-0 left-0 flex justify-start">
        <motion.img
          src="/images/interview.png"
          alt="Interview process"
          className="w-1/2 h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
        </div>
        <div className="absolute bottom-0 right-0 flex justify-end">
        <motion.img
          src="/images/job_vacancy.png"
          alt="Vacant position"
          className="w-1/4 h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
      </div>

      {/* Glowing effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#3B82F6]/10 to-transparent pointer-events-none" />
    </div>
  )
}

export default Hero
