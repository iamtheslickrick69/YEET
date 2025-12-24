/**
 * BLOG SECTION - Integrated Component for YEET One-Page App
 * Adapted from standalone BlogPage.tsx
 */

"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X, Share2 } from "lucide-react"

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

interface BlogPost {
  id: number
  title: string
  description: string
  category: string
  readTime: string
  image: string
  content: string
}

interface Card {
  id: number
  contentType: number
}

// ============================================================================
// DATA - Blog Posts
// ============================================================================

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "AI Is Here - Implementation Is What's Coming",
    description: "95% of AI pilots fail. Learn why—and how to be in the 7% that scale successfully.",
    category: "AI Strategy",
    readTime: "16 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80",
    content: `# AI Is Here. AI Implementation Is What's Coming.

**AI is not the future—it's already here.** The competitive advantage now belongs to businesses that implement AI strategically, not those that simply experiment with it. While 88% of organizations use AI in at least one function, only 7% have achieved full-scale deployment, creating a massive opportunity gap for businesses ready to act.

## The Wake-Up Call: Businesses Are Asleep at the Wheel

Large corporations are spending billions on AI. Alphabet invested over $85 billion in AI in 2025 alone. General Mills saved $20 million in transportation costs using AI-powered logistics. Bank of America's AI assistant "Erica" has handled over 2 billion customer interactions.

Meanwhile, most businesses are stuck in pilot mode. MIT's research reveals a brutal truth: **95% of corporate AI pilot programs fail to produce any material benefit.** The problem isn't AI capability—it's implementation strategy.

### What Business Leaders Are Actually Saying

The conversation around AI implementation has shifted from "should we?" to "how do we avoid becoming another failure statistic?"

**From Reddit's r/BusinessTechnology:**

> "We spent 6 months building an AI chatbot that our customers hate. Turns out they just wanted faster response times, not AI. We should've improved our routing system instead." — Small business owner, 127 upvotes

> "My team wanted to implement AI for everything. I asked one question: 'What specific problem does this solve?' Nobody could answer. Saved us $200K on a project that would've failed." — IT Director, 312 upvotes

**From LinkedIn's Tech Leaders:**

A CTO at a Fortune 500 company shared: "The companies succeeding with AI aren't the ones with the biggest budgets. They're the ones who know WHAT to build. Strategy beats technology every single time."

**What the data shows:**

According to community discussions across HackerNews, LinkedIn, and industry forums, the #1 reason AI projects fail isn't technical—it's that businesses solve problems they don't actually have.

### What Separates Winners from Losers

The gap isn't about access to technology. The chessboard has been leveled—everyone has access to the same powerful tools. The difference is execution:

- **Winners** identify their biggest pain point and implement targeted solutions
- **Losers** chase trends without clear business objectives
- **Winners** build defensible systems that improve over time
- **Losers** create one-and-done projects that become obsolete

## Why Most AI Projects Fail (And What Actually Works)

### The Top 3 Reasons AI Initiatives Stall

**1. Building the Wrong Thing**

A tire data corporation approached us wanting an AI phone bot to set appointments. After analyzing their actual needs, we discovered the real problem: their search functionality was failing customers. We integrated AI into their existing search bar instead—solving the core issue without the complexity of a phone system.

The lesson: AI success starts with identifying the right problem, not implementing the latest technology.

**2. Lack of Continuous Refinement**

AI is not a "set it and forget it" solution. The intelligence layer requires ongoing optimization. When a custom AI chatbot fails to answer a customer question, that's a sale left on the table—like standing at the counter and giving the wrong answer while a customer walks out the door.

Successful implementations include:
- Custom dashboards for real-time refinement
- Feedback loops that prevent repeated mistakes
- Systems that learn and improve with every interaction

**3. Treating AI as a Vendor Relationship Instead of a Partnership**

Internal AI builds succeed only 33% of the time. Purchasing AI tools from specialized vendors and building true partnerships succeeds 67% of the time. The difference is expertise, ongoing support, and aligned incentives.

## The Implementation Framework That Works

Here's what successful AI implementation actually looks like:

### Phase 1: Strategic Assessment (Week 1-2)
- Identify high-impact pain points
- Validate problems with data
- Define success metrics

### Phase 2: Rapid Prototyping (Week 3-4)
- Build minimal viable solution
- Test with real users
- Measure against success metrics

### Phase 3: Iterative Refinement (Ongoing)
- Monitor performance
- Optimize based on feedback
- Scale what works

## The Bottom Line

AI implementation is not about technology. It's about strategy, execution, and continuous improvement. The winners are those who:

1. Solve real problems (not theoretical ones)
2. Build systems that improve over time
3. Partner with experts who have skin in the game

The AI revolution isn't coming. It's here. The question is: will you be in the 7% that scales successfully?`
  },
  {
    id: 2,
    title: "The Hidden Cost of Bad AI Implementation",
    description: "Why rushing AI deployment costs more than waiting for the right approach.",
    category: "AI Strategy",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    content: `# The Hidden Cost of Bad AI Implementation

Many businesses rush into AI without understanding the true cost of getting it wrong. Here's what happens when AI implementation fails—and how to avoid it.

## The Real Cost of Failure

When AI projects fail, the costs extend far beyond the initial investment:

- **Lost Time:** 6-18 months of development wasted
- **Team Morale:** Engineers burned out on failed projects
- **Opportunity Cost:** Competitors gaining ground while you rebuild
- **Customer Trust:** Users frustrated by broken AI features

### Case Study: The $2M Chatbot Nobody Used

A mid-sized e-commerce company invested $2M in a custom AI chatbot. After 14 months of development:

- 3% customer adoption rate
- 87% of users preferred email support
- Team spent 40 hours/week managing edge cases
- Project shelved after 6 months in production

**What went wrong?** They built what sounded innovative instead of what customers actually needed.

## How to Avoid These Mistakes

### 1. Start with the Problem, Not the Technology

Ask yourself:
- What specific problem am I solving?
- How will I measure success?
- What's the simplest solution that could work?

### 2. Build in Public, Iterate Fast

- Launch MVPs in weeks, not months
- Get real user feedback immediately
- Pivot based on data, not assumptions

### 3. Partner with Experts

The companies succeeding with AI aren't doing it alone. They're partnering with implementation specialists who have:
- Battle-tested frameworks
- Domain expertise
- Skin in the game

## The Right Way to Think About AI Investment

Think of AI implementation like hiring a key employee:
- Start with a clear role definition
- Set measurable performance goals
- Provide ongoing training and support
- Evaluate and optimize regularly

The businesses winning with AI treat it as a strategic partnership, not a one-time purchase.`
  },
  {
    id: 3,
    title: "Building AI Systems That Actually Scale",
    description: "The engineering principles behind AI solutions that grow with your business.",
    category: "Technical",
    readTime: "14 min read",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80",
    content: `# Building AI Systems That Actually Scale

Scaling AI isn't about handling more traffic. It's about building systems that improve as they grow.

## The Scaling Paradox

Most AI systems get worse as they scale:
- More edge cases to handle
- Increased complexity
- Higher maintenance costs
- Slower response times

But the best AI systems get **better** with scale:
- More data = better predictions
- More users = more feedback
- More use cases = more robust systems

## The Architecture of Scalable AI

### 1. Modular Design
Build AI as composable components, not monoliths.

### 2. Feedback Loops
Every interaction should improve the system.

### 3. Progressive Enhancement
Start simple, add complexity only when needed.

### 4. Monitoring & Observability
You can't improve what you can't measure.

## Real-World Example: Payment Processing AI

We built a fraud detection system that processes millions of transactions. Key decisions:

- **Modular Rules Engine:** Easy to add new fraud patterns
- **Real-Time Learning:** System updates from every transaction
- **Human-in-the-Loop:** Critical cases escalated to experts
- **A/B Testing Framework:** Constantly optimizing detection

**Result:** 94% fraud detection rate with 0.1% false positives.

## The Key Takeaway

Scalable AI isn't built overnight. It's engineered through:
- Clear architectural principles
- Continuous measurement
- Iterative improvement
- Expert guidance

Start small, build right, scale smart.`
  }
]

