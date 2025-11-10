import { motion, useMotionValue, useTransform } from "motion/react";
import { useState, ReactNode, useCallback, memo } from "react";
import { Skeleton } from "./ui/skeleton";
import { toast } from "sonner@2.0.3";

interface NetflixCardProps {
  title: string;
  description: string;
  url: string;
  image: string | ReactNode;
  category: string;
  onCardClick?: () => void;
  isInternal?: boolean;
  onNavigate?: (url: string) => void;
}

export const NetflixCard = memo(function NetflixCard({ title, description, url, image, category, onCardClick, isInternal, onNavigate }: NetflixCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const isReactComponent = typeof image !== 'string';
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-100, 100], [3, -3]);
  const rotateY = useTransform(x, [-100, 100], [-3, 3]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  }, [x, y]);

  const handleClick = useCallback(() => {
    if (onCardClick) {
      onCardClick();
    }
    toast.success(`Abrindo ${title}...`);
    setTimeout(() => {
      if (isInternal && onNavigate) {
        onNavigate(url);
      } else {
        window.open(url, "_blank");
      }
    }, 400);
  }, [onCardClick, title, url, isInternal, onNavigate]);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);

  return (
    <motion.div
      className="relative group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      style={{
        perspective: 1000,
        willChange: "transform",
      }}
    >
      <motion.div
        className="relative"
        animate={{
          scale: isHovered ? 1.05 : 1,
          zIndex: isHovered ? 50 : 1,
        }}
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          willChange: "transform",
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <motion.div
          className="relative rounded-lg overflow-hidden bg-black shadow-xl"
          style={{ 
            width: isReactComponent ? '280px' : 'auto',
            height: isReactComponent ? '351px' : 'auto'
          }}
          whileHover={{ 
            boxShadow: "0 20px 60px -10px rgba(220, 38, 38, 0.4)",
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Image with Loading State */}
          {!isReactComponent && !imageLoaded && (
            <Skeleton className="absolute inset-0 bg-black" />
          )}
          
          <motion.div
            className="relative w-full h-full"
            animate={{
              scale: isHovered ? 1.08 : 1,
            }}
            transition={{ duration: 0.5 }}
          >
            {isReactComponent ? (
              <div className="w-full h-full overflow-hidden relative">
                <div 
                  style={{ 
                    position: 'absolute',
                    width: '1080px', 
                    height: '1350px',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%) scale(0.26)',
                    transformOrigin: 'center center'
                  }}
                >
                  {image}
                </div>
              </div>
            ) : (
              <img
                src={image as string}
                alt={title}
                className="w-full h-full object-contain"
                onLoad={() => setImageLoaded(true)}
                style={{ opacity: imageLoaded ? 1 : 0 }}
              />
            )}
          </motion.div>

          {/* Subtle gradient overlay for title legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300" />
          
          {/* Subtle red glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Title - Clean and minimal */}
          <div className="absolute inset-x-0 bottom-0 p-4">
            <motion.h3 
              className="text-white drop-shadow-2xl tracking-wide"
              animate={{
                y: isHovered ? -3 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>
          </div>

          {/* Subtle shine effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            initial={{ x: "-100%" }}
            animate={{ x: isHovered ? "100%" : "-100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ transform: "skewX(-15deg)" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
});