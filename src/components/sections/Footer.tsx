"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, ArrowUpRight } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer id="contact" className="relative bg-zinc-950 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="relative h-8 w-auto">
                <Image
                  src="/logo.png"
                  alt="Haestus Logo"
                  width={140}
                  height={32}
                  className="h-full w-auto object-contain"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
            </div>
            <p className="text-white/50 leading-relaxed mb-6 max-w-md">
              The execution layer of AI. We replace pilots with production
              and ship systems that actually work. Called after the hype.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a
                href="mailto:hello@haestus.dev"
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group"
              >
                <Mail size={16} />
                <span>hello@haestus.dev</span>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <div className="flex items-center gap-3 text-white/50">
                <MapPin size={16} />
                <span>Remote-first, Global delivery</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm uppercase tracking-wider text-white/30 mb-6">Navigate</h4>
            <ul className="space-y-3">
              <li>
                <a href="#hero" className="text-white/60 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#process" className="text-white/60 hover:text-white transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#demo" className="text-white/60 hover:text-white transition-colors">
                  Demo
                </a>
              </li>
              <li>
                <a href="#cta" className="text-white/60 hover:text-white transition-colors">
                  Work With Us
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Principles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm uppercase tracking-wider text-white/30 mb-6">Principles</h4>
            <ul className="space-y-3">
              <li className="text-white/60">Fast</li>
              <li className="text-white/60">Opinionated</li>
              <li className="text-white/60">Outcome-driven</li>
              <li className="text-white/60">Calm under pressure</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Haestus. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-white/30 hover:text-white/60 transition-colors text-sm">
              Privacy
            </a>
            <a href="#" className="text-white/30 hover:text-white/60 transition-colors text-sm">
              Terms
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
