import { motion } from "motion/react";
import { ArrowLeft, Calendar, Rocket, Code, Zap, TrendingUp, CheckCircle2 } from "lucide-react";
import ShaderBackground from "./ui/shader-background";
import { useEffect } from "react";
import Lenis from "lenis";
import devAceleradoImage from "../assets/dev-acelerado-hero.png";

interface DevAceleradoProps {
  onBack: () => void;
}

export function DevAcelerado({ onBack }: DevAceleradoProps) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const benefits = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Sistemas Autossustentáveis",
      description: "Aprenda a criar aplicações que geram valor contínuo e se mantêm sozinhas."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Arquitetura Replicável",
      description: "Metodologia comprovada para escalar seus projetos sem retrabalho."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Mercado 2026",
      description: "Domine as tecnologias e práticas que definirão o desenvolvimento em 2026."
    }
  ];

  const highlights = [
    "Stack moderna e escalável",
    "Automação de processos",
    "Monetização inteligente",
    "Deploy profissional",
    "Boas práticas de mercado",
    "Projetos reais do início ao fim"
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#101010' }}>
      <ShaderBackground />
      
      {/* Header with Back Button */}
      <motion.header 
        className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-12 py-4"
        initial={{ backgroundColor: "rgba(16,16,16,0)" }}
        animate={{ backgroundColor: "rgba(16,16,16,0.95)" }}
        style={{ backdropFilter: "blur(10px)" }}
      >
        <motion.button
          onClick={onBack}
          className="flex items-center gap-2 text-white hover:text-red-600 transition-colors group"
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-6 h-6" />
          <span className="text-lg">Voltar</span>
        </motion.button>
      </motion.header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600/20 border border-red-600/50 rounded-full mb-8"
            >
              <Calendar className="w-5 h-5 text-red-500" />
              <span className="text-red-400">Lançamento: 5 de Janeiro de 2026</span>
            </motion.div>
            
            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-10 flex justify-center"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-red-600/30 border-2 border-red-600/40 max-w-md">
                <img
                  src={devAceleradoImage}
                  alt="Dev Acelerado 2026"
                  className="w-full h-auto rounded-3xl"
                />
                {/* Efeito de feixe de luz */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none"
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut"
                  }}
                  style={{ 
                    width: "30%",
                    transform: "skewX(-20deg)"
                  }}
                />
              </div>
            </motion.div>
            
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight font-light tracking-tight">
              Dev Acelerado<br />
              <span className="text-red-600">2026</span>
            </h1>
            
            <p className="text-gray-300 text-2xl md:text-3xl max-w-4xl mx-auto mb-12 leading-relaxed">
              O curso definitivo para se tornar um desenvolvedor em 2026,<br />
              criando <span className="text-white">sistemas autossustentáveis e replicáveis</span>.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="flex items-center gap-3 text-gray-400 text-lg">
                <Zap className="w-6 h-6 text-red-500" />
                <span>Vagas limitadas para a primeira turma</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="relative py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl mb-6 font-light">
              Desenvolva sistemas que<br />
              <span className="text-red-600">trabalham por você.</span>
            </h2>
            
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Não é apenas sobre código. É sobre criar aplicações inteligentes que geram valor contínuo,<br />
              escalam sem esforço e se replicam para novos projetos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-red-600/20 rounded-2xl p-8 hover:border-red-600/50 transition-all"
              >
                <div className="w-16 h-16 bg-red-600/20 rounded-xl flex items-center justify-center text-red-500 mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-white text-2xl mb-3 font-light">{benefit.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="relative py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-red-600/30 rounded-3xl p-10 lg:p-16"
          >
            <h3 className="text-white text-3xl md:text-4xl mb-10 text-center font-light">
              O que você vai dominar:
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300 text-xl">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* LAUNCH DATE */}
      <section className="relative py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-600/20 to-red-800/20 border-2 border-red-600/40 rounded-3xl p-10 lg:p-16 text-center"
          >
            <Calendar className="w-24 h-24 text-red-500 mx-auto mb-8" />
            
            <h2 className="text-white text-5xl md:text-6xl lg:text-7xl mb-6 font-light">
              5 de Janeiro
            </h2>
            <p className="text-red-400 text-3xl md:text-4xl mb-8">
              2026
            </p>
            
            <div className="text-gray-200 text-lg md:text-xl leading-relaxed space-y-6 mb-10">
              <p className="text-2xl">
                Prepare-se para transformar sua carreira de desenvolvedor.
              </p>
              
              <p className="text-white text-xl max-w-3xl mx-auto">
                O <span className="text-red-500">Dev Acelerado 2026</span> vai te ensinar a criar sistemas que não apenas funcionam,
                mas que <span className="text-red-400">geram valor contínuo</span> e podem ser replicados para múltiplos projetos.
              </p>

              <div className="bg-zinc-950 border border-red-600/30 rounded-xl p-8 mt-10">
                <p className="text-gray-300 text-xl mb-4">
                  Seja um dos primeiros a saber quando as inscrições abrirem:
                </p>
                <a
                  href="https://wa.me/5562998550007?text=Quero%20saber%20mais%20sobre%20o%20Dev%20Acelerado%202026!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-10 py-5 bg-red-600 hover:bg-red-700 hover:scale-105 active:scale-95 text-white text-lg rounded-full shadow-2xl shadow-red-600/50 transition-all"
                  style={{ boxShadow: "0 0 40px rgba(220, 38, 38, 0.5)" }}
                >
                  Entrar na lista de espera <Rocket className="w-5 h-5 inline ml-2" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-20 px-6 lg:px-12 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-white text-4xl md:text-5xl mb-6 font-light">
              2026 começa com você<br />
              <span className="text-red-600">no próximo nível.</span>
            </h2>
            
            <p className="text-gray-300 text-xl mb-10 leading-relaxed">
              Não perca a oportunidade de fazer parte da primeira turma<br />
              do curso que vai redefinir sua carreira como desenvolvedor.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
