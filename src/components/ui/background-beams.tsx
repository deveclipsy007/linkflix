import React from "react";
import { motion } from "motion/react";
import { cn } from "./utils";

export const BackgroundBeams = React.memo(
  ({ className }: { className?: string }) => {
    // Reduzido de 25 para 8 paths para performance
    const paths = [
      "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
      "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
      "M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811",
      "M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779",
      "M-268 -317C-268 -317 -200 88 264 215C728 342 796 747 796 747",
      "M-240 -349C-240 -349 -172 56 292 183C756 310 824 715 824 715",
      "M-212 -381C-212 -381 -144 24 320 151C784 278 852 683 852 683",
      "M-184 -413C-184 -413 -116 -8 348 119C812 246 880 651 880 651",
    ];
    
    return (
      <div
        className={cn(
          "absolute h-full w-full inset-0 [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center",
          className,
        )}
        style={{ willChange: "transform" }}
      >
        <svg
          className="z-0 h-full w-full pointer-events-none absolute"
          width="100%"
          height="100%"
          viewBox="0 0 696 316"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ willChange: "transform" }}
        >
          {/* Base path com opacidade baixa */}
          <path
            d="M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875"
            stroke="url(#paint0_radial_242_278)"
            strokeOpacity="0.02"
            strokeWidth="0.5"
          ></path>

          {paths.map((path, index) => (
            <motion.path
              key={`path-${index}`}
              d={path}
              stroke={`url(#linearGradient-${index})`}
              strokeOpacity="0.3"
              strokeWidth="0.5"
            ></motion.path>
          ))}
          <defs>
            {paths.map((path, index) => (
              <motion.linearGradient
                id={`linearGradient-${index}`}
                key={`gradient-${index}`}
                initial={{
                  x1: "0%",
                  x2: "0%",
                  y1: "0%",
                  y2: "0%",
                }}
                animate={{
                  x1: ["0%", "100%"],
                  x2: ["0%", "95%"],
                  y1: ["0%", "100%"],
                  y2: ["0%", `${93 + Math.random() * 8}%`],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: Math.random() * 10,
                }}
              >
                <stop stopColor="#dc2626" stopOpacity="0"></stop>
                <stop stopColor="#dc2626"></stop>
                <stop offset="32.5%" stopColor="#991b1b"></stop>
                <stop offset="100%" stopColor="#ef4444" stopOpacity="0"></stop>
              </motion.linearGradient>
            ))}

            <radialGradient
              id="paint0_radial_242_278"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)"
            >
              <stop offset="0.0666667" stopColor="#1f1f1f"></stop>
              <stop offset="0.243243" stopColor="#1f1f1f"></stop>
              <stop offset="0.43594" stopColor="#101010" stopOpacity="0"></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>
    );
  },
);

BackgroundBeams.displayName = "BackgroundBeams";
