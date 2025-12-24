"use client"

import { Hero } from "@/components/sections/Hero"
import { SocialProofBar } from "@/components/sections/SocialProofBar"
import { StickyNav } from "@/components/sections/StickyNav"
import { FloatingCTA } from "@/components/sections/FloatingCTA"
import { Timeline } from "@/components/sections/Timeline"
import { SlingshotsDemo } from "@/components/sections/SlingshotsDemo"
import { BlogSection } from "@/components/sections/BlogSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider"
import { CTA } from "@/components/sections/CTA"
import { Footer } from "@/components/sections/Footer"
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero"
import TextGradientScroll from "@/components/ui/text-gradient-scroll"

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      {/* Sticky Navigation - appears after scroll */}
      <StickyNav />

      {/* Floating CTA - appears after 3s */}
      <FloatingCTA />

      {/* Section 1: Hero with logo, video background, and proof point */}
      <Hero />

      {/* Section 2: Social Proof Bar - Client logos and metrics */}
      <SocialProofBar />

      {/* Section 3: Projects - MOVED HERE for early credibility */}
      <ProjectsSection />

      {/* Section 4: Smooth Scroll Hero - Parallax effect */}
      <SmoothScrollHero />

      {/* Section 5: Text Gradient Scroll - Manifesto */}
      <section className="relative py-24 md:py-32 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <TextGradientScroll
            text="We execute when others experiment. We ship when others strategize. We deliver production systems while the competition is still building pilots."
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
          />
        </div>
      </section>

      {/* Section 6: Process Timeline with animated beam */}
      <Timeline />

      {/* Section 7: Before/After - Dashboard Transformation */}
      <section className="relative py-24 md:py-32 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-white/40 mb-4">Real Results</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-2xl mx-auto mb-6">
              Dashboard transformation:
              <span className="text-white/40"> 6 weeks from kickoff to production.</span>
            </h2>
            <p className="text-lg text-white/50 max-w-xl mx-auto mb-4">
              Before and after. No smoke and mirrors. Just execution.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/40 mb-12">
              <span>• 73% faster processing</span>
              <span>• Zero security breaches</span>
              <span>• 99.99% uptime</span>
            </div>
            <div className="flex justify-center">
              <BeforeAfterSlider />
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Slingshots - Full-screen interactive gradient playground */}
      <SlingshotsDemo />

      {/* Section 9: Blog - Latest Insights */}
      <BlogSection />

      {/* Section 10: CTA */}
      <CTA />

      {/* Section 11: Footer */}
      <Footer />
    </main>
  )
}
