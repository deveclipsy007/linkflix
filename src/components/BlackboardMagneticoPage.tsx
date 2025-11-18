import { motion } from "motion/react";
import { ArrowLeft, Play, Zap, Video, BookOpen, Sparkles, CheckCircle, Clock, Users, TrendingUp, Lightbulb, Rocket, ChevronDown } from "lucide-react";
import { useState, useRef } from "react";
import narrativaImg from "../assets/narrativa.png";
import packdeVideosImg from "../assets/packdevideos.png";
import vslImg from "../assets/vsl.png";

interface BlackboardMagneticoPageProps {
  onBack: () => void;
}

export function BlackboardMagneticoPage({ onBack }: BlackboardMagneticoPageProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const [selectedBenefit, setSelectedBenefit] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [heroVideoPlaying, setHeroVideoPlaying] = useState(false);
  const [videoWatched60Seconds, setVideoWatched60Seconds] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  const vslVideoUrl = import.meta.env.VITE_BLACKBOARD_VSL_URL || "";

  const handleVideoTimeUpdate = () => {
    if (heroVideoRef.current && heroVideoRef.current.currentTime >= 60 && !videoWatched60Seconds) {
      setVideoWatched60Seconds(true);
    }
  };

  const faqs = [
    {
      q: "Como funciona o serviço?",
      a: "Você contrata o serviço, envia um briefing detalhado sobre seu produto/ideia, e nós entregamos em até 72 horas: Board de Assents completo, Pack de Vídeos cinematográficos e VSL Suprema gravada e pronta para usar."
    },
    {
      q: "Quanto tempo leva?",
      a: "Até 72 horas após você enviar o briefing. Você envia as informações, e recebe tudo pronto: estrutura da oferta, vídeos para anúncios/reels e a VSL que converte."
    },
    {
      q: "O que está incluso?",
      a: "Tudo que você precisa para lançar: Board de Assents (engenharia completa da oferta), Pack de Vídeos (Ads, Reels, Thumbnails), VSL Suprema gravada, roteiros, análise de mercado e consultoria estratégica."
    },
    {
      q: "Posso personalizar?",
      a: "100% personalizado. Você envia seu briefing com detalhes do seu negócio, público, objetivos. Nós criamos tudo do zero, adaptado exclusivamente para sua marca e mercado."
    },
    {
      q: "Como faço para contratar?",
      a: "Clique em 'Começar Agora' ou 'Agendar Consulta'. Você entrará em contato conosco, discutiremos sua ideia, e então você contrata o serviço e envia o briefing."
    },
    {
      q: "Existe garantia?",
      a: "Sim. Se em 30 dias você não estiver satisfeito com o resultado, devolvemos 100% do investimento. Sem perguntas, sem burocracia."
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(to bottom right, #1a0a0a, #2d0a0a, #000000)" }}>

      {/* Main Content */}
      <div className="pt-32 pb-12 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            className="mb-20 pt-12 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="mb-6 inline-block px-8 py-4 bg-gradient-to-r from-white/25 via-white/15 to-white/10 backdrop-blur-3xl border-2 border-red-400/90 rounded-full shadow-2xl shadow-red-500/40 hover:shadow-red-500/60 hover:border-red-300 transition-all duration-300 relative overflow-hidden"
              initial={{ opacity: 0, y: -15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              whileHover={{ y: -8, scale: 1.05 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-500/0 rounded-full blur-xl" />
              <span className="text-white font-light text-sm leading-relaxed relative z-10">Perdia horas com essa Po#& até entender algo simples sobre criação de vídeo.</span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              eu sei que você passa por isso...
            </h2>

            {/* Hero Video Section */}
            <motion.div
              className="mb-12 w-full max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div
                className="relative w-full aspect-video rounded-xl overflow-hidden bg-black cursor-pointer group"
                onClick={() => {
                  if (heroVideoRef.current) {
                    if (heroVideoRef.current.paused) {
                      heroVideoRef.current.play();
                      setHeroVideoPlaying(true);
                    } else {
                      heroVideoRef.current.pause();
                      setHeroVideoPlaying(false);
                    }
                  }
                }}
              >
                <video
                  ref={heroVideoRef}
                  src={new URL("../assets/1117 (1).mp4", import.meta.url).href}
                  className="w-full h-full object-cover"
                  muted={false}
                  preload="metadata"
                  playsInline
                  onTimeUpdate={handleVideoTimeUpdate}
                  onEnded={() => {
                    setHeroVideoPlaying(false);
                    if (heroVideoRef.current) {
                      heroVideoRef.current.currentTime = 0;
                      heroVideoRef.current.play();
                      setHeroVideoPlaying(true);
                    }
                  }}
                />
                {!heroVideoPlaying && (
                  <motion.div
                    className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500/40 to-red-600/30 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform border border-red-400/50 shadow-lg shadow-red-500/20"
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-10 h-10 text-white fill-white" />
                    </motion.div>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {videoWatched60Seconds && (
              <motion.p
                className="text-xl text-slate-300 max-w-3xl mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Você envia o briefing. Nós entregamos tudo pronto: Board de Assents, Pack de Vídeos cinematográficos e VSL Suprema que converte. Personalizado, profissional, lucrativo.
              </motion.p>
            )}
            {videoWatched60Seconds && (
              <motion.div
                className="flex flex-wrap gap-4 justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.button
                  className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Começar Agora
                </motion.button>
                <motion.button
                  className="px-8 py-3 border-2 border-red-600 text-red-500 hover:bg-red-600/10 font-bold rounded-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Saiba Mais
                </motion.button>
              </motion.div>
            )}
          </motion.div>

          {videoWatched60Seconds && (
            <>
          {/* Benefits Grid */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {[
              { icon: Clock, title: "72 Horas", description: "Entrega rápida e profissional", details: "Você envia o briefing e em até 72 horas recebe tudo pronto: Board de Assents estruturado, Pack de Vídeos cinematográficos e VSL Suprema gravada. Rápido, profissional e sem complicações." },
              { icon: TrendingUp, title: "Conversão Comprovada", description: "Estrutura que vende", details: "Nossa estrutura é baseada em anos de experiência em vendas e marketing. Cada elemento foi testado para maximizar conversões. Você recebe uma fórmula comprovada que funciona." },
              { icon: Users, title: "100% Personalizado", description: "Feito exclusivamente para você", details: "Nada de templates genéricos. Tudo é criado do zero, adaptado exclusivamente para seu produto, seu público e seu mercado. Você aprova cada etapa do processo." },
              { icon: Rocket, title: "Pronto para Lançar", description: "Tudo que você precisa", details: "Ao final dos 72 horas, você tem tudo pronto para lançar: estrutura de vendas, criativos de anúncio, reels para redes sociais e uma VSL profissional que converte." },
            ].map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={idx}
                  className="p-3 rounded-full bg-gradient-to-br from-red-600/20 to-red-700/10 border border-red-600/40 hover:border-red-600/80 transition-all relative cursor-pointer backdrop-blur-sm"
                  whileHover={{ scale: 1.1, y: -2 }}
                  onMouseEnter={() => setHoveredBenefit(idx)}
                  onMouseLeave={() => setHoveredBenefit(null)}
                  onClick={() => setSelectedBenefit(idx)}
                >
                  <Icon className="w-5 h-5 text-red-400" />
                  
                  {/* Glasmorphism Tooltip - Título apenas */}
                  {hoveredBenefit === idx && (
                    <motion.div
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-4 py-2 rounded-2xl whitespace-nowrap z-20 backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl"
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <p className="text-white text-xs font-medium">{benefit.title}</p>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Benefit Popup Modal */}
          {selectedBenefit !== null && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedBenefit(null)}
            >
              <motion.div
                className="bg-gradient-to-br from-red-950/80 to-black/80 border border-red-600/30 rounded-2xl p-8 max-w-md backdrop-blur-xl"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                {selectedBenefit !== null && (
                  <>
                    <div className="flex items-center gap-3 mb-4">
                      {(() => {
                        const benefits = [
                          { icon: Clock, title: "72 Horas", description: "Entrega rápida e profissional", details: "Você envia o briefing e em até 72 horas recebe tudo pronto: Board de Assents estruturado, Pack de Vídeos cinematográficos e VSL Suprema gravada. Rápido, profissional e sem complicações." },
                          { icon: TrendingUp, title: "Conversão Comprovada", description: "Estrutura que vende", details: "Nossa estrutura é baseada em anos de experiência em vendas e marketing. Cada elemento foi testado para maximizar conversões. Você recebe uma fórmula comprovada que funciona." },
                          { icon: Users, title: "100% Personalizado", description: "Feito exclusivamente para você", details: "Nada de templates genéricos. Tudo é criado do zero, adaptado exclusivamente para seu produto, seu público e seu mercado. Você aprova cada etapa do processo." },
                          { icon: Rocket, title: "Pronto para Lançar", description: "Tudo que você precisa", details: "Ao final dos 72 horas, você tem tudo pronto para lançar: estrutura de vendas, criativos de anúncio, reels para redes sociais e uma VSL profissional que converte." },
                        ];
                        const benefit = benefits[selectedBenefit];
                        const Icon = benefit.icon;
                        return (
                          <>
                            <Icon className="w-6 h-6 text-red-500" />
                            <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                          </>
                        );
                      })()}
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                      {(() => {
                        const benefits = [
                          { icon: Clock, title: "72 Horas", description: "Entrega rápida e profissional", details: "Você envia o briefing e em até 72 horas recebe tudo pronto: Board de Assents estruturado, Pack de Vídeos cinematográficos e VSL Suprema gravada. Rápido, profissional e sem complicações." },
                          { icon: TrendingUp, title: "Conversão Comprovada", description: "Estrutura que vende", details: "Nossa estrutura é baseada em anos de experiência em vendas e marketing. Cada elemento foi testado para maximizar conversões. Você recebe uma fórmula comprovada que funciona." },
                          { icon: Users, title: "100% Personalizado", description: "Feito exclusivamente para você", details: "Nada de templates genéricos. Tudo é criado do zero, adaptado exclusivamente para seu produto, seu público e seu mercado. Você aprova cada etapa do processo." },
                          { icon: Rocket, title: "Pronto para Lançar", description: "Tudo que você precisa", details: "Ao final dos 72 horas, você tem tudo pronto para lançar: estrutura de vendas, criativos de anúncio, reels para redes sociais e uma VSL profissional que converte." },
                        ];
                        return benefits[selectedBenefit].details;
                      })()}
                    </p>
                    <motion.button
                      className="w-full px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-lg transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedBenefit(null)}
                    >
                      Fechar
                    </motion.button>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}

          {/* VSL Video Section */}
          {vslVideoUrl && (
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Assista a VSL Suprema</h3>
              <div
                className="relative w-full aspect-video rounded-xl overflow-hidden bg-black cursor-pointer group"
                onClick={() => setIsVideoOpen(true)}
              >
                <video
                  ref={videoRef}
                  src={vslVideoUrl}
                  className="w-full h-full object-cover"
                  poster={vslVideoUrl}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-10 h-10 text-white fill-white" />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Images Section */}
          <motion.div
            className="mb-20 grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.img
              src={narrativaImg}
              alt="Narrativa"
              className="w-full rounded-lg shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(0)}
            />
            <motion.img
              src={packdeVideosImg}
              alt="Pack de Vídeos"
              className="w-full rounded-lg shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(1)}
            />
            <motion.img
              src={vslImg}
              alt="VSL"
              className="w-full rounded-lg shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(2)}
            />
          </motion.div>

          {/* Image Details Modal */}
          {selectedImage !== null && (
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="bg-gradient-to-br from-red-950/80 to-black/80 border border-red-600/30 rounded-2xl p-8 max-w-2xl backdrop-blur-xl"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                {selectedImage === 0 && (
                  <>
                    <h3 className="text-3xl font-bold text-white mb-4">Board de Assents</h3>
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                      O Board de Assents é a base estratégica do seu produto. Aqui estruturamos toda a engenharia da oferta, incluindo:
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 font-bold">•</span>
                        <span className="text-slate-300"><strong>Mapeamento de Objeções:</strong> Identificamos todas as possíveis objeções do seu público e preparamos respostas estratégicas.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 font-bold">•</span>
                        <span className="text-slate-300"><strong>Ângulos de Venda:</strong> Desenvolvemos múltiplos ângulos para abordar diferentes segmentos do seu público.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 font-bold">•</span>
                        <span className="text-slate-300"><strong>Promessa Irresistível:</strong> Criamos uma proposta de valor tão clara e atrativa que seu público não consegue recusar.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 font-bold">•</span>
                        <span className="text-slate-300"><strong>Narrativa Persuasiva:</strong> Estruturamos a história que converte estranhos em clientes.</span>
                      </li>
                    </ul>
                  </>
                )}
                {selectedImage === 1 && (
                  <>
                    <h3 className="text-3xl font-bold text-white mb-4">Pack de Vídeos</h3>
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                      Um conjunto cinematográfico completo de criativos profissionais, pronto para gerar cliques e atenção em todas as plataformas:
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 font-bold">•</span>
                        <span className="text-slate-300"><strong>Vídeos para Ads:</strong> Criativos otimizados para Google Ads, Facebook e Instagram com alta taxa de conversão.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 font-bold">•</span>
                        <span className="text-slate-300"><strong>Reels para Redes Sociais:</strong> Conteúdo viral e engajador para TikTok, Instagram Reels e YouTube Shorts.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 font-bold">•</span>
                        <span className="text-slate-300"><strong>Thumbnails Otimizadas:</strong> Capas profissionais que aumentam o clique em 300%.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 font-bold">•</span>
                        <span className="text-slate-300"><strong>Roteiros Prontos:</strong> Scripts testados que geram engajamento e conversão.</span>
                      </li>
                    </ul>
                  </>
                )}
                {selectedImage === 2 && (
                  <>
                    <h3 className="text-3xl font-bold text-white mb-4">VSL Suprema</h3>
                    <p className="text-slate-300 text-lg leading-relaxed mb-6">
                      Uma Video Sales Letter profissional e hipnotizante, estruturada para converter automaticamente:
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 font-bold">•</span>
                        <span className="text-slate-300"><strong>Estrutura de Persuasão:</strong> Seguimos a fórmula comprovada que converte 40%+ de espectadores em clientes.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 font-bold">•</span>
                        <span className="text-slate-300"><strong>Gatilhos Psicológicos:</strong> Utilizamos técnicas de persuasão baseadas em neurociência.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 font-bold">•</span>
                        <span className="text-slate-300"><strong>Call-to-Action Irresistível:</strong> Um CTA tão claro e urgente que seu público não consegue ignorar.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-500 font-bold">•</span>
                        <span className="text-slate-300"><strong>Roteiro Profissional:</strong> Gravado em estúdio com qualidade broadcast e edição de cinema.</span>
                      </li>
                    </ul>
                  </>
                )}
                <motion.button
                  className="w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(null)}
                >
                  Fechar
                </motion.button>
              </motion.div>
            </motion.div>
          )}

          {/* Three Pillars */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">
              O Que Você Recebe
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Board de Assents",
                  description: "Toda a engenharia da oferta estruturada",
                  details: ["Mapeamento de objeções", "Ângulos de venda", "Promessa irresistível", "Narrativa persuasiva"],
                  icon: BookOpen
                },
                {
                  title: "Pack de Vídeos",
                  description: "Criativos cinematográficos para anúncios",
                  details: ["Vídeos para Ads", "Reels para redes", "Thumbnails otimizadas", "Roteiros prontos"],
                  icon: Video
                },
                {
                  title: "VSL Suprema",
                  description: "Storytelling que hipnotiza e converte",
                  details: ["Estrutura de persuasão", "Gatilhos psicológicos", "Call-to-action irresistível", "Roteiro profissional"],
                  icon: Sparkles
                },
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={idx}
                    className="p-8 rounded-xl bg-gradient-to-br from-red-900/30 to-black/50 border border-red-600/30 hover:border-red-600/60 transition-all"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-8 h-8 text-red-500" />
                      <h4 className="text-xl font-bold text-white">{feature.title}</h4>
                    </div>
                    <p className="text-slate-300 mb-6">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.details.map((detail: string, detailIdx: number) => (
                        <li key={detailIdx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-300">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Process Section */}
          <motion.div
            className="mb-20 p-16 rounded-xl bg-gradient-to-br from-red-900/30 to-black/50 border border-red-600/30 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-white mb-8 text-center py-6">Como Funciona o Serviço</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Você Contrata", desc: "Escolha o serviço e faça o pagamento. Você terá acesso ao formulário de briefing." },
                { step: "2", title: "Envia o Briefing", desc: "Preencha com detalhes do seu produto, público, objetivos e tom de comunicação." },
                { step: "3", title: "Recebe Tudo Pronto", desc: "Em até 72 horas, você recebe: Board, Vídeos e VSL — tudo personalizado e pronto para lançar." },
              ].map((item, idx) => (
                <div key={idx} className="text-center p-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-600 to-red-700 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            className="mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-black text-white mb-12 text-center">
              Perguntas que você provavelmente tem
            </h3>
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  className="border border-red-600/30 rounded-lg overflow-hidden bg-red-900/20 hover:bg-red-900/40 transition-colors"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-red-900/30 transition-colors"
                  >
                    <span className="text-white font-bold text-lg">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-red-500 transition-transform ${
                        expandedFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedFaq === idx && (
                    <motion.div
                      className="px-6 py-4 border-t border-red-600/30 bg-red-900/20"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <p className="text-slate-300">{faq.a}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA Section */}
          <motion.div
            className="text-center py-16 px-8 rounded-xl bg-gradient-to-br from-red-900/40 to-black border border-red-600/30"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Lightbulb className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-4xl font-black text-white mb-4">
              Pronto para Lançar Seu Produto?
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Você tem a ideia. Nós temos a estrutura. Em 72 horas, você recebe tudo pronto para vender: Board de Assents, Pack de Vídeos e VSL Suprema — personalizado e profissional.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                className="px-10 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold rounded-lg transition-all text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Começar Agora
              </motion.button>
              <motion.button
                className="px-10 py-4 border-2 border-red-600 text-red-500 hover:bg-red-600/10 font-bold rounded-lg transition-all text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Agendar Consulta
              </motion.button>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.footer
            className="mt-20 pt-12 border-t border-red-600/30 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-slate-400 mb-2">© 2025 Blackboard Magnético - Todos os direitos reservados</p>
            <p className="text-slate-500 text-sm">Transformando ideias em máquinas de vendas</p>
          </motion.footer>
            </>
          )}
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && vslVideoUrl && (
        <motion.div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setIsVideoOpen(false)}
        >
          <motion.div
            className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={vslVideoUrl}
              controls
              autoPlay
              className="w-full h-full"
            />
            <motion.button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
