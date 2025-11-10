import { motion, AnimatePresence } from "motion/react";
import { X, Home, User, Link as LinkIcon } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuItems = [
    { label: "Destaque", href: "#destaque", icon: Home },
    { label: "Sobre", href: "#sobre", icon: User },
    { label: "Todos os Links", href: "#todos", icon: LinkIcon },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-80 bg-slate-900 z-50 shadow-2xl"
          >
            <div className="p-6">
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <motion.button
                  onClick={onClose}
                  className="w-10 h-10 bg-slate-800 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Navigation Items */}
              <nav className="space-y-2">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-slate-800 text-white transition-colors group"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 10 }}
                    >
                      <div className="w-10 h-10 bg-red-600/20 group-hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span>{item.label}</span>
                    </motion.a>
                  );
                })}
              </nav>

              {/* Divider */}
              <div className="my-8 border-t border-slate-800" />

              {/* Footer Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center text-slate-400 text-sm"
              >
                <p>Central de Links</p>
                <p className="text-white mt-1">Yohann</p>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
