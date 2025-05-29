"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Search, Filter } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';
import { 
  Card, 
  CardContent
} from '@/components/ui/card';

const playfair = Playfair_Display({ subsets: ['latin'] });
// Sample data - replace with actual data
const marbleItems = [
  {
    id: 1,
    name: 'Awake',
    type: 'sinterizado',
    marca: '',
    usage: [],
    description: 'Estilo sutil con un espesor fino y elegante. (8mm o 12mm)',
    image: '/materiales/AWAKE.png'

  },
  {
    id: 2,
    name: 'Azul Labrador',
    type: 'Granito',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/azul-labrador.png'
  },
    {
    id: 3,
    name: 'Et Calacatta Gold',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Et Calacatta Gold.avif'
  },
  {
    id: 4,
    name: 'Negro Marquina',
    type: 'Marmoles',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/negro-marquina.png'
  }
];

const filterOptions = {
  types: ['cuarzo', 'granito', 'mármol', 'Sinterizado'],
  marca: ['Guidoni', 'Purastone', 'silestone', 'Pura prima', 'Suprastone', 'Dekton', 'Neolith', 'X stone'],
  usages: ['cocina', 'baño', 'suelo', 'pared', 'decorativo', 'exterior', 'iluminación']
};

// Simple SectionTitle component to avoid external imports
const SectionTitle = ({ subtitle, title, position = 'center' }: { 
  subtitle: string; 
  title: string; 
  position?: 'left' | 'center' | 'right';
}) => {
  const alignment = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };
  
  const linePosition = {
    left: 'mr-auto',
    center: 'mx-auto',
    right: 'ml-auto'
  };

  return (
    <motion.div 
      className={`${alignment[position]} max-w-2xl`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center mb-4">
        <div className={`h-px w-8 bg-orange-500 ${position === 'center' ? 'mr-3' : 'mr-3'}`}></div>
        <span className="text-sm uppercase tracking-wider text-orange-600 font-medium">
          {subtitle}
        </span>
        <div className={`h-px w-8 bg-orange-500 ${position === 'center' ? 'ml-3' : 'hidden'}`}></div>
      </div>
      
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      
      <div className={`h-1 w-20 bg-gradient-to-r from-orange-500 to-amber-500 mt-6 ${linePosition[position]}`}></div>
    </motion.div>
  );
};

export default function CatalogGrid() {
  const [activeFilters, setActiveFilters] = useState({
    type: [] as string[],
    usage: [] as string[]
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  // Estado para controlar la cantidad de elementos visibles
  const [visibleItems, setVisibleItems] = useState(12);

  // Handle filter changes
  const toggleFilter = (category: keyof typeof activeFilters, value: string) => {
    setActiveFilters(prev => {
      const newFilters = { ...prev };
      if (newFilters[category].includes(value)) {
        newFilters[category] = newFilters[category].filter(item => item !== value);
      } else {
        newFilters[category] = [...newFilters[category], value];
      }
      return newFilters;
    });
  };

  // Filter marble items based on active filters and search query
  const filteredItems = marbleItems.filter(item => {
    // Search query filter
    if (searchQuery && !item.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !item.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Check if all active type filters match
    if (activeFilters.type.length > 0 && !activeFilters.type.includes(item.type)) {
      return false;
    }
    
    
    // Check if at least one usage filter matches (if any are selected)
    if (activeFilters.usage.length > 0 && 
        (!item.usage || !item.usage.some(usage => activeFilters.usage.includes(usage)))) {
      return false;
    }
    
    return true;
  });

  // Obtener solo los elementos visibles
  const currentlyVisibleItems = filteredItems.slice(0, visibleItems);
  
  // Determinar si hay más elementos para cargar
  const hasMoreItems = visibleItems < filteredItems.length;
  
  // Función para cargar más elementos
  const loadMoreItems = () => {
    setVisibleItems(prev => prev + 12);
  };
  
  // Resetear el número de elementos visibles cuando cambian los filtros o la búsqueda
  useEffect(() => {
    setVisibleItems(12);
  }, [searchQuery, activeFilters]);

  // WhatsApp functionality
  const phoneNumber = "+1234567890"; // Replace with actual phone number
  const handleWhatsAppInquiry = (marbleName: string) => {
    const message = `Hola, me interesa obtener más información sobre el mármol "${marbleName}". ¿Podrían enviarme detalles sobre disponibilidad y precios?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  // Animation variants
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
    <section id="catalogo" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Nuestro catálogo"
          title="Descubre nuestra selección premium"
          position="center"
        />
        
      
        
        {/* Filter Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 bg-white rounded-lg shadow-sm p-6 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Type Filters */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Tipo de piedra</h3>
                  <div className="space-y-2">
                    {filterOptions.types.map((type) => (
                      <div key={type} className="flex items-center">
                        <input
                          id={`type-${type}`}
                          type="checkbox"
                          checked={activeFilters.type.includes(type)}
                          onChange={() => toggleFilter('type', type)}
                          className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`type-${type}`} className="ml-2 text-sm text-gray-700 capitalize">
                          {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Usage Filters */}
                <div>
                  <h3 className="font-medium text-gray-900 mb-3">Uso recomendado</h3>
                  <div className="space-y-2">
                    {filterOptions.usages.map((usage) => (
                      <div key={usage} className="flex items-center">
                        <input
                          id={`usage-${usage}`}
                          type="checkbox"
                          checked={activeFilters.usage.includes(usage)}
                          onChange={() => toggleFilter('usage', usage)}
                          className="h-4 w-4 text-orange-500 focus:ring-orange-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`usage-${usage}`} className="ml-2 text-sm text-gray-700 capitalize">
                          {usage}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Reset Filters Button */}
              {Object.values(activeFilters).flat().length > 0 && (
                <div className="mt-4 flex justify-end">
                  <button
                    className="text-sm text-orange-600 hover:text-orange-800"
                    onClick={() => setActiveFilters({ type: [], usage: [] })} 
                  >
                    Limpiar filtros
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Marble Grid using direct Card implementation */}
        <motion.div 
  className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>

          {currentlyVisibleItems.length > 0 ? (
            currentlyVisibleItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <Card className="overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group h-full">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex flex-wrap gap-2">
                          {item.usage && item.usage.map((use, idx) => (
                            <span 
                              key={idx}
                              className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded"
                            >
                              {use}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                      <span className="inline-block px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded capitalize">
                        {item.type}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center text-sm text-gray-500">
                        <span className="capitalize">{item.marca}</span>
                      </span>
                      
                      <button
                        onClick={() => handleWhatsAppInquiry(item.name)}
                        className="flex items-center space-x-1 text-sm font-medium text-orange-600 hover:text-orange-800 transition-colors py-1 px-2 rounded-full hover:bg-orange-50"
                      >
                        <MessageCircle className="h-4 w-4" />
                        <span>Consultar</span>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600">No se encontraron resultados con los filtros seleccionados.</p>
              <button
                className="mt-4 text-orange-600 hover:text-orange-800"
                onClick={() => {
                  setActiveFilters({ type: [], usage: [] });
                  setSearchQuery('');
                }}
              >
                Limpiar filtros
              </button>
            </div>
          )}
        </motion.div>
        
        {/* Botón "Ver más" */}
        {hasMoreItems && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={loadMoreItems}
              className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Ver más productos
            </button>
          </div>
        )}
      </div>

      <div className="mt-10 flex justify-center">
  <Link href="/materiales/#catalogo">
    <button
      className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
    >
      Ver más materiales
    </button>
  </Link>
</div>


      
    </section>
  );
}