// ============================================================================
// COMPONENT - Blog Modal
// ============================================================================

interface BlogModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  content: string
  category?: string
  readTime?: string
}

function BlogModal({ isOpen, onClose, title, content, category, readTime }: BlogModalProps) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

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

  const handleScroll = () => {
    if (contentRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = contentRef.current
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100
      setScrollProgress(Math.min(100, Math.max(0, progress)))
    }
  }

  const handleShare = async () => {
    const shareData = {
      title: title,
      text: `Check out this article: ${title}`,
      url: window.location.href,
    }

    if (navigator.share && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData)
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          navigator.clipboard.writeText(window.location.href)
        }
      }
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  const scrollToHeading = (heading: string) => {
    if (contentRef.current) {
      const elements = contentRef.current.querySelectorAll("h2")
      elements.forEach((el) => {
        if (el.textContent === heading) {
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
      })
    }
  }

  const headings = content.match(/^## .+$/gm)?.map((h) => h.replace("## ", "")) || []

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
              className="flex h-full max-h-[85vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
            <div className="absolute left-0 right-0 top-0 z-10 h-1 bg-zinc-800">
              <motion.div
                className="h-full bg-white"
                initial={{ width: 0 }}
                animate={{ width: `${scrollProgress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Header */}
            <div className="flex items-start justify-between border-b border-white/10 px-6 py-5 pt-6">
              <div className="flex flex-col gap-2 pr-4">
                <div className="flex items-center gap-2">
                  {category && (
                    <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium text-white">
                      {category}
                    </span>
                  )}
                  {readTime && <span className="text-xs text-gray-500">{readTime}</span>}
                </div>
                <h2 className="text-xl font-bold text-white sm:text-2xl text-balance">{title}</h2>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleShare}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 text-gray-300 transition-colors hover:bg-zinc-700"
                  aria-label="Share article"
                >
                  <Share2 className="h-4 w-4" />
                </button>
                <button
                  onClick={onClose}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-800 text-gray-300 transition-colors hover:bg-zinc-700"
                  aria-label="Close modal"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {headings.length > 2 && (
              <div className="border-b border-white/10 px-6 py-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium text-gray-500">Jump to:</span>
                  {headings.slice(0, 5).map((heading, i) => (
                    <button
                      key={i}
                      onClick={() => scrollToHeading(heading)}
                      className="rounded-full bg-zinc-800 px-2.5 py-1 text-xs font-medium text-gray-300 transition-colors hover:bg-white hover:text-black"
                    >
                      {heading.length > 25 ? heading.slice(0, 25) + "..." : heading}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Content */}
            <div
              ref={contentRef}
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto px-6 py-8 sm:px-10"
              style={{ scrollbarWidth: 'thin' }}
            >
              <article className="max-w-none">
                <div
                  className="text-gray-400 leading-relaxed text-base"
                  dangerouslySetInnerHTML={{ __html: formatContent(content) }}
                />
              </article>
            </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

function formatContent(content: string): string {
  let formatted = '<p class="mb-4">' + content + '</p>'

  formatted = formatted
    .replace(/^### (.+)$/gm, '</p><h3 class="text-lg font-semibold text-white mt-8 mb-3">$1</h3><p class="mb-4">')
    .replace(/^## (.+)$/gm, '</p><h2 class="text-xl font-bold text-white mt-10 mb-4 scroll-mt-4">$1</h2><p class="mb-4">')
    .replace(/^# (.+)$/gm, '</p><h1 class="text-2xl font-bold text-white mb-6 hidden">$1</h1><p class="mb-4">')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em class="text-gray-300">$1</em>')
    .replace(/^- (.+)$/gm, '</p><li class="ml-6 list-disc mb-2 text-gray-300">$1</li><p class="mb-4">')
    .replace(/^(\d+)\. (.+)$/gm, '</p><li class="ml-6 list-decimal mb-2 text-gray-300">$2</li><p class="mb-4">')
    .replace(/`(.+?)`/g, '<code class="bg-zinc-800 px-1.5 py-0.5 rounded text-sm font-mono text-white">$1</code>')
    .replace(
      /^> (.+)$/gm,
      '</p><blockquote class="border-l-4 border-white/30 pl-4 italic my-6 text-gray-300">$1</blockquote><p class="mb-4">',
    )
    .replace(/---/g, '</p><hr class="my-8 border-white/10" /><p class="mb-4">')
    .replace(/\n\n/g, '</p><p class="mb-4">')
    .replace(/<p class="mb-4"><\/p>/g, '')

  return formatted
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
  const post = blogPosts[contentType % blogPosts.length]

  return (
    <div
      className="flex h-full w-full flex-col gap-4 cursor-pointer"
      onClick={onReadClick}
    >
      <div className="relative -outline-offset-1 flex h-[300px] w-full items-center justify-center overflow-hidden rounded-lg outline outline-white/10">
        <img
          src={post.image}
          alt={post.title}
          className="h-full w-full select-none object-cover"
        />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-black shadow-sm">
            {post.category}
          </span>
        </div>
        <div className="absolute right-3 top-3">
          <span className="rounded-full bg-black/80 px-2.5 py-1 text-xs font-medium text-white shadow-sm backdrop-blur-sm">
            {post.readTime}
          </span>
        </div>
      </div>
      <div className="flex w-full items-center justify-between gap-2 px-3 pb-6">
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="truncate font-semibold text-white">{post.title}</span>
          <span className="text-sm text-gray-400 line-clamp-2">{post.description}</span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onReadClick()
          }}
          className="flex h-10 shrink-0 cursor-pointer select-none items-center gap-0.5 rounded-full bg-white pl-4 pr-3 text-sm font-medium text-black transition-transform hover:scale-105 hover:bg-gray-100 active:scale-95"
        >
          Read
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
// COMPONENT - Blog Card Stack
// ============================================================================

function BlogCardStack() {
  const [cards, setCards] = useState(initialCards)
  const [isAnimating, setIsAnimating] = useState(false)
  const [nextId, setNextId] = useState(4)
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null)
  const lastScrollTime = useRef(0)
  const cardContainerRef = useRef<HTMLDivElement>(null)

  const currentIndex = cards[0].contentType % blogPosts.length

  const handlePrevious = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    const prevContentType = currentIndex === 0 ? blogPosts.length - 1 : currentIndex - 1

    setTimeout(() => {
      setCards([{ id: nextId, contentType: prevContentType }, ...cards.slice(0, 2)])
      setNextId((prev) => prev + 1)
    }, 0)

    setTimeout(() => setIsAnimating(false), 450)
  }, [isAnimating, currentIndex, cards, nextId])

  const handleNext = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    const nextContentType = (cards[2].contentType + 1) % blogPosts.length

    setTimeout(() => {
      setCards([...cards.slice(1), { id: nextId, contentType: nextContentType }])
      setNextId((prev) => prev + 1)
    }, 0)

    setTimeout(() => setIsAnimating(false), 450)
  }, [isAnimating, cards, nextId])

  const handleReadClick = (contentType: number) => {
    setSelectedBlog(blogPosts[contentType % blogPosts.length])
  }

  useEffect(() => {
    const container = cardContainerRef.current
    if (!container) return

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
  }, [handleNext, handlePrevious])

  return (
    <>
      <div className="w-full">
        <div className="flex flex-col items-center justify-center mb-12 gap-6">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevious}
              className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Previous article"
            >
              <ChevronLeft className="h-5 w-5 text-white/70" />
            </button>
            <span className="text-sm text-gray-500 min-w-[60px] text-center">
              {currentIndex + 1} / {blogPosts.length}
            </span>
            <button
              onClick={handleNext}
              className="p-2 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-colors"
              aria-label="Next article"
            >
              <ChevronRight className="h-5 w-5 text-white/70" />
            </button>
          </div>
        </div>

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
      </div>

      <BlogModal
        isOpen={selectedBlog !== null}
        onClose={() => setSelectedBlog(null)}
        title={selectedBlog?.title || ""}
        content={selectedBlog?.content || ""}
        category={selectedBlog?.category}
        readTime={selectedBlog?.readTime}
      />
    </>
  )
}

// ============================================================================
// MAIN SECTION COMPONENT
// ============================================================================

export function BlogSection() {
  return (
    <section id="blog" className="py-32 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-widest text-white/40 mb-4">Strategic Insights</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Why 95% of AI pilots fail.
            <br />
            <span className="text-white/60">And how to be in the 5% that ships.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-world lessons from deploying production AI systems, not theory from the sidelines.
          </p>
        </div>
        <BlogCardStack />
      </div>
    </section>
  )
}
