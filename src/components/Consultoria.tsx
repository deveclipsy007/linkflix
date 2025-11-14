import { motion } from "motion/react";
import { ArrowLeft, Play, Pause } from "lucide-react";
import { socialLinks } from "../config/links";
import { toast } from "sonner";
import { useRef, useState } from "react";
import ShaderBackground from "./ui/shader-background";

interface ConsultoriaProps {
  onBack: () => void;
}

export function Consultoria({ onBack }: ConsultoriaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoWatched, setVideoWatched] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    handlePlayPause();
  };

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.currentTime >= 120 && !videoWatched) {
      setVideoWatched(true);
    }
  };

  const handleWhatsAppClick = () => {
    const message = "Tenho%20interesse%20na%20sua%20consultoria%2C%20como%20funciona%3F";
    window.open(`https://wa.me/${socialLinks.whatsapp}?text=${message}`, "_blank");
    toast.success("Abrindo WhatsApp...");
  };

  return (
    <div className="min-h-screen relative text-white" style={{ backgroundColor: '#101010' }}>
      <ShaderBackground />
      
      {/* Header with back button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-neutral-800"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </button>
          <h1 className="text-sm sm:text-lg lg:text-2xl font-light tracking-wide px-2 text-center">Para empresários que ganham mais de 10 mil ao mês</h1>
          <div className="w-16" /> {/* Spacer for alignment */}
        </div>
      </motion.div>

      {/* Section 1: Hero with Video */}
      <section className="relative z-10 px-6 lg:px-12 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center mb-12"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight mb-3 px-2"
              >
                Como Crescer 10x Seu Negócio em 90 Dias
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                className="text-lg sm:text-xl lg:text-2xl text-red-500 font-semibold px-2"
              >
                (Sem Aumentar Gastos)
              </motion.p>
            </div>
          </motion.div>

          {/* Video Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative rounded-3xl overflow-hidden bg-black border border-neutral-800 shadow-2xl group cursor-pointer mx-auto"
            style={{ aspectRatio: '16 / 9', width: '100%', maxWidth: 'min(90vw, 80%)' }}
            onClick={handleVideoClick}
          >
            <video
              ref={videoRef}
              src={new URL('../assets/1113 (2)(1).mp4', import.meta.url).href}
              className="relative w-full h-full"
              style={{ objectFit: 'contain' }}
              onEnded={handleVideoEnd}
              onTimeUpdate={handleTimeUpdate}
              controls={false}
              playsInline
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-transparent to-transparent pointer-events-none" />
            
            {/* Play/Pause Button */}
            <motion.button
              onClick={(e) => {
                e.stopPropagation();
                handlePlayPause();
              }}
              className="absolute inset-0 flex items-center justify-center z-20"
              animate={{ opacity: isPlaying ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: isPlaying ? 1 : 1.1 }}
            >
              {!isPlaying && (
                <motion.div
                  className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl"
                  whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(220, 38, 38, 0.6)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-10 h-10 text-white fill-white" />
                </motion.div>
              )}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Section 2: CTA & Process */}
      {videoWatched && (
      <section className="relative z-10 px-6 lg:px-12 py-20 lg:py-32 bg-neutral-950/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: Process */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">Como Funciona</h2>
              
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Diagnóstico",
                    description: "Análise profunda do seu negócio, desafios e oportunidades"
                  },
                  {
                    step: "02",
                    title: "Planejamento",
                    description: "Criação de estratégia personalizada com metas claras"
                  },
                  {
                    step: "03",
                    title: "Implementação",
                    description: "Execução ágil com acompanhamento semanal"
                  },
                  {
                    step: "04",
                    title: "Resultados",
                    description: "Mensuração de impacto e otimizações contínuas"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600/20 border border-red-600/40">
                        <span className="text-red-500 font-bold">{item.step}</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-neutral-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-transparent to-transparent rounded-3xl blur-3xl" />
              <div className="relative bg-gradient-to-br from-red-600/10 to-transparent border border-red-600/20 rounded-3xl p-8 lg:p-12 text-center">
                <h3 className="text-2xl lg:text-3xl font-bold mb-4">Pronto para construir seu mecanismo?</h3>
                <p className="text-neutral-400 mb-8 leading-relaxed">
                  Vamos conversar sobre como posso ajudar seu negócio a crescer de forma sustentável e estratégica.
                </p>
                
                <motion.button
                  onClick={handleWhatsAppClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-2xl transition-colors mb-4"
                >
                  Agendar Consultoria
                </motion.button>

                <p className="text-sm text-neutral-500">
                  Resposta garantida em até 24 horas
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      )}
    </div>
  );
}
