"use client"

import { motion } from "framer-motion"

export function SocialProofBar() {
  const clients = [
    { name: "PayPro", logo: "PP" },
    { name: "BeeHive", logo: "BH" },
    { name: "Haestus", logo: "H" },
    { name: "Promptlee", logo: "PL" },
    { name: "CBSC", logo: "CB" },
  ]

  return (
    <section className="relative py-16 md:py-20 bg-zinc-950 border-t border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-center text-sm text-white/40 uppercase tracking-widest mb-8">
            Trusted by teams building the future
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <span className="text-white/70 font-bold text-sm">{client.logo}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">47</div>
            <div className="text-sm text-white/50">AI Systems Deployed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">$2.4B</div>
            <div className="text-sm text-white/50">Payment Volume Processed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-sm text-white/50">Client Retention Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
