import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/2348001234567?text=Hi%20LUMEN%2C%20I%27d%20like%20to%20ask%20about..."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with LUMEN Eye Care on WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 rounded-full bg-[#25D366] px-5 py-4 text-white shadow-2xl sm:bottom-8 sm:right-8"
    >
      <MessageCircle size={22} fill="white" className="text-[#25D366]" />
      <span className="hidden text-sm font-semibold sm:inline">Chat with us</span>
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40" />
    </motion.a>
  )
}