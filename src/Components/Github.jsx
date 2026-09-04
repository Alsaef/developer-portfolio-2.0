import React from "react";
import GitHubCalendar from "react-github-calendar";
import { motion } from "framer-motion";

function Github() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center mt-32 max-w-6xl mx-auto px-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white tracking-wide mb-10">
        Days I <span className="text-[var(--color-primary)]">Code</span>
      </h2>

      {/* Interactive Glassmorphism Card */}
      <div className="group relative w-full max-w-5xl bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(var(--color-primary-rgb),0.15)] hover:border-[var(--color-primary)]/30">
        
        {/* Subtle background glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-700 pointer-events-none rounded-2xl" />

        {/* Scrollable wrapper for mobile screens */}
        <div className="relative w-full overflow-x-auto overflow-y-hidden flex justify-center pb-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 hover:scrollbar-thumb-[var(--color-primary)]/50 transition-colors">
          <div className="min-w-[800px] md:min-w-full flex justify-center">
            <GitHubCalendar
              username="Alsaef"
              blockSize={16}
              blockMargin={6}
              color="#c084f5"
              fontSize={14}
              // Optional: If you update react-github-calendar, you can use the theme prop for better dark mode empty squares
              theme={{
                light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
                dark: ['#161b22', '#3a1d52', '#5f2b85', '#8a3bb8', '#c084f5'],
              }}
              style={{
                color: 'white',
              }}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Github;