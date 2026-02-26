import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { COMPANY } from "@/lib/constants";

const WhatsAppButton = () => {
  return (
    <motion.a
      href={COMPANY.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg animate-pulse-glow"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="white" />
    </motion.a>
  );
};

export default WhatsAppButton;
