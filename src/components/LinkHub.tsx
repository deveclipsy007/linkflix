import { motion, useScroll, useTransform } from "motion/react";
import { NetflixCard } from "./NetflixCard";
import { MobileMenu } from "./MobileMenu";
import { ScrollProgress } from "./ScrollProgress";
import { ShareButton } from "./ShareButton";
import { ContactCTA } from "./ContactCTA";
import { BackgroundBeams } from "./ui/background-beams";
import { Typewriter } from "./ui/typewriter";
import { useState, useRef, useEffect, useCallback, useMemo, memo } from "react";
import { ChevronLeft, ChevronRight, ChevronDown, Menu, Facebook, Twitter, Instagram, Linkedin, Code, Rocket, Video, Zap } from "lucide-react";
import { mainLinks, socialLinks, profileInfo } from "../config/links.tsx";
import { Toaster } from "./ui/sonner";

const CarouselSection = memo(function CarouselSection({ title, items, onNavigate }: { title: string; items: typeof mainLinks; onNavigate: (url: string) => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const animationFrameRef = useRef<number | null>(null);
  const isResettingRef = useRef(false);

  // Triplicar os items para criar loop infinito - memoizado
  const infiniteItems = useMemo(() => [...items, ...items, ...items], [items]);

  const scroll = useCallback((direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  }, []);

  const handleCardClick = useCallback(() => {
    setIsPaused(true);
    
    // Retomar após 5 segundos
    setTimeout(() => {
      setIsPaused(false);
    }, 5000);
  }, []);

  // Monitorar scroll para reset infinito
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let rafId: number;
    
    const checkScroll = () => {
      if (isResettingRef.current) {
        rafId = requestAnimationFrame(checkScroll);
        return;
      }

      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const singleSetWidth = scrollWidth / 3;

      // Se passou da segunda cópia, reseta para a primeira cópia (posição equivalente)
      if (scrollLeft >= singleSetWidth * 2 - 50) {
        isResettingRef.current = true;
        const offset = scrollLeft - (singleSetWidth * 2 - 50);
        container.scrollLeft = singleSetWidth + offset;
        setTimeout(() => {
          isResettingRef.current = false;
        }, 10);
      }
      // Se voltar antes da primeira cópia, vai para a segunda cópia
      else if (scrollLeft <= 50) {
        isResettingRef.current = true;
        const offset = 50 - scrollLeft;
        container.scrollLeft = (singleSetWidth * 2) - offset;
        setTimeout(() => {
          isResettingRef.current = false;
        }, 10);
      }

      rafId = requestAnimationFrame(checkScroll);
    };

    rafId = requestAnimationFrame(checkScroll);
    
    // Iniciar no meio (segunda cópia) para permitir scroll em ambas direções
    setTimeout(() => {
      container.scrollLeft = container.scrollWidth / 3;
    }, 100);

    return () => {
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Auto-scroll suave e contínuo - otimizado
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let lastTimestamp = 0;
    const scrollSpeed = 1.0; // Reduzido para melhor performance

    const animate = (timestamp: number) => {
      if (!isPaused && !isResettingRef.current) {
        if (lastTimestamp === 0) {
          lastTimestamp = timestamp;
        }
        
        const delta = timestamp - lastTimestamp;
        const pixelsToScroll = (scrollSpeed * delta) / 16.67; // 60fps smooth
        
        container.scrollLeft += pixelsToScroll;
        lastTimestamp = timestamp;
      } else {
        lastTimestamp = 0;
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPaused]);

  return (
    <div className="mb-12 group/carousel">
      <h2 className="text-white mb-4 px-6 lg:px-12">
        {title}
      </h2>
      
      <div className="relative">
        {/* Left Arrow */}
        <motion.button
          onClick={useCallback(() => scroll('left'), [scroll])}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-black/80 hover:bg-black text-white p-3 rounded-r opacity-0 group-hover/carousel:opacity-100 transition-opacity"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronLeft className="w-8 h-8" />
        </motion.button>

        {/* Right Arrow */}
        <motion.button
          onClick={useCallback(() => scroll('right'), [scroll])}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-black/80 hover:bg-black text-white p-3 rounded-l opacity-0 group-hover/carousel:opacity-100 transition-opacity"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronRight className="w-8 h-8" />
        </motion.button>

        {/* Scrollable Container */}
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-10 lg:px-20 py-8"
          style={{ 
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            willChange: 'scroll-position',
            transform: 'translateZ(0)', // GPU acceleration
          }}
        >
          {infiniteItems.map((link, index) => (
            <div
              key={`${link.title}-${index}`}
              className="flex-shrink-0 w-[70vw] sm:w-[40vw] md:w-[28vw] lg:w-[20vw]"
            >
              <NetflixCard {...link} onCardClick={handleCardClick} onNavigate={onNavigate} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export function LinkHub({ onNavigate }: { onNavigate: (url: string) => void }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  // Memoizações para evitar re-cálculos
  const allLinks = useMemo(() => mainLinks, []);
  
  const socialIcons = useMemo(() => ({
    linkedin: Linkedin,
  }), []);

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  const handleScrollToAbout = useCallback(() => {
    const aboutSection = document.getElementById('sobre');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#101010' }}>
      <Toaster position="top-center" richColors />
      <ScrollProgress />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
      <ShareButton />

      {/* Fixed Header */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        initial={{ backgroundColor: "rgba(16,16,16,0)" }}
        animate={{ backgroundColor: "rgba(16,16,16,0.9)" }}
        style={{ 
          backdropFilter: "blur(10px)",
        }}
      >
        <div className="px-6 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <motion.img
                src={profileInfo.image}
                alt={profileInfo.name}
                className="w-12 h-12 rounded-full object-cover border-2 border-red-600 shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div>
                <h1 className="text-white tracking-tight leading-tight">{profileInfo.name.toUpperCase()}</h1>
                <p className="text-slate-400 text-xs">Central de Links</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <motion.nav 
              className="hidden md:flex gap-6 text-slate-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <a href="#destaque" className="hover:text-white transition-colors">Destaque</a>
              <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
              <a href="#todos" className="hover:text-white transition-colors">Todos</a>
            </motion.nav>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Menu className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section - Clean & Minimal */}
      <motion.div 
        ref={heroRef}
        className="relative h-screen mb-8 flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#101010' }}
        id="destaque"
      >
        <BackgroundBeams />
        <div className="text-center px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="text-white text-5xl md:text-7xl lg:text-8xl">
              <Typewriter
                text={[
                  "Central do Yohann",
                  "Encontre tudo em um só lugar",
                  "Seja bem vindo!",
                ]}
                speed={100}
                waitTime={2000}
                deleteSpeed={50}
                className="font-bold font-[Raleway] font-normal"
                cursorChar="_"
                cursorClassName="text-red-600 ml-2"
              />
            </div>

            {/* Scroll Arrow */}
            <motion.button
              onClick={handleScrollToAbout}
              className="mt-[30px] text-white hover:text-red-600 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ 
                opacity: 1, 
                y: [0, 10, 0]
              }}
              transition={{ 
                opacity: { delay: 1, duration: 0.5 },
                y: { 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronDown className="w-10 h-10 md:w-12 md:h-12" strokeWidth={2} />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* About Section */}
      <section id="sobre" className="relative z-10 px-6 lg:px-12 py-20 mb-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0a0f 25%, #8B0000 60%, #dc143c 100%)'
            }}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-900/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 p-10 lg:p-16">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                {/* Profile Image */}
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex-shrink-0"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-900 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-red-500 to-red-800 rounded-full opacity-30 blur-xl"></div>
                    <img
                      src={profileInfo.image}
                      alt={profileInfo.name}
                      className="relative w-40 h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 border-red-600 shadow-2xl ring-4 ring-red-600/30"
                    />
                  </div>
                </motion.div>
                
                {/* Content */}
                <div className="flex-1 text-center md:text-left space-y-5">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="inline-block"
                  >
                    <span className="inline-block px-5 py-2 bg-red-600 backdrop-blur-sm text-white rounded-full shadow-lg border border-red-500">
                      Sobre Mim
                    </span>
                  </motion.div>
                  
                  <motion.h2 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-white"
                  >
                    Olá, eu sou o {profileInfo.name}!
                  </motion.h2>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-100 leading-relaxed text-lg"
                  >
                    {profileInfo.bio}
                  </motion.p>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-200"
                  >
                    Explore meus links abaixo para conhecer meus projetos, assistir meus conteúdos e entrar em contato!
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-wrap gap-3 justify-center md:justify-start pt-2"
                  >
                    {profileInfo.tags.map((tag, index) => {
                      const iconMap: Record<string, React.ReactNode> = {
                        code: <Code className="w-4 h-4" />,
                        rocket: <Rocket className="w-4 h-4" />,
                        video: <Video className="w-4 h-4" />,
                        zap: <Zap className="w-4 h-4" />
                      };
                      
                      return (
                        <motion.span 
                          key={tag.label}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.7 + index * 0.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-5 py-2.5 bg-black/40 backdrop-blur-md text-white rounded-full shadow-lg border border-red-600/40 hover:shadow-xl hover:border-red-600/60 transition-all flex items-center gap-2"
                        >
                          {iconMap[tag.icon]}
                          {tag.label}
                        </motion.span>
                      );
                    })}
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Carousels */}
      <div className="relative z-10 space-y-12 pb-16">
        <div id="todos">
          <CarouselSection title="Todos os Meus Links" items={allLinks} onNavigate={onNavigate} />
        </div>
      </div>

      {/* Contact CTA */}
      <ContactCTA />

      {/* Footer */}
      <footer className="border-t border-slate-800/50 px-6 lg:px-12 py-12" style={{ backgroundColor: '#101010' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-8">
            <img
              src={profileInfo.image}
              alt={profileInfo.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-red-600 mb-4"
            />
            <h3 className="text-white mb-2">{profileInfo.name}</h3>
            <p className="text-slate-400 max-w-md">
              Conecte-se comigo nas redes sociais e acompanhe meu trabalho
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <motion.a
              href="https://www.linkedin.com/in/yohann-escher-melo-95a6b1201/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-800 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
        
          <div className="border-t border-slate-800 pt-8 text-center text-slate-500">
            <p>© 2025 {profileInfo.name} - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
}