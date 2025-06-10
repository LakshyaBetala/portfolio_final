"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Mail, Home, X } from "lucide-react"
import ParticleWeb from "@/components/particle-web"
import TypewriterText from "@/components/typewriter-text"
import FloatingProjectCard from "@/components/floating-project-card"
import SkillsCloud from "@/components/skills-cloud"
import TechCategoryCard from "@/components/tech-category-card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    name: "FindItRight",
    desc: "Connect startups to investors with AI-powered matching and smart-contract communication.",
    link: "https://github.com/LakshyaBetala/Find_it_right",
    tech: ["AI", "Blockchain", "React"],
  },
  {
    name: "Saarthi — Bharat",
    desc: "Voice-powered AI assistant to help visually impaired users with real-world navigation and interaction.",
    link: "https://github.com/LakshyaBetala/saarthi_final",
    tech: ["AI", "Voice", "Accessibility"],
  },
  {
    name: "GenAI ContentCrafter",
    desc: "Private, local GenAI tool for blogs, captions, summaries using GPT4All models — 100% offline.",
    link: "https://github.com/LakshyaBetala/GenAI_crafter",
    tech: ["GenAI", "Python", "Local"],
  },
]

const skills = [
  "Python",
  "TensorFlow",
  "CNN",
  "Scikit-learn",
  "React",
  "Next.js",
  "MongoDB",
  "Express.js",
  "Node.js",
  "PostgreSQL",
  "C++",
  "Java",
  "Git",
  "DBMS",
  "MERN",
  "Linux",
  "DSA",
  "OS",
]

const techCategories = [
  {
    title: "Python",
    icon: "🐍",
    skills: ["Python", "TensorFlow", "Scikit-learn", "Django", "FastAPI"],
    color: "from-green-400 to-blue-500",
    description: "Backend powerhouse & AI development",
  },
  {
    title: "React",
    icon: "⚛️",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind"],
    color: "from-blue-400 to-cyan-500",
    description: "Modern frontend experiences",
  },
  {
    title: "AI/ML",
    icon: "🤖",
    skills: ["TensorFlow", "CNN", "Scikit-learn", "PyTorch", "OpenCV"],
    color: "from-purple-400 to-pink-500",
    description: "Intelligent systems & automation",
  },
  {
    title: "IoT",
    icon: "📡",
    skills: ["Arduino", "Raspberry Pi", "MQTT", "Sensors", "Edge Computing"],
    color: "from-orange-400 to-red-500",
    description: "Connected devices & smart systems",
  },
  {
    title: "Web Dev",
    icon: "🌐",
    skills: ["MERN", "Node.js", "PostgreSQL", "MongoDB", "Express.js"],
    color: "from-teal-400 to-green-500",
    description: "Full-stack web applications",
  },
]

