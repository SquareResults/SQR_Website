import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className="min-h-screen flex #2596be relative overflow-hidden">
      <div className={`text-center ${styles['hero-background']}`}>
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r #2596be to-sky-400/20" />
        <motion.div
          className="absolute inset-0 bg-[url('/images/dynamic_bg.svg')] animate-pulse opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 py-60 relative z-10">
        <div className={`text-center ${styles['hero-text']}`}>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-10xl md:text-8xl font-bold mb-8 text-white"
          >
            <span className="text-white">Smart hiring</span>
            <br/>
            <span className="text-white">starts here.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl text-[#eeeee4] mb-12 max-w-xl mx-auto"
          >
            A thriving community of HR and TA professionals sharing insights, solving hiring challenges, and shaping the future of recruitment.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="https://theradarlist.com/" target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="group relative px-10 py-3 bg-white text-black font-semibold rounded-full hover:shadow-lg hover:shadow-[#1E3A8A]/30 transition-all duration-200 transform overflow-hidden flex items-center"
              >
                <span className="relative z-10 group-hover:text-black">Join</span>
                {/* <ChevronRight className="inline-block ml-2 w-5 h-5" /> */}
                {/* <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#3B82F6] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse" /> */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-20 rounded-full pointer-events-none" /> */}
              </motion.button>
            </a>
            {/* <a href="https://squarecircle.group/" target="_blank" rel="noopener noreferrer"> */}
              {/* <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="group relative px-8 py-3 bg-transparent text-[#1E3A8A] border-2 border-[#1E3A8A] rounded-full hover:bg-[#1E3A8A]/10 transition-colors duration-200 transform flex items-center"
              > */}
                {/* <span className="relative z-10">Hiring Partners</span> */}
                {/* <ChevronRight className="inline-block ml-2 w-5 h-5" /> */}
                {/* <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#1E3A8A] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-pulse" /> */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black opacity-20 rounded-full pointer-events-none" /> */}
              {/* </motion.button> */}
            {/* </a> */}
          </motion.div>
        </div>
      </div>

      {/* Dynamic and engaging imagery */}
      {/* <div className="absolute bottom-0 left-0 flex justify-start">
        <motion.img
          src="/images/interview.png"
          alt="Interview process"
          className="w-1/2 h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
        </div> */}
        {/* <div className="absolute bottom-0 right-0 flex justify-end">
        <motion.img
          src="/images/job_vacancy.png"
          alt="Vacant position"
          className="w-1/4 h-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
      </div> */}

      {/* Glowing effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#3B82F6]/10 to-transparent pointer-events-none" />
    </div>
    </div>
  )
}

export default Hero
