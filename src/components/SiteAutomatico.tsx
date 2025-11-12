import { motion } from "motion/react";
import { ArrowLeft, Brain, Zap, BarChart3, Lock, Target, Clock, Eye, Smartphone, Search, FileCheck, Shield, TrendingUp, CheckCircle2, AlertCircle, ChevronDown } from "lucide-react";
import ShaderBackground from "./ui/shader-background";
import { useState, useEffect } from "react";
import Lenis from "lenis";
import foto02 from "../assets/foto02.png";
import foto01 from "../assets/foto01.png";
import foto03 from "../assets/foto03.png";
import portfolio1 from "../assets/Wen Launch_ Full Services Agency _ Website _ UX_UI 1.png";
import portfolio2 from "../assets/Stoicism Landing Page UI UX & 3D Design - Khai Luu 1.png";
import portfolio3 from "../assets/Squarespace website template for nutritionists and… 1.png";
import portfolio4 from "../assets/Real-Estate-Website-Design - Hamida Jannat ✪ 1.png";
import portfolio5 from "../assets/Necati - One Page Website Award 1.png";
import portfolio6 from "../assets/modelo de Site e e-commerce desenvolvidos para vendas com landing page, pagina de captura e página de lançamento para master class e masterclass 1.png";
import portfolio7 from "../assets/Landing Page 🌐 1.png";
import portfolio8 from "../assets/Free Dark Website Template Built in Framer 1.png";
import bbImage from "../assets/bb.png";

import video1112 from "../assets/1112.mp4";

interface SiteAutomaticoProps {
  onBack: () => void;
}

