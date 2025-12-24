/**
 * PROJECTS SECTION - Integrated Component for YEET One-Page App
 * Adapted from standalone ProjectsPage.tsx
 */

"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Archive, Menu, X, ExternalLink } from "lucide-react"

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface ClientProject {
  id: string
  title: string
  company: string
  category: string
  image: string
  description: string
  technologies: string[]
  link?: string
  industry: string
}

interface Card {
  id: number
  contentType: number
}

// ============================================================================
// DATA - Client Projects
// ============================================================================

const clientProjects: ClientProject[] = [
  {
    id: 'paypro',
    title: 'Next-Gen Payment Processing Platform',
    company: 'PayPro',
    category: 'Fintech',
    industry: 'Financial Services',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    description: 'A comprehensive payment processing ecosystem that streamlines transactions for businesses of all sizes, from startups to enterprise organizations.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'AWS', 'Stripe', 'Kubernetes', 'GraphQL'],
    link: 'https://paypro.com'
  },
  {
    id: 'beehive',
    title: 'Smart Equipment Rental Management System',
    company: 'BeeHive Rental & Sales',
    category: 'SaaS',
    industry: 'Construction & Equipment',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
    description: 'An intelligent rental management platform that transforms how construction equipment companies track inventory, manage bookings, and optimize fleet utilization.',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'Mapbox', 'Stripe', 'Vercel'],
    link: 'https://beehiverentalandsales.com'
  },
  {
    id: 'haestus',
    title: 'AI-Powered Consulting Platform',
    company: 'Haestus',
    category: 'AI Consulting',
    industry: 'Technology Services',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    description: 'A strategic consulting firm specializing in AI transformation, helping businesses integrate cutting-edge AI capabilities to gain competitive advantage and drive measurable results.',
    technologies: ['React', 'Three.js', 'Claude AI', 'Python', 'TensorFlow', 'FastAPI', 'Vercel', 'Framer Motion'],
    link: 'https://haestus.dev'
  },
  {
    id: 'promptlee',
    title: 'AI Prompt Engineering Workspace',
    company: 'Promptlee',
    category: 'AI Tools',
    industry: 'Developer Tools',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80',
    description: 'A collaborative workspace for teams to design, test, version, and deploy AI prompts at scale, with built-in best practices and performance analytics.',
    technologies: ['React', 'TypeScript', 'Monaco Editor', 'OpenAI', 'Anthropic', 'Supabase', 'Next.js', 'Tailwind'],
    link: 'https://promptlee.com'
  },
  {
    id: 'cbsc',
    title: 'Commercial Cleaning Operations Platform',
    company: 'CBSC Screen Cleaners',
    category: 'Service Management',
    industry: 'Commercial Services',
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    description: 'A mobile-first operations platform that coordinates field teams, automates scheduling, and delivers exceptional customer experiences for commercial screen cleaning services.',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'Google Maps API', 'Twilio', 'Stripe', 'AWS', 'WebSockets'],
    link: 'https://cbscscreen.com'
  }
]

// ============================================================================
// COMPONENT - Client Project Modal
// ============================================================================

interface ClientProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: ClientProject | null
}

function ClientProjectModal({ isOpen, onClose, project }: ClientProjectModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200]"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-0 z-[201] flex items-center justify-center p-4"
            onClick={onClose}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl"
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-10"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="relative aspect-video md:aspect-square rounded-xl overflow-hidden bg-white/5 border border-white/10"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      {project.title}
                    </h3>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        About
                      </h4>
                      <p className="text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                        Technologies
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors group"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

// ============================================================================
// COMPONENT - Card Content
// ============================================================================

