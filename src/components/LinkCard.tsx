import { motion } from "motion/react";
import { LucideIcon, ExternalLink, Sparkles } from "lucide-react";
import { useState } from "react";

interface LinkCardProps {
  title: string;
  description: string;
  url: string;
  icon: LucideIcon;
  gradient: string;
  index: number;
}

export function LinkCard({ title, description, url, icon: Icon, gradient, index }: LinkCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={url}
      className="block relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glow effect on hover */}
      <motion.div
        className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500`}
        animate={isHovered ? { opacity: 0.75 } : { opacity: 0 }}
      />

      {/* Card content */}
      <div className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 overflow-hidden transition-all duration-300 group-hover:border-slate-700">
        {/* Animated gradient overlay */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />

        {/* Sparkle effect on hover */}
        <motion.div
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
          initial={{ rotate: 0 }}
          animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
          transition={{ duration: 1 }}
        >
          <Sparkles className="w-5 h-5 text-yellow-400" />
        </motion.div>

        <div className="relative flex items-center gap-4">
          {/* Icon */}
          <motion.div
            className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${gradient} rounded-xl flex items-center justify-center shadow-lg`}
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <Icon className="w-7 h-7 text-white" />
          </motion.div>

          {/* Text content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-white mb-1 flex items-center gap-2">
              {title}
              <motion.span
                className="opacity-0 group-hover:opacity-100"
                initial={{ x: -10 }}
                animate={isHovered ? { x: 0 } : { x: -10 }}
              >
                <ExternalLink className="w-4 h-4 text-slate-400" />
              </motion.span>
            </h3>
            <p className="text-slate-400">{description}</p>
          </div>

          {/* Animated arrow */}
          <motion.div
            className="flex-shrink-0"
            animate={isHovered ? { x: 5 } : { x: 0 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className={`w-8 h-8 bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity`}>
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Animated bottom line */}
        <motion.div
          className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`}
          initial={{ scaleX: 0 }}
          animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </motion.a>
  );
}
