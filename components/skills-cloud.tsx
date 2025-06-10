"use client"

import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"

interface SkillsCloudProps {
  skills: string[]
}

interface SkillPosition {
  x: number
  y: number
  vx: number
  vy: number
  scale: number
}

export default function SkillsCloud({ skills }: SkillsCloudProps) {
  const [positions, setPositions] = useState<SkillPosition[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    // Initialize positions with random velocities
    const initialPositions = skills.map(() => ({
      x: Math.random() * 80 + 10, // Keep within 10-90% of container
      y: Math.random() * 80 + 10,
      vx: (Math.random() - 0.5) * 0.3, // Slower velocity
      vy: (Math.random() - 0.5) * 0.3,
      scale: Math.random() * 0.4 + 0.8,
    }))
    setPositions(initialPositions)

    const animate = () => {
      setPositions((prev) =>
        prev.map((pos) => {
          let newX = pos.x + pos.vx
          let newY = pos.y + pos.vy
          let newVx = pos.vx
          let newVy = pos.vy

          // Bounce off boundaries with some padding
          if (newX <= 8 || newX >= 92) {
            newVx = -newVx * 0.8 // Add some damping
            newX = Math.max(8, Math.min(92, newX))
          }
          if (newY <= 8 || newY >= 92) {
            newVy = -newVy * 0.8
            newY = Math.max(8, Math.min(92, newY))
          }

          return {
            ...pos,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
          }
        }),
      )

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [skills])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] border-2 border-cyan-400/30 rounded-3xl bg-gray-900/40 backdrop-blur-md overflow-hidden shadow-2xl shadow-cyan-400/10"
    >
      {/* Enhanced grid background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(0,255,255,0.2) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(0,255,255,0.2) 1px, transparent 1px),
            linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "100px 100px, 100px 100px, 50px 50px, 50px 50px",
          }}
        />
      </div>

      {/* Floating energy orbs */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-cyan-400/30 rounded-full blur-sm"
          style={{
            left: `${20 + i * 10}%`,
            top: `${20 + i * 8}%`,
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 8 + i,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {skills.map((skill, index) => (
        <motion.div
          key={skill}
          className="absolute cursor-pointer"
          style={{
            left: `${positions[index]?.x || 50}%`,
            top: `${positions[index]?.y || 50}%`,
            transform: "translate(-50%, -50%)",
          }}
          animate={{
            scale: positions[index]?.scale || 1,
          }}
          whileHover={{
            scale: 1.5,
            zIndex: 10,
            transition: { duration: 0.2 },
          }}
          transition={{
            scale: { duration: 0.3 },
          }}
        >
          <motion.div
            className="px-4 py-2 bg-gradient-to-r from-cyan-400/40 to-blue-500/40 backdrop-blur-sm border-2 border-cyan-400/60 rounded-full text-cyan-100 font-semibold text-sm whitespace-nowrap hover:bg-cyan-400/60 hover:text-white hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-400/50 transition-all duration-300"
            animate={{
              rotate: [0, 3, -3, 0],
              borderColor: ["rgba(0,255,255,0.6)", "rgba(0,255,255,0.8)", "rgba(0,255,255,0.6)"],
            }}
            transition={{
              rotate: {
                duration: 4 + index * 0.3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              },
              borderColor: {
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
                delay: index * 0.1,
              },
            }}
          >
            {skill}
          </motion.div>
        </motion.div>
      ))}

      {/* Corner energy nodes */}
      {[
        { top: "1rem", left: "1rem" },
        { top: "1rem", right: "1rem" },
        { bottom: "1rem", left: "1rem" },
        { bottom: "1rem", right: "1rem" },
      ].map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
          style={pos}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Center energy pulse */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border-2 border-cyan-400/50 rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
