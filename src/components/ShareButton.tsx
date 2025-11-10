import { motion } from "motion/react";
import { Share2, Check } from "lucide-react";
import { useState, useCallback, memo } from "react";
import { toast } from "sonner@2.0.3";

export const ShareButton = memo(function ShareButton() {
  const [isShared, setIsShared] = useState(false);

  const handleShare = useCallback(async () => {
    const url = window.location.href;
    const title = "Links do Yohann";
    const text = "Confira todos os meus links e projetos!";

    // Try Web Share API first
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        setIsShared(true);
        toast.success("Compartilhado com sucesso!");
        setTimeout(() => setIsShared(false), 2000);
      } catch (err) {
        // User cancelled share
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(url);
        setIsShared(true);
        toast.success("Link copiado para a área de transferência!");
        setTimeout(() => setIsShared(false), 2000);
      } catch (err) {
        toast.error("Erro ao copiar link");
      }
    }
  }, []);

  return (
    <motion.button
      onClick={handleShare}
      className="fixed bottom-6 right-6 w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-2xl flex items-center justify-center z-40"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <motion.div
        animate={{ rotate: isShared ? 360 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isShared ? (
          <Check className="w-6 h-6" />
        ) : (
          <Share2 className="w-6 h-6" />
        )}
      </motion.div>
    </motion.button>
  );
});
