"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface TechCategory {
  title: string
  icon: string
  skills: string[]
  color: string
  description: string
}

interface TechCategoryCardProps {
  category: TechCategory
  delay?: number
}

export default function TechCategoryCard({ category, delay = 0 }: TechCategoryCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="bg-gray-900/60 backdrop-blur-md border border-cyan-400/30 rounded-2xl p-6 h-full transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-2xl group-hover:shadow-cyan-400/20 relative overflow-hidden">
        {/* Animated background gradient */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
          animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              className="text-4xl"
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: delay,
              }}
            >
              {category.icon}
            </motion.div>
            <div>
              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                {category.title}
              </h3>
              <p className="text-gray-400 text-sm">{category.description}</p>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-2">
            {category.skills.map((skill, index) => (
              <motion.div
                key={skill}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-cyan-400/10 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-2 h-2 bg-cyan-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: index * 0.2,
                  }}
                />
                <span className="text-gray-300 group-hover:text-white transition-colors">{skill}</span>
              </motion.div>
            ))}
          </div>

          {/* Progress indicator */}
          <motion.div
            className="mt-4 h-1 bg-gray-700 rounded-full overflow-hidden"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ delay: delay + 0.5, duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
              initial={{ width: "0%" }}
              whileInView={{ width: "85%" }}
              transition={{ delay: delay + 0.7, duration: 1.5 }}
              viewport={{ once: true }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
