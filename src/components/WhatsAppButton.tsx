import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const WhatsAppButton = () => {
  return (
    <motion.a
      href={COMPANY.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center gap-4 px-6 py-4 rounded-[2rem] bg-[#25D366] text-white shadow-[0_20px_50px_rgba(37,211,102,0.4)] border border-white/20 hover:shadow-[0_30px_60px_rgba(37,211,102,0.5)] transition-all group overflow-hidden"
      whileHover={{ y: -8, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2, duration: 0.8, type: "spring", stiffness: 100 }}
      aria-label="Chat on WhatsApp"
    >
      {/* Premium Gloss Streak */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

      <div className="relative">
        <MessageCircle size={26} className="fill-white" />
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
      </div>

      <div className="flex flex-col items-start leading-none">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/70 mb-0.5">Contact Us</span>
        <span className="text-sm font-black tracking-tight whitespace-nowrap">
          Chat on <span className="italic font-light">WhatsApp</span>
        </span>
      </div>
    </motion.a>
  );
};

export default WhatsAppButton;