export function SiteAutomatico({ onBack }: SiteAutomaticoProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const parallaxImages = [
    {
      src: portfolio1,
      alt: 'Full Services Agency Website Design',
    },
    {
      src: portfolio2,
      alt: 'Stoicism Landing Page UI UX Design',
    },
    {
      src: portfolio3,
      alt: 'Nutritionist Website Template',
    },
    {
      src: portfolio4,
      alt: 'Real Estate Website Design',
    },
    {
      src: portfolio5,
      alt: 'One Page Website Award',
    },
    {
      src: portfolio6,
      alt: 'E-commerce Landing Page',
    },
    {
      src: portfolio7,
      alt: 'Modern Landing Page Design',
    },
    {
      src: portfolio8,
      alt: 'Dark Website Template Framer',
    },
  ];

  const systemFeatures = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Arquitetura de conversão psicológica",
      description: "Cada elemento posicionado para guiar o visitante até a ação. Design baseado em eye-tracking e neuromarketing."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Motor de automação inteligente",
      description: "Capturas entram direto no seu WhatsApp e e-mail. Resposta imediata. Zero fricção. Máxima conversão."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Dashboard de inteligência comercial",
      description: "Veja em tempo real: de onde vêm seus leads, quais páginas convertem mais, horários de pico. Tome decisões baseadas em dados, não achismos."
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Infraestrutura blindada + suporte vitalício",
      description: "Hospedagem premium, backups diários, SSL, velocidade máxima. Seu sistema nunca cai. E se precisar de algo, estamos aqui."
    }
  ];

  const extras = [
    "Otimização para mecanismos de busca (SEO)",
    "Design responsivo perfeito em qualquer dispositivo",
    "Páginas de vendas ilimitadas",
    "Formulários inteligentes com validação avançada"
  ];

  const steps = [
    {
      day: "Dia 1",
      title: "Inteligência",
      description: "Você envia as informações do seu negócio. Analisamos mercado, concorrência e oportunidades."
    },
    {
      day: "Dia 2",
      title: "Criação",
      description: "Desenvolvemos a arquitetura de conversão e apresentamos o layout estratégico para sua aprovação."
    },
    {
      day: "Dia 3",
      title: "Ativação",
      description: "Seu sistema entra no ar — otimizado, automatizado e pronto para capturar clientes 24/7."
    }
  ];

  const faqs = [
    {
      question: "O que é exatamente um sistema automático de clientes?",
      answer: "É uma plataforma inteligente que captura visitantes, qualifica interesse e envia cada lead diretamente pro seu WhatsApp e e-mail — com todas as informações necessárias pra você fechar a venda. Funciona 24/7, sem precisar de anúncios caros ou equipe dedicada."
    },
    {
      question: "O que está incluso no investimento?",
      answer: "Absolutamente tudo: estratégia de conversão, design profissional, desenvolvimento técnico, hospedagem premium, domínio, SSL, automações, dashboard de análise, suporte contínuo e manutenção mensal. Você não paga nada além do setup + mensalidade."
    },
    {
      question: "Quanto tempo leva pra entregar?",
      answer: "Até 72 horas após você enviar as informações do negócio. Se houver urgência especial, podemos acelerar."
    },
    {
      question: "Posso personalizar completamente?",
      answer: "Sim. Cada sistema é único e adaptado à identidade visual, tom de comunicação e objetivos da sua marca. Você aprova cada etapa."
    },
    {
      question: "Por que o valor está tão abaixo do real?",
      answer: "Porque durante a Black System Friday estamos abrindo vagas limitadas para testar expansão de mercado. É estratégico pra nós. É oportunidade única pra você."
    },
    {
      question: "E se eu não souber usar tecnologia?",
      answer: "Perfeito. O sistema foi feito justamente pra quem quer resultados sem complicação. Você só precisa responder os leads que chegam. O resto é automático."
    },
    {
      question: "Existe garantia?",
      answer: "Sim. Se em 30 dias você não estiver satisfeito com o sistema, devolvemos 100% do investimento. Sem perguntas, sem burocracia."
    },
    {
      question: "Apenas 10 sistemas nessa condição. Isso é real?",
      answer: "Completamente. Nossa equipe tem capacidade limitada pra manter a qualidade premium. Após os 10, voltamos ao valor de R$6.000 e fila de espera."
    }
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

      {/* SEÇÃO 1 - HERO / ABERTURA */}
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
              <AlertCircle className="w-5 h-5 text-red-500" />
              <span className="text-red-400">Apenas 10 sistemas nesta condição</span>
            </motion.div>
            
            <h1 className="text-white text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight">
              Seu site está custando clientes<br />
              <span className="text-red-600">todos os dias.</span><br />
              E você nem percebe.
            </h1>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex justify-center mb-8"
            >
              <video 
                src={video1112} 
                controls
                className="w-96 md:w-[32rem] lg:w-[40rem] h-auto object-contain"
              />
            </motion.div>
            
            <p className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto mb-4">
              Durante a Black System Friday, o sistema de aquisição automatizada da DX Tech — valor real <span className="text-white line-through">R$6.000</span> — está disponível por <span className="text-red-500">R$1.997</span>.
            </p>

            <p className="text-red-400 text-lg mb-10 flex items-center justify-center gap-2">
              <Zap className="w-5 h-5" /> Apenas 10 sistemas serão liberados nesta condição.
            </p>

            <div className="max-w-3xl mx-auto mb-12 bg-gradient-to-br from-zinc-900 to-zinc-950 border border-red-600/30 rounded-2xl p-8">
              <p className="text-gray-200 text-xl md:text-2xl leading-relaxed">
                Enquanto você dorme, seus concorrentes estão capturando os clientes que deveriam ser seus.
              </p>
              <p className="text-white text-xl md:text-2xl mt-4">
                Não é falta de produto. É falta de <span className="text-red-500">sistema</span>.
              </p>
            </div>

            <a
              href="https://wa.me/5562998550007?text=Tenho%20interesse%20no%20site%20autom%C3%A1tico%20da%20Black!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-red-600 hover:bg-red-700 hover:scale-105 active:scale-95 text-white text-lg rounded-full shadow-2xl shadow-red-600/50 transition-all"
              style={{ boxShadow: "0 0 40px rgba(220, 38, 38, 0.5)" }}
            >
              Ativar meu sistema agora — antes que acabe <Zap className="w-5 h-5 inline ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO 2 - O PROBLEMA */}
      <section className="relative py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl mb-10">
              Você não tem um problema de vendas.<br />
              Você tem um problema de <span className="text-red-600">sistema.</span>
            </h2>
            
            <div className="text-gray-300 text-lg md:text-xl leading-relaxed space-y-6 max-w-4xl mx-auto mb-12">
              <p>
                Todo dia, pessoas procuram exatamente o que você oferece.<br />
                Mas encontram seu concorrente primeiro.
              </p>
              <p>
                Porque enquanto seu site é apenas um cartão de visitas digital, outros negócios operam com <span className="text-white">máquinas de conversão automatizada</span> — capturando leads, qualificando contatos e fechando vendas sem esforço humano.
              </p>
              <p className="text-white text-xl">
                A diferença entre crescer e estagnar? <span className="text-red-500">Um sistema que vende enquanto você vive.</span>
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-red-600/20 to-red-800/20 border border-red-600/40 rounded-2xl p-8 max-w-3xl mx-auto"
            >
              <div className="relative overflow-hidden rounded-2xl border border-red-600/30 mb-6 max-w-sm mx-auto">
                <img
                  src={foto02}
                  alt="DX Tech - Sistema Automático"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-white text-2xl md:text-3xl mb-2 flex items-center justify-center gap-2">
                <TrendingUp className="w-8 h-8 text-red-500" /> 87% das empresas com sistemas automatizados
              </p>
              <p className="text-red-400 text-xl mb-3">
                reportam crescimento acima de 40% ao ano.
              </p>
              <p className="text-gray-400 text-sm">
                Fonte: HubSpot, 2024
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO 2.5 - PORTFÓLIO GLOBAL */}
      <section className="relative py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Headline minimalista */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-white text-5xl md:text-7xl lg:text-8xl font-light mb-8 tracking-tight">
              Sites magnéticos.<br />
              <span className="text-red-600">Resultados globais.</span>
            </h2>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Nesta Black System Friday decidi abrir uma janela exclusiva para o Brasil. É o momento de colocar
              nossa tecnologia de conversão premium nas mãos de quem está pronto para ocupar mais espaço no mercado
              nacional.
            </p>
          </motion.div>

          {/* Carrossel com rolagem automática */}
          <div className="relative w-full overflow-hidden mb-20">
            <motion.div
              className="flex gap-4 px-6"
              animate={{
                x: [0, -1800],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {/* Duplicar imagens para loop infinito */}
              {[...parallaxImages, ...parallaxImages, ...parallaxImages].map((image, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 overflow-hidden rounded-2xl group cursor-pointer"
                  style={{ width: '200px', height: '300px' }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Pricing Minimalista */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-gray-400 text-lg mb-6">Anos vendendo por</p>
            <div className="flex items-center justify-center gap-8 mb-8">
              <span className="text-gray-500 text-6xl font-light line-through">$1,200 dólares (aproximadamente 6 mil reais)</span>
              <span className="text-gray-500 text-6xl">→</span>
              <div className="relative">
                <span className="text-white text-6xl font-bold drop-shadow-2xl leading-none px-8 py-4 inline-block">R$1.997</span>
                <span className="block text-red-500 text-6xl font-bold uppercase tracking-wider mt-4 animate-pulse">Black Friday Brasil</span>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              Mesmo sistema completo. Preço democratizado.<br />
              <span className="text-gray-400">Para quem não tem R$6.000 para investir.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO 3 - O SISTEMA */}
      <section className="relative py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl mb-8">
              Sistema Automático de Aquisição <span className="text-red-600">DX</span>
            </h2>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex justify-center"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-red-600/30 border-2 border-red-600/40 max-w-3xl">
                <img
                  src={foto01}
                  alt="Sistema Automático DX"
                  className="w-full h-auto rounded-2xl"
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
            
            <p className="text-gray-400 text-xl mb-6">
              A máquina que seus concorrentes não querem que você conheça.
            </p>
            <p className="text-gray-300 text-2xl max-w-3xl mx-auto">
              Transforme tráfego em receita. <span className="text-white">Automaticamente. Continuamente. Lucrativamente.</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {systemFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-red-600/20 rounded-2xl p-8 hover:border-red-600/50 transition-all"
              >
                <div className="w-16 h-16 bg-red-600/20 rounded-xl flex items-center justify-center text-red-500 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-white text-2xl mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-red-600/30 rounded-2xl p-8 lg:p-10"
          >
            <h3 className="text-white text-2xl md:text-3xl mb-6 text-center flex items-center justify-center gap-3">
              <Shield className="w-8 h-8 text-red-500" /> Extras que multiplicam resultados:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {extras.map((extra, index) => (
                <motion.div
                  key={extra}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-300 text-lg">{extra}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO 4 - A OFERTA BLACK SYSTEM FRIDAY */}
      <section className="relative py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-600/10 to-transparent border-2 border-red-600/40 rounded-3xl p-10 lg:p-16"
          >
            <div className="text-center mb-10">
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl mb-6">
                Sistema premium de <span className="line-through text-gray-400">R$6.000</span><br />
                disponível por <span className="text-red-500">R$1.997</span>.
              </h2>
              
              <p className="text-gray-300 text-xl mb-8">
                Esta não é uma promoção.<br />
                É uma <span className="text-white">janela de oportunidade</span> que se fecha em breve.
              </p>
            </div>

            <div className="text-gray-300 text-lg md:text-xl leading-relaxed space-y-6 mb-10">
              <p>
                Durante a Black System Friday, você garante seu Sistema Automático de Aquisição completo — design estratégico, automação avançada, infraestrutura premium e suporte contínuo — por apenas:
              </p>
              
              <div className="bg-zinc-950 border border-red-600/30 rounded-xl p-8 text-center">
                <p className="text-red-400 text-3xl md:text-4xl mb-2">
                  R$1.997 <span className="text-gray-500 text-xl">(setup único)</span>
                </p>
                <p className="text-white text-2xl">
                  + R$250/mês <span className="text-gray-400 text-lg">(manutenção total)</span>
                </p>
              </div>

              <p>
                Comparado ao investimento real de R$6.000, você está economizando <span className="text-red-500">R$4.003</span>.
              </p>
              
              <p className="text-white text-xl bg-red-600/20 border border-red-600/40 rounded-xl p-6">
                Mas aqui está o que poucos percebem: se esse sistema gerar apenas <span className="text-red-400">3 clientes por mês</span>, ele já se pagou. E continuará gerando muito mais, mês após mês.
              </p>

              <div className="bg-red-600/10 border-2 border-red-600 rounded-xl p-6 text-center">
                <p className="text-red-400 text-xl flex items-center justify-center gap-2">
                  <AlertCircle className="w-6 h-6" /> <span className="text-white">ATENÇÃO:</span> Apenas 10 sistemas serão liberados nesta condição.<br />
                  Quando acabar, acabou.
                </p>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://wa.me/5562998550007?text=Tenho%20interesse%20no%20site%20autom%C3%A1tico%20da%20Black!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-5 bg-red-600 hover:bg-red-700 hover:scale-105 active:scale-95 text-white text-lg rounded-full shadow-2xl shadow-red-600/50 transition-all"
                style={{ boxShadow: "0 0 40px rgba(220, 38, 38, 0.5)" }}
              >
                Quero meu sistema antes que os 7 esgotem <Zap className="w-5 h-5 inline ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO 5 - COMO FUNCIONA */}
      <section className="relative py-20 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl mb-4">
              De briefing a sistema ativo em <span className="text-red-600">72 horas.</span>
            </h2>
            <p className="text-gray-300 text-2xl mb-8">
              Rápido, profissional, lucrativo.
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 flex justify-center"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-red-600/30 border-2 border-red-600/40 max-w-4xl">
                <img
                  src={foto03}
                  alt="Sistema em 72 horas"
                  className="w-full h-auto rounded-2xl"
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
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.day}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-red-600/20 rounded-2xl p-8 hover:border-red-600/40 transition-all text-center"
              >
                <div className="w-20 h-20 bg-red-600/20 border-2 border-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-red-500 text-2xl">{step.day}</span>
                </div>
                <h3 className="text-white text-2xl mb-4">{step.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-white text-2xl md:text-3xl">
              Simples pra você. Sofisticado pra quem visita. <span className="text-red-600">Lucrativo todos os dias.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO 6 - AUTORIDADE E CONFIANÇA */}
      <section className="relative py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-white text-4xl md:text-5xl mb-6">
              Desenvolvido pela <span className="text-red-600">DX Tech</span>
            </h2>
            <p className="text-gray-400 text-xl mb-10">
              Especialistas em sistemas de aquisição automatizada e inteligência digital.
            </p>
            
            <div className="text-gray-300 text-lg md:text-xl leading-relaxed space-y-6 mb-12">
              <p className="text-white text-2xl">
                A DX Tech não cria sites.<br />
                Construímos <span className="text-red-500">sistemas de lucro previsível</span>.
              </p>
              <p>
                Nossos clientes não "esperam aparecer oportunidades" — eles as criam automaticamente, todos os dias.
              </p>
              <p>
                A Black System Friday é o momento em que abrimos nossa tecnologia premium para negócios ambiciosos que entendem: <span className="text-white">investir em sistema não é gasto, é vantagem competitiva</span>.
              </p>
            </div>

            {/* Depoimento do Cliente */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-zinc-900 to-zinc-950 border-l-4 border-red-600 rounded-xl p-8 mb-8"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-red-500 text-2xl">CM</span>
                </div>
                <div className="text-left">
                  <p className="text-gray-200 text-lg md:text-xl italic leading-relaxed">
                    "Nosso sistema da DX Tech gerou <span className="text-red-400">47 leads qualificados no primeiro mês</span>. Em 90 dias, recuperamos o investimento 8x."
                  </p>
                  <p className="text-red-500 text-lg mt-4">
                    — Carlos Mendes, CEO da Construtora Horizonte
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Citação CEO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-600/20 to-transparent border border-red-600/40 rounded-xl p-8"
            >
              <p className="text-gray-200 text-xl md:text-2xl italic leading-relaxed mb-4">
                "Sites bonitos são commodity. Sistemas que vendem são raridade. É isso que entregamos."
              </p>
              <p className="text-red-500 text-lg">
                — Yohann, CEO da DX Tech
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO 7 - URGÊNCIA TEMPORAL */}
      <section className="relative py-20 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-red-600/20 to-red-800/20 border-2 border-red-600/40 rounded-3xl p-10 lg:p-16 text-center"
          >
            <Clock className="w-24 h-24 text-red-500 mx-auto mb-8" />
            
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl mb-4">
              A Black System Friday
            </h2>
            <p className="text-red-400 text-3xl md:text-4xl mb-12">
              termina em breve.
            </p>
            
            <div className="text-gray-200 text-lg md:text-xl leading-relaxed space-y-6 mb-10">
              <p className="text-2xl">
                Quando o tempo acabar, acontecem duas coisas:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                <div className="bg-zinc-950 border border-red-600/30 rounded-xl p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-red-600/20 rounded-full mb-4 mx-auto">
                    <span className="text-red-400 text-2xl font-bold">1</span>
                  </div>
                  <p className="text-white text-xl">O valor retorna para R$6.000</p>
                </div>
                <div className="bg-zinc-950 border border-red-600/30 rounded-xl p-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-red-600/20 rounded-full mb-4 mx-auto">
                    <span className="text-red-400 text-2xl font-bold">2</span>
                  </div>
                  <p className="text-white text-xl">A fila de espera volta<br />(atualmente 14 dias)</p>
                </div>
              </div>

              <p className="text-2xl text-white">
                Você tem duas escolhas agora:
              </p>

              <div className="space-y-4">
                <div className="bg-green-600/10 border border-green-600/40 rounded-xl p-6 flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-left text-white text-xl">
                    Garantir sua vaga por R$1.500 e começar a capturar clientes em 72 horas
                  </p>
                </div>
                <div className="bg-red-600/10 border border-red-600/40 rounded-xl p-6 flex items-start gap-4">
                  <AlertCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                  <p className="text-left text-white text-xl">
                    Ou perder a janela e continuar competindo com as mesmas ferramentas que não funcionam
                  </p>
                </div>
              </div>

              <p className="text-white text-2xl mt-10">
                A diferença entre os negócios que crescem e os que estagnam?<br />
                <span className="text-red-500">Os que crescem agem quando a oportunidade aparece.</span>
              </p>
            </div>

            <a
              href="https://wa.me/5562998550007?text=Tenho%20interesse%20no%20site%20autom%C3%A1tico%20da%20Black!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-5 bg-red-600 hover:bg-red-700 hover:scale-105 active:scale-95 text-white text-lg rounded-full shadow-2xl shadow-red-600/50 transition-all"
              style={{ boxShadow: "0 0 40px rgba(220, 38, 38, 0.5)" }}
            >
              Sim, quero meu sistema agora — antes que os 7 esgotem <Zap className="w-5 h-5 inline ml-2" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO 8 - FAQ */}
      <section className="relative py-20 px-6 lg:px-12 mb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white text-4xl md:text-5xl lg:text-6xl mb-4">
              Perguntas que você<br />
              <span className="text-red-600">provavelmente tem:</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-red-600/20 rounded-xl overflow-hidden hover:border-red-600/40 transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-red-600/5 transition-colors"
                >
                  <span className="text-white text-lg md:text-xl pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-6 h-6 text-red-500 flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 text-gray-300 text-lg leading-relaxed border-t border-red-600/10 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
