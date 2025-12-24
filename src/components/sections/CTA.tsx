"use client"

import { motion } from "framer-motion"
import { Zap, Clock, Shield, ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section id="cta" className="relative py-32 bg-zinc-950 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Main CTA Heading */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 text-white leading-[1.1]">
            Ready to ship
            <br />
            <span className="text-white/40">something real?</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-lg md:text-xl text-white/50 mb-12 leading-relaxed max-w-2xl mx-auto">
            We work with companies that are done with AI theater.
            If you have a real problem and need production-ready execution,
            let's talk.
          </p>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <div className="text-center p-6 bg-white/[0.02] border border-white/10 rounded-2xl">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">4 Weeks</div>
              <div className="text-sm text-white/50">Average time to production</div>
            </div>

            <div className="text-center p-6 bg-white/[0.02] border border-white/10 rounded-2xl">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-sm text-white/50">Projects shipped on time</div>
            </div>

            <div className="text-center p-6 bg-white/[0.02] border border-white/10 rounded-2xl">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">$0</div>
              <div className="text-sm text-white/50">Paid for unshipped work</div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-zinc-950 font-semibold text-lg rounded-full hover:bg-white/90 transition-all"
            >
              Start a Conversation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <span className="text-sm text-white/40">
              No pitch decks. No fluff. Just scope and timeline.
            </span>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <p className="text-xs uppercase tracking-widest text-white/30 mb-4">What we don't do</p>
            <div className="flex flex-wrap justify-center items-center gap-6 text-white/40">
              <span className="text-sm">No hourly billing</span>
              <span className="text-white/20">•</span>
              <span className="text-sm">No scope creep</span>
              <span className="text-white/20">•</span>
              <span className="text-sm">No endless meetings</span>
              <span className="text-white/20">•</span>
              <span className="text-sm">No AI buzzwords</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
