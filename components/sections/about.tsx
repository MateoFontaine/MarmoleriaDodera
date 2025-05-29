"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';
import SectionTitle from './SectionTitle';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function AboutUsSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const valueItems = [
    { 
      icon: <CheckCircle className="h-6 w-6 text-orange-500" />,
      title: 'Calidad suprema',
      description: 'Contamos con una gran variedad de materiales dependiendo del uso que se necesite.'
    },
    { 
      icon: <Award className="h-6 w-6 text-orange-500" />,
      title: 'Buena mano de obra',
      description: 'Con 4 generaciones, contamos con mucha experiencia en el rubro.'
    },
    { 
      icon: <Users className="h-6 w-6 text-orange-500" />,
      title: 'Atención personalizada',
      description: 'Puede acercarse a nuestro showroom o contactarnos por WhatsApp para aclarar sus dudas.'
    },
    { 
      icon: <Clock className="h-6 w-6 text-orange-500" />,
      title: 'Puntualidad',
      description: 'Respetamos los tiempos acordados en cada etapa del proyecto.'
    }
  ];

  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Nuestra historia"
          title="Tradición y excelencia en piedra natural"
          position="center"
        />
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Tres generaciones de pasión por el mármol
            </h3>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
            Desde 1975, Marmolería Dodera ha transformado espacios arquitectónicos en obras de arte. Nuestra historia comienza con Juan Orlando Dodera, y actualmente es manejada por sus nietos Alejandro Dodera y Mariano Dodera.            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed">
            Hoy, continuamos ese legado combinando técnicas tradicionales con la última tecnología. Nuestro compromiso persiste desde tantas décadas de experiencia y seguimos creando espacios que perduran en el tiempo.            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {valueItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  {item.icon}
                  <div>
                    <h4 className="font-medium text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="inline-flex items-center">
              
              <div>
                <p className="text-gray-900 font-medium">Alejandro Dodera</p>
                <p className="text-sm text-gray-600">Director General</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Images with decorative elements */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
          >
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about-main.jpg"
                alt="Taller de mármol"
                width={600}
                height={750}
                className="w-full h-auto object-cover"
              />
            </div>
            
            
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-orange-500/20 rounded-full"></div>
            <div className="absolute -bottom-10 right-20 w-16 h-16 bg-orange-500/10 rounded-full"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}