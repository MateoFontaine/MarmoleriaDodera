"use client";

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingWhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const phoneNumber = "+1234567890"; // Replace with actual phone number
  const defaultMessage = "Hola, me gustaría obtener más información sobre sus servicios.";
  
  const presetMessages = [
    "Hola, me gustaría obtener más información sobre sus servicios.",
    "Quisiera solicitar un presupuesto para un proyecto.",
    "¿Tienen disponibilidad para una consulta esta semana?",
    "Me interesa conocer sus opciones de mármol para cocina."
  ];
  
  const handleSendMessage = (message = defaultMessage) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };
  
  // Handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 300) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);
  
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-8 z-50 bg-white rounded-lg shadow-xl w-72 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4">
              <div className="flex justify-between items-center">
                <h3 className="text-white font-medium">Contáctanos</h3>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <p className="text-white/90 text-sm mt-1">
                Responderemos a la brevedad
              </p>
            </div>
            
            <div className="p-4">
              <p className="text-gray-600 text-sm mb-4">
                Selecciona un mensaje o escribe el tuyo propio en WhatsApp:
              </p>
              
              <div className="space-y-2 mb-4">
                {presetMessages.map((message, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(message)}
                    className="w-full text-left p-3 text-sm rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 transition-colors"
                  >
                    {message}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => handleSendMessage()}
                className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-lg flex items-center justify-center space-x-2 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Abrir WhatsApp</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed z-50 rounded-full shadow-lg transition-all duration-300"
        initial={{ bottom: "2rem", right: "2rem" }}
        animate={{ 
          bottom: isVisible ? "2rem" : "-5rem",
          right: "2rem",
          scale: isOpen ? 0.9 : 1
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-green-500 rounded-full blur-sm opacity-70 scale-110"></div>
          <div className="relative bg-green-500 text-white rounded-full p-4">
            <MessageCircle className="h-6 w-6" />
          </div>
          
          {/* Ping animation */}
          <span className="absolute top-0 right-0 h-full w-full rounded-full bg-green-500 opacity-75 animate-ping"></span>
        </div>
      </motion.button>
    </>
  );
}