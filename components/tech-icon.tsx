"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface TechIconProps {
  name: string
  icon: string
  fact: string
  delay?: number
}

export default function TechIcon({ name, icon, fact, delay = 0 }: TechIconProps) {
  const [showFact, setShowFact] = useState(false)

  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1, y: -5 }}
      onHoverStart={() => setShowFact(true)}
      onHoverEnd={() => setShowFact(false)}
    >
      <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-4 text-center transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/50 group-hover:bg-cyan-400/10">
        <motion.div
          className="text-3xl mb-2"
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: delay,
          }}
        >
          {icon}
        </motion.div>
        <h3 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">{name}</h3>
      </div>

      {/* Fun Fact Tooltip */}
      <motion.div
        className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs whitespace-nowrap border border-cyan-400/50 shadow-lg shadow-cyan-400/20 z-20"
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{
          opacity: showFact ? 1 : 0,
          y: showFact ? 0 : 10,
          scale: showFact ? 1 : 0.8,
        }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: "none" }}
      >
        {fact}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
      </motion.div>
    </motion.div>
  )
}
