"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  name: string
  desc: string
  link: string
  tech: string[]
}

interface FloatingProjectCardProps {
  project: Project
  delay?: number
}

export default function FloatingProjectCard({ project, delay = 0 }: FloatingProjectCardProps) {
  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        rotateX: 5,
        rotateY: 5,
        scale: 1.02,
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-400/30 rounded-xl p-6 h-full transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-2xl group-hover:shadow-cyan-400/20 relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Floating animation */}
        <motion.div
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="relative z-10"
        >
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{project.name}</h3>
            <motion.div
              whileHover={{ rotate: 45, scale: 1.1 }}
              className="text-cyan-400 opacity-70 group-hover:opacity-100 transition-opacity"
            >
              <ExternalLink className="w-5 h-5" />
            </motion.div>
          </div>

          <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.desc}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, index) => (
              <motion.span
                key={index}
                className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs rounded-full border border-cyan-400/30"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: delay + index * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <Button
            onClick={() => window.open(project.link, "_blank")}
            className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-black font-medium transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-400/50"
          >
            <Github className="w-4 h-4 mr-2" />
            View Project
          </Button>
        </motion.div>
      </div>
    </motion.div>
  )
}
