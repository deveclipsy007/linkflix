import { useState, useRef, useCallback } from "react";
import { Play, Zap, Video, BookOpen } from "lucide-react";
import { toast } from "sonner";

interface BlackboardMagneticoProps {
  onCardClick?: () => void;
  onNavigate?: (url: string) => void;
  url?: string;
  isInternal?: boolean;
}

export function BlackboardMagnetico({ onCardClick, onNavigate, url = "#", isInternal = false }: BlackboardMagneticoProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Placeholder para URL do vídeo VSL - será configurável via env
  const vslVideoUrl = import.meta.env.VITE_BLACKBOARD_VSL_URL || "";

  const handleCardClick = useCallback(() => {
    if (onCardClick) {
      onCardClick();
    }
    toast.success("Abrindo Blackboard Magnético...");
    setTimeout(() => {
      if (isInternal && onNavigate) {
        onNavigate(url);
      } else if (url !== "#") {
        window.open(url, "_blank");
      }
    }, 400);
  }, [onCardClick, onNavigate, url, isInternal]);

  return (
    <div 
      className="relative w-full h-full rounded-lg overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-black shadow-2xl group cursor-pointer transition-all hover:shadow-2xl hover:shadow-amber-500/20"
      onClick={handleCardClick}
    >
      {/* Background com padrão */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Conteúdo Principal */}
      <div className="relative h-full flex flex-col justify-between p-6 md:p-8">
        {/* Header */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-400" />
            <span className="text-xs md:text-sm font-bold text-amber-400 uppercase tracking-wider">
              Novo Sistema
            </span>
          </div>
          <h3 className="text-xl md:text-2xl font-black text-white leading-tight">
            Blackboard<br />Magnético
          </h3>
        </div>

        {/* VSL Video Section */}
        <div className="my-6 space-y-3">
          {vslVideoUrl ? (
            <div
              className="relative w-full aspect-video rounded-lg overflow-hidden bg-black cursor-pointer group/video"
              onClick={() => setIsVideoOpen(true)}
            >
              <video
                ref={videoRef}
                src={vslVideoUrl}
                className="w-full h-full object-cover"
                poster={vslVideoUrl}
              />
              <div className="absolute inset-0 bg-black/40 group-hover/video:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover/video:scale-110 transition-transform">
                  <Play className="w-6 h-6 md:w-8 md:h-8 text-white fill-white" />
                </div>
              </div>
            </div>
          ) : (
            <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
              <div className="text-center space-y-2">
                <Video className="w-8 h-8 text-slate-400 mx-auto" />
                <p className="text-xs text-slate-400">VSL em breve</p>
              </div>
            </div>
          )}
        </div>

        {/* Features */}
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <BookOpen className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <span className="text-xs md:text-sm text-slate-300">
              <strong>Assents</strong> • Vídeos (Ads & Reels) • VSL Suprema
            </span>
          </div>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
            Transforme qualquer ideia em um produto que vira cliente todos os dias.
          </p>
        </div>

        {/* CTA Button */}
        <div className="pt-4">
          <button className="w-full px-4 py-2 md:py-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-black font-bold rounded-lg transition-all transform hover:scale-105 active:scale-95 text-sm md:text-base">
            Criar Produto Irresistível
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && vslVideoUrl && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={vslVideoUrl}
              controls
              autoPlay
              className="w-full h-full"
            />
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
