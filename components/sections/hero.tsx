"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Playfair_Display } from 'next/font/google';
import { ChevronDown } from 'lucide-react';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <section 
      id="inicio" 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url("https://st.hzcdn.com/simgs/pictures/kitchens/claremont-park-melissa-miranda-interior-design-img~58e194f70e1310a8_14-4330-1-2d85157.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
 // Fondo por defecto
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="absolute w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/images/marble-bg-poster.jpg" // Imagen fallback
        >
          <source src="/videos/marble-Dodera.mp4" type="video/mp4" />
        </video>
        {/* Overlay Oscuro para mejorar contraste */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4"
        >
          <div className="inline-block w-20 h-px bg-orange-500 mb-4" />
          <p className="text-sm uppercase tracking-[0.3em]">Artesanía en piedra natural</p>
        </motion.div>
        
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          La excelencia del <span className="text-orange-400">mármol</span> en cada detalle
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-12 text-gray-200 font-light"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Creamos ambientes exclusivos con las piedras más selectas del mundo
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#catalogo"
            className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:shadow-lg shadow-md hover:from-orange-600 hover:to-amber-600 transition-all duration-300"
          >
            Explorar Catálogo
          </a>
        </motion.div>
      </div>

  
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 border-l-2 border-t-2 border-orange-500/20"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 border-r-2 border-b-2 border-orange-500/20"></div>
    </section>
  );
}