function CardContent({
  contentType,
  onReadClick,
}: {
  contentType: number
  onReadClick: () => void
}) {
  const project = clientProjects[contentType % clientProjects.length]

  return (
    <div
      className="flex h-full w-full flex-col gap-4 cursor-pointer"
      onClick={onReadClick}
    >
      <div className="relative -outline-offset-1 flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg outline outline-white/10">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full select-none object-cover"
        />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black shadow-sm">
            {project.category}
          </span>
        </div>
        <div className="absolute right-3 top-3">
          <span className="rounded-full bg-black/80 px-2.5 py-1 text-xs font-medium text-white shadow-sm backdrop-blur-sm">
            {project.company}
          </span>
        </div>
      </div>
      <div className="flex w-full items-center justify-between gap-2 px-3 pb-6">
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate font-semibold text-white">{project.title}</span>
          <span className="text-sm text-gray-400">{project.industry}</span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onReadClick()
          }}
          className="flex h-10 shrink-0 cursor-pointer select-none items-center gap-0.5 rounded-full bg-white pl-4 pr-3 text-sm font-medium text-black transition-transform hover:scale-105 hover:bg-gray-100 active:scale-95"
        >
          Website
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="square"
          >
            <path d="M9.5 18L15.5 12L9.5 6" />
          </svg>
        </button>
      </div>
    </div>
  )
}

// ============================================================================
// COMPONENT - Animated Card
// ============================================================================

const initialCards: Card[] = [
  { id: 1, contentType: 0 },
  { id: 2, contentType: 1 },
  { id: 3, contentType: 2 },
]

const positionStyles = [
  { scale: 1, y: 0 },
  { scale: 0.95, y: -30 },
  { scale: 0.9, y: -60 },
]

const exitAnimation = {
  y: 450,
  scale: 1.05,
  opacity: 1,
}

const enterAnimation = {
  y: -60,
  scale: 0.9,
}

function AnimatedCard({
  card,
  index,
  onReadClick,
}: {
  card: Card
  index: number
  onReadClick: () => void
}) {
  const { scale, y } = positionStyles[index] ?? positionStyles[2]
  const baseZIndex = 3 - index

  const exitAnim = index === 0 ? exitAnimation : undefined
  const initialAnim = index === 2 ? enterAnimation : undefined

  return (
    <motion.div
      key={card.id}
      initial={initialAnim}
      animate={{ y, scale, zIndex: baseZIndex }}
      exit={{ ...exitAnim, zIndex: 100 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 35,
        mass: 0.5,
      }}
      style={{
        left: "50%",
        x: "-50%",
        bottom: "0",
        position: "absolute",
      }}
      className="absolute flex h-[420px] w-[calc(100vw-3rem)] max-w-[486px] md:max-w-[680px] lg:max-w-[768px] items-center justify-center overflow-hidden rounded-t-xl border-x border-t border-white/10 bg-zinc-900 p-1 shadow-lg will-change-transform"
    >
      <CardContent contentType={card.contentType} onReadClick={onReadClick} />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
    </motion.div>
  )
}

// ============================================================================
// COMPONENT - Projects Card Stack
// ============================================================================

