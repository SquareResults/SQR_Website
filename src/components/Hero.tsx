import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#235B9C]/20 to-[#45B5B5]/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmZmZmMDUiPjwvcmVjdD4KPHBhdGggZD0iTTAgNUw1IDBaTTYgNEw0IDZaTS0xIDFMMSAtMVoiIHN0cm9rZT0iI2ZmZmZmZjEwIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD4KPC9zdmc+')] opacity-20" />
      </div>

      {/* Floating elements matching logo colors */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-16 h-16 bg-[#9CCB48] rounded-full opacity-10 blur-sm"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-[#4DCCE6] rounded-full opacity-10 blur-sm"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 20,
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
            <span className="text-[#4DCCE6]">Hiring solution</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            Connecting job seekers and recruiters, the right way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="group px-8 py-3 bg-[#4DCCE6] text-black font-semibold rounded-full hover:shadow-lg hover:shadow-[#4DCCE6]/30 transition-all duration-200 transform hover:scale-105 relative overflow-hidden">
              <span className="relative z-10 group-hover:text-white">Job Seekers</span>
              <span className="absolute inset-0 bg-[#235B9C] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <ChevronRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="group px-8 py-3 bg-transparent text-[#4DCCE6] border-2 border-[#4DCCE6] rounded-full hover:bg-[#4DCCE6]/10 transition-colors duration-200 transform hover:scale-105">
              <span className="relative z-10">Hiring Partners</span>
              <ChevronRight className="inline-block ml-2 w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Glowing effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#4DCCE6]/5 to-transparent pointer-events-none" />
    </div>
  )
}

export default Hero

