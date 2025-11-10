import { motion } from "motion/react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { socialLinks } from "../config/links.tsx";
import { toast } from "sonner@2.0.3";

export function ContactCTA() {
  const handleWhatsAppClick = () => {
    const message = "Tenho%20interesse%20na%20sua%20consultoria%2C%20como%20funciona%3F";
    window.open(`https://wa.me/${socialLinks.whatsapp}?text=${message}`, "_blank");
    toast.success("Abrindo WhatsApp...");
  };

  return (
    <section className="relative z-10 px-6 lg:px-12 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        <div className="relative overflow-hidden bg-neutral-900 border border-neutral-800 rounded-3xl shadow-2xl">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-transparent" />
          
          {/* Grid pattern - more subtle */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />

          <div className="relative z-10 p-8 lg:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-3 py-1 bg-red-600/10 border border-red-600/20 rounded-full mb-6"
                >
                  <span className="text-red-500 text-sm">Contato Direto</span>
                </motion.div>

                <motion.h2 
                  className="text-white mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Vamos Trabalhar Juntos?
                </motion.h2>
                
                <motion.p 
                  className="text-neutral-400 mb-8 leading-relaxed"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  Tem um projeto em mente ou quer saber mais sobre meus serviços? 
                  Entre em contato comigo através dos canais abaixo.
                </motion.p>

                {/* Stats or highlights */}
                <motion.div 
                  className="flex gap-8 mb-8 lg:mb-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <div>
                    <div className="text-white mb-1">Resposta Rápida</div>
                    <div className="text-neutral-500 text-sm">Em até 24h</div>
                  </div>
                  <div className="border-l border-neutral-800 pl-8">
                    <div className="text-white mb-1">Sempre Disponível</div>
                    <div className="text-neutral-500 text-sm">7 dias por semana</div>
                  </div>
                </motion.div>
              </div>

              {/* Right side - Action buttons */}
              <motion.div 
                className="flex flex-col gap-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <motion.button
                  onClick={handleWhatsAppClick}
                  className="group relative overflow-hidden bg-neutral-800 border border-neutral-700 text-white px-8 py-5 rounded-2xl transition-all duration-300 hover:border-green-500/50 hover:bg-neutral-800/80"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-500/10 border border-green-500/20 rounded-xl flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-green-500" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm text-neutral-400 mb-0.5">WhatsApp</div>
                        <div className="font-medium">Conversar Agora</div>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