function ProjectsCardStack() {
  const [cards, setCards] = useState(initialCards)
  const [isAnimating, setIsAnimating] = useState(false)
  const [nextId, setNextId] = useState(4)
  const [selectedProject, setSelectedProject] = useState<ClientProject | null>(null)
  const [viewMode, setViewMode] = useState<'stack' | 'list'>('stack')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const lastScrollTime = useRef(0)
  const cardContainerRef = useRef<HTMLDivElement>(null)

  const currentIndex = cards[0].contentType % clientProjects.length

  const handlePrevious = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    const prevContentType = currentIndex === 0 ? clientProjects.length - 1 : currentIndex - 1

    setTimeout(() => {
      setCards([{ id: nextId, contentType: prevContentType }, ...cards.slice(0, 2)])
      setNextId((prev) => prev + 1)
    }, 0)

    setTimeout(() => setIsAnimating(false), 450)
  }, [isAnimating, currentIndex, cards, nextId])

  const handleNext = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    const nextContentType = (cards[2].contentType + 1) % clientProjects.length

    setTimeout(() => {
      setCards([...cards.slice(1), { id: nextId, contentType: nextContentType }])
      setNextId((prev) => prev + 1)
    }, 0)

    setTimeout(() => setIsAnimating(false), 450)
  }, [isAnimating, cards, nextId])

  const handleReadClick = (contentType: number) => {
    setSelectedProject(clientProjects[contentType % clientProjects.length])
  }

  const handleListItemClick = (index: number) => {
    setSelectedProject(clientProjects[index])
  }

  useEffect(() => {
    const container = cardContainerRef.current
    if (!container || viewMode !== 'stack') return

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      e.stopPropagation()

      const now = Date.now()
      const timeSinceLastScroll = now - lastScrollTime.current

      if (timeSinceLastScroll < 350) return

      lastScrollTime.current = now

      if (e.deltaY > 0) {
        handleNext()
      } else if (e.deltaY < 0) {
        handlePrevious()
      }
    }

    container.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      container.removeEventListener('wheel', handleWheel)
    }
  }, [viewMode, handleNext, handlePrevious])

  return (
    <>
      <div className="w-full">
        <div className="flex flex-col items-center justify-center mb-12 gap-6">
          <div className="flex items-center gap-6">
            {viewMode === 'stack' && (
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevious}
                  className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="h-5 w-5 text-white/70" />
                </button>
                <span className="text-sm text-gray-500 min-w-[60px] text-center">
                  {currentIndex + 1} / {clientProjects.length}
                </span>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
                  aria-label="Next project"
                >
                  <ChevronRight className="h-5 w-5 text-white/70" />
                </button>
              </div>
            )}

            <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 p-1">
              <button
                className={`rounded-md p-2 transition-colors ${viewMode === 'stack' ? 'bg-white/10' : 'hover:bg-white/10'}`}
                onClick={() => setViewMode('stack')}
                aria-label="Stack view"
              >
                <Archive className="h-5 w-5 text-white/70" />
              </button>
              <button
                className={`rounded-md p-2 transition-colors ${viewMode === 'list' ? 'bg-white/10' : 'hover:bg-white/10'}`}
                onClick={() => setViewMode('list')}
                aria-label="List view"
              >
                <Menu className="h-5 w-5 text-white/70" />
              </button>
            </div>
          </div>
        </div>

        {viewMode === 'stack' ? (
          <div className="flex w-full flex-col items-center justify-center pt-2">
            <div
              ref={cardContainerRef}
              className="relative h-[460px] w-full max-w-[966px] overflow-hidden mx-auto"
              style={{ perspective: '1500px' }}
            >
              <div className="relative h-full w-full" style={{ transformStyle: 'preserve-3d' }}>
                <AnimatePresence initial={false} mode="popLayout">
                  {cards.slice(0, 3).map((card, index) => (
                    <AnimatedCard
                      key={card.id}
                      card={card}
                      index={index}
                      onReadClick={() => handleReadClick(card.contentType)}
                    />
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center w-full">
            <div className="w-full max-w-5xl">
              <div className="divide-y divide-white/10">
                {clientProjects.map((project, index) => (
                  <button
                    key={project.id}
                    className="group flex w-full items-center gap-6 py-4 text-left transition-all hover:bg-white/5 overflow-hidden"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => handleListItemClick(index)}
                  >
                    <span className="w-32 shrink-0 text-sm text-gray-600">
                      {project.category}
                    </span>
                    <span className="min-w-0 shrink-0 font-medium text-white" style={{ width: '280px' }}>
                      {project.title}
                    </span>
                    <span className="min-w-0 flex-1 text-gray-400">{project.company} • {project.industry}</span>
                    <ChevronRight className="h-4 w-4 shrink-0 text-gray-700 transition-transform group-hover:translate-x-1 group-hover:text-gray-500" />

                    <div
                      className="shrink-0 overflow-hidden rounded-lg border border-white/20 shadow-lg transition-all duration-300 ease-out relative"
                      style={{
                        width: hoveredIndex === index ? '200px' : '0px',
                        height: hoveredIndex === index ? '120px' : '0px',
                        opacity: hoveredIndex === index ? 1 : 0,
                        marginLeft: hoveredIndex === index ? '16px' : '0px',
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/60" />
                      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      <ClientProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </>
  )
}

// ============================================================================
// MAIN SECTION COMPONENT
// ============================================================================

export function ProjectsSection() {
  return (
    <section id="projects" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-white/40 mb-4">Proof of Execution</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            $2.4B processed. 2,500 assets managed.
            <br />
            <span className="text-white/60">47 AI systems shipped.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Every project here represents production systems that actually work—not pilots, not demos, not vaporware.
          </p>
        </div>
        <ProjectsCardStack />
      </div>
    </section>
  )
}