export default function Portfolio() {
  const [emailModalOpen, setEmailModalOpen] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [activeSection, setActiveSection] = useState("")
  const { scrollYProgress } = useScroll()
  const heroRef = useRef<HTMLDivElement>(null)

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleEmailClick = () => {
    setEmailModalOpen(true)
  }

  const handleGmailRedirect = () => {
    window.open(
      "mailto:lakshbetala15@gmail.com?subject=Hello%20Lakshya!&body=Hi%20Lakshya,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect!%0A%0ABest%20regards,",
      "_blank",
    )
    setEmailModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Enhanced Custom Cursor */}
      <motion.div
        className="fixed w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full pointer-events-none z-50 mix-blend-screen"
        style={{
          left: cursorPos.x - 12,
          top: cursorPos.y - 12,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Interactive Particle Web Background */}
      <motion.div className="fixed inset-0 z-0" style={{ y: backgroundY }}>
        <ParticleWeb />
      </motion.div>

      {/* Clean Background Overlay for Better Text Readability */}
      <div className="fixed inset-0 bg-gradient-to-br from-black/20 via-transparent to-black/20 z-5" />

      {/* Centered Social Bottom Navigation - Reordered */}
      <motion.div
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 flex gap-4 bg-gray-900/90 backdrop-blur-md border border-cyan-400/40 rounded-full px-8 py-4 shadow-2xl shadow-cyan-400/20"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        {[
          { icon: Home, href: "/", label: "Home", color: "hover:text-green-400" },
          { icon: Mail, onClick: handleEmailClick, label: "Email", color: "hover:text-red-400" },
          {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/lakshya-betala-662991326/",
            label: "LinkedIn",
            color: "hover:text-blue-400",
          },
          { icon: Github, href: "https://github.com/LakshyaBetala", label: "GitHub", color: "hover:text-purple-400" },
        ].map((social, index) => (
          <motion.div
            key={index}
            className="group relative"
            whileHover={{ scale: 1.3, y: -8 }}
            whileTap={{ scale: 0.9 }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 + index * 0.1 }}
          >
            <div
              className={`w-14 h-14 bg-transparent border-2 border-cyan-400/40 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:bg-cyan-400/20 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/50 group-hover:rotate-12`}
              onClick={social.onClick || (() => social.href && window.open(social.href, "_blank"))}
            >
              <social.icon className={`w-6 h-6 text-cyan-400 transition-colors ${social.color}`} />
            </div>
            <motion.div
              className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-gray-900/95 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-cyan-400/30"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1 }}
            >
              {social.label}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900/95" />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section - Centered */}
        <motion.section
          ref={heroRef}
          className="min-h-screen flex items-center justify-center px-6"
          style={{ y: heroY }}
        >
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <motion.span
                className="text-7xl inline-block"
                animate={{
                  rotate: [0, 14, -8, 14, -4, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 3,
                }}
              >
                👋
              </motion.span>
            </motion.div>

            <motion.h1
              className="text-7xl md:text-9xl font-bold mb-8 bg-gradient-to-r from-white via-cyan-400 to-white bg-clip-text text-transparent drop-shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hi, I'm Lakshya
            </motion.h1>

            <div className="text-2xl md:text-3xl text-gray-200 mb-12 h-20 drop-shadow-lg">
              <TypewriterText
                texts={["ML Enthusiast 🤖", "IoT Explorer 📡", "Web Dev Adventurer 🌐", "Innovation Catalyst ⚡"]}
              />
            </div>

            {/* Centered Profile Picture Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative mx-auto mb-12 group cursor-pointer flex justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-48 h-48 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full flex items-center justify-center text-6xl border-4 border-cyan-400/50 shadow-2xl shadow-cyan-400/50 relative overflow-hidden">
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-600/20"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                  }}
                />
                <span className="relative z-10">🚀</span>

                {/* Upload indicator */}
                <motion.div
                  className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">📸</div>
                    <div className="text-sm text-cyan-400 font-medium">Click to upload photo</div>
                  </div>
                </motion.div>
              </div>

              {/* Floating rings */}
              <motion.div
                className="absolute inset-0 border-2 border-cyan-400/30 rounded-full"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute inset-0 border border-blue-400/20 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </motion.div>

            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed drop-shadow-lg bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              From game dev dreams to AI systems, I'm a curious creator at heart. Building smarter ecosystems and
              turning ideas into impactful solutions.
            </motion.p>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section
          className="py-32 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              About Me
            </motion.h2>

            <motion.div
              className="bg-gray-900/60 backdrop-blur-md border border-cyan-400/30 rounded-3xl p-8 md:p-12 shadow-2xl shadow-cyan-400/10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-cyan-400 mb-4">The Journey</h3>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-lg text-gray-200 leading-relaxed mb-6">
                    As Head of Ops at Networking Nexus, I blend IoT and ML to build smarter ecosystems. From organizing
                    tech events at Aaruush to building AI-powered assistants and platforms, I love turning ideas into
                    impactful solutions.
                  </p>
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Currently pursuing B.Tech in Computer Science and Engineering at SRM Institute of Science and
                    Technology, with hands-on experience as a Project Intern at Samsung R&D.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: "🎯", label: "Problem Solver", desc: "Love tackling complex challenges" },
                    { icon: "🚀", label: "Innovation", desc: "Always exploring new tech" },
                    { icon: "🤝", label: "Team Player", desc: "Collaboration drives success" },
                    { icon: "📚", label: "Learner", desc: "Constantly growing & adapting" },
                  ].map((trait, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-4 text-center hover:border-cyan-400/50 transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -5 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-2xl mb-2">{trait.icon}</div>
                      <h4 className="font-semibold text-cyan-400 text-sm mb-1">{trait.label}</h4>
                      <p className="text-xs text-gray-400">{trait.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Work Experience Section */}
        <motion.section
          className="py-32 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Work Experience
            </motion.h2>

            <motion.div
              className="bg-gray-900/60 backdrop-blur-md border border-cyan-400/30 rounded-3xl p-8 md:p-12 shadow-2xl shadow-cyan-400/10"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="flex items-center gap-6 p-6 rounded-2xl hover:bg-cyan-400/10 transition-all duration-300 border border-transparent hover:border-cyan-400/30"
                whileHover={{ x: 10 }}
              >
                <motion.div
                  className="text-5xl"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  🔬
                </motion.div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold text-white">Project Intern</h3>
                    <motion.button
                      onClick={() =>
                        window.open(
                          "https://www.linkedin.com/company/samsungrndindiabangalore/posts/?feedView=all",
                          "_blank",
                        )
                      }
                      className="text-cyan-400 hover:text-white transition-colors p-2 rounded-full hover:bg-cyan-400/20"
                      whileHover={{ scale: 1.2, rotate: 15 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.button>
                  </div>
                  <h4 className="text-xl text-cyan-400 font-semibold mb-2">Samsung R&D Institute India</h4>
                  <p className="text-gray-300 mb-3">
                    Worked on real-world tech stacks and research-led development as part of a live innovation project.
                    Gained hands-on experience with cutting-edge technologies and industry best practices.
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400">2024</span>
                    <span className="px-3 py-1 bg-green-400/20 text-green-400 border border-green-400/30 rounded-full text-sm">
                      Completed
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* Education Timeline - Updated Dates */}
        <motion.section
          className="py-32 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Education Journey
            </motion.h2>

            <div className="space-y-8">
              {[
                {
                  institution: "SRM Institute of Science and Technology",
                  degree: "B.Tech in Computer Science and Engineering",
                  period: "2023 - 2027",
                  status: "Pursuing",
                  link: "https://www.linkedin.com/school/s.r.m.-institute-of-science-&-technology-chennai/",
                  logo: "🎓",
                  description: "Building strong foundations in CS fundamentals and emerging technologies",
                },
                {
                  institution: "Terapanth Jain Vidhyala",
                  degree: "High School",
                  period: "2019 - 2023",
                  status: "Completed",
                  link: null,
                  logo: "🏫",
                  description: "Foundation in Science and Mathematics with excellent academic performance",
                },
              ].map((edu, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900/60 backdrop-blur-md border border-cyan-400/30 rounded-2xl p-8 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-400/20 transition-all duration-300"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-center gap-6">
                    <motion.div
                      className="text-5xl"
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                        delay: index * 0.5,
                      }}
                    >
                      {edu.logo}
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-white">{edu.institution}</h3>
                        {edu.link && (
                          <motion.button
                            onClick={() => window.open(edu.link, "_blank")}
                            className="text-cyan-400 hover:text-white transition-colors p-2 rounded-full hover:bg-cyan-400/20"
                            whileHover={{ scale: 1.2, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Linkedin className="w-5 h-5" />
                          </motion.button>
                        )}
                      </div>
                      <p className="text-xl text-cyan-400 font-semibold mb-2">{edu.degree}</p>
                      <p className="text-gray-300 mb-3">{edu.description}</p>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-400">{edu.period}</span>
                        <span
                          className={`px-3 py-1 rounded-full text-sm border ${
                            edu.status === "Pursuing"
                              ? "bg-green-400/20 text-green-400 border-green-400/30"
                              : "bg-blue-400/20 text-blue-400 border-blue-400/30"
                          }`}
                        >
                          {edu.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Tech Categories */}
        <motion.section
          className="py-32 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Tech Arsenal
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techCategories.map((category, index) => (
                <TechCategoryCard key={index} category={category} delay={index * 0.2} />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Skills Cloud */}
        <motion.section
          className="py-32 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.h2
              className="text-5xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Skills Universe
            </motion.h2>
            <SkillsCloud skills={skills} />
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          className="py-32 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <FloatingProjectCard key={index} project={project} delay={index * 0.2} />
              ))}
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          className="py-16 px-6 text-center border-t border-gray-800/50 mb-32 bg-gray-900/30 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div className="max-w-2xl mx-auto" whileHover={{ scale: 1.02 }}>
            <p className="text-xl text-gray-300 mb-2">Built with ❤️ and lots of ☕ by Lakshya Betala</p>
            <p className="text-gray-500">© 2025 • Made to inspire and impress</p>
          </motion.div>
        </motion.footer>
      </div>

      {/* Email Modal */}
      <AnimatePresence>
        {emailModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setEmailModalOpen(false)}
          >
            <motion.div
              className="bg-white text-black rounded-2xl max-w-md w-full p-8 relative shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setEmailModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Compose Email</h3>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <label className="text-sm text-gray-600 font-medium">To:</label>
                  <p className="font-semibold text-lg">lakshbetala15@gmail.com</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600 font-medium">Subject:</label>
                  <p className="font-semibold">Hello Lakshya!</p>
                </div>
                <div>
                  <label className="text-sm text-gray-600 font-medium">Message:</label>
                  <p className="text-gray-700">Hi Lakshya, I came across your portfolio and would love to connect!</p>
                </div>
              </div>

              <Button
                onClick={handleGmailRedirect}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-3 text-lg font-semibold"
              >
                Open in Gmail
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
