"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function WhatsappFloatButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50 group flex items-center">
      {/* Tooltip que aparece al hacer hover */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.3 }}
        className="hidden group-hover:flex absolute right-14 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg text-sm font-medium"
      >
        ¡Hola! ¿Cómo podemos ayudarte?
      </motion.div>

      {/* Botón de WhatsApp */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link
          href="https://api.whatsapp.com/send?phone=51980080232"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-lg flex items-center justify-center"
        >
          <FaWhatsapp className="w-6 h-6" />
        </Link>
      </motion.div>
    </div>
  );
}