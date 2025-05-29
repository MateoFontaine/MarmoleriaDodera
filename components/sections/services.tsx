"use client";

import { motion } from 'framer-motion';
import { Slice, HomeIcon, Ruler, Palette, History, Hammer, Store } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { Rule } from 'postcss';

export default function ServicesGrid() {
  const services = [
    {
      icon: <Slice className="h-10 w-10" />,
      title: 'Corte y FabricaciónPresupuestos personalizados',
      description: ' Al contactarte con nosotros, te asesoramos en la elección del material más adecuado para tu proyecto. Una vez definido, te brindamos un presupuesto inmediato, claro y sin compromiso.',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: <Ruler className="h-10 w-10" />,
      title: 'Servicio de medición',
      description: 'Si aún no contás con las medidas exactas, nuestro equipo puede acercarse personalmente para tomar las dimensiones necesarias y asegurarnos de que todo se adapte perfectamente a tu espacio.',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: <History className="h-10 w-10" />,
      title: ' Entrega e instalación',
      description: 'Nuestro equipo se encarga de llevar e instalar las mesadas en tu domicilio, con todas las herramientas necesarias para asegurar un trabajo prolijo y de calidad.',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: <Palette className="h-10 w-10" />,
      title: 'Acabados Especiales',
      description: ' Realizamos cortes y pulidos a medida, garantizando una terminación de alta calidad antes de entregar la mesada dentro del plazo acordado.',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: <HomeIcon className="h-10 w-10" />,
      title: 'Showroom',
      description: ' Contamos con una oficina donde podés ver en persona nuestros materiales, recibir asesoramiento y resolver cualquier consulta que tengas.',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: <Store className="h-10 w-10" />,
      title: 'Venta de bachas',
      description: 'También ofrecemos una amplia variedad de bachas para cocinas, complementando tu proyecto con productos funcionales y estéticamente acordes.',
      color: 'from-amber-500 to-orange-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="servicios" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Nuestros servicios"
          title="Soluciones a medida para cada proyecto"
          position="center"
        />

        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 scale-150 blur-xl`}></div>
                    <div className={`relative bg-gradient-to-r ${service.color} text-white p-3 rounded-full`}>
                      {service.icon}
                    </div>
                  </div>
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 group-hover:bg-orange-50 transition-colors duration-300">
                    <div className="w-6 h-px bg-orange-500 transform transition-transform duration-300 group-hover:scale-150"></div>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
              
              <div className="h-1 w-0 bg-gradient-to-r from-amber-500 to-orange-600 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}