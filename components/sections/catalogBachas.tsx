"use client";

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
    name: 'Signature Enkel 75',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/01/Pileta_Signature_75_001-350x350.jpg'

  },
  {
    id: 2,
    name: 'SIGNATURE ENKEL SE 75 GB',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/01/Pileta_Signature_75GB_001-350x350.jpg'

  },
  {
    id: 3,
    name: 'SIGNATURE ENKEL SE 55',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/01/Pileta_Signature_75GB_001-350x350.jpg'

  },
  {
    id: 4,
    name: 'SIGNATURE ENKEL SE 55 GB',
    type: '',
    marca: '',
    usage: [],
    description: ' ',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/01/Pileta_Signature_75GB_001-350x350.jpg'

  },
  {
    id: 5,
    name: 'LUXOR SI85',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/02/Pileta_SI85_001-350x350.jpg'

  },
  {
    id: 6,
    name: 'ON 30A',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/01/Pileta_ON30_002-280x280.jpg'
  },
  {
    id: 7,
    name: 'LUXOR COMPACT SI71',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/04/Pileta_SI71_001-350x350.jpg'
  },
  {
    id: 8,
    name: 'LUXOR MINI SI55',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/01/Pileta_SI55_001-350x350.jpg'
  },
  {
    id: 9,
    name: 'QUADRA MAX Q71 A',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/01/Pileta_Q71A_001-350x350.jpg'
  },
  {
    id: 10,
    name: 'QUADRA MINI Q55 A',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/01/Pileta_Q55_003-350x350.jpg'
  },
  {
    id: 11,
    name: 'CURVE SI77',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/01/Pileta_Curve_001-350x350.jpg'
  },
  {
    id: 12,
    name: 'E 28',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/02/Pileta_E28_000-350x350.jpg'
  },
  {
    id: 13,
    name: 'E 37',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/02/Pileta_E37_000-350x350.jpg'
  },
  {
    id: 14,
    name: 'E 44',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/02/Pileta_E44_000-350x350.jpg'
  },
  {
    id: 15,
    name: 'E 50/18',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/02/Pileta_E50_000-350x350.jpg'
  },
  {
    id: 16,
    name: 'E 54',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/01/Pileta_E54_002-350x350.jpg'
  },
  {
    id: 17,
    name: 'E 60',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/03/Pileta_E60_A_001-350x350.jpg'
  },
  {
    id: 18,
    name: 'E 50',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/02/Pileta_E50_000-350x350.jpg'
  },
  {
    id: 19,
    name: 'O 37',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/02/Pileta_O37_001-350x350.jpg'
  },
  {
    id: 20,
    name: 'ON 30 A',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/01/Pileta_ON30_001-350x350.jpg'
  },
  {
    id: 21,
    name: 'QUADRA Q37',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/02/Pileta_Q37_000-350x350.jpg'
  },
  {
    id: 22,
    name: 'QUADRA Q40',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/02/Pileta_Q40_000-350x350.jpg'
  },
  {
    id: 23,
    name: 'T 34',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/02/Pileta_T34_000-350x350.jpg'
  },
  {
    id: 24,
    name: 'Z 52',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/02/Pileta_Z52_001-350x350.jpg'
  },
  {
    id: 25,
    name: 'ZN 52/18 A',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/02/Pileta_ZN52_000-350x350.jpg'
  },
  {
    id: 26,
    name: 'LN 50',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/01/Pileta_LN50_001-350x350.jpg'
  },
  {
    id: 27,
    name: 'QUADRA Q 084 A',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/01/Pileta_Q084_001-350x350.jpg'
  },
  {
    id: 28,
    name: 'QUADRA Q 085 A',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/01/Pileta_Q085_001-350x350.jpg'
  },
  {
    id: 29,
    name: 'QUADRA Q76',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/02/Pileta_Q76_000-350x350.jpg'
  },
  {
    id: 30,
    name: 'QUADRA Q76 A',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/01/Pileta_Q76A_001-350x350.jpg'
  },
  {
    id: 31,
    name: 'ZARA D84',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/01/Pileta_ZARAD84_001-350x350.jpg'
  },
  {
    id: 32,
    name: 'C 28',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/02/Pileta_C28_000-350x350.jpg'
  },
  {
    id: 33,
    name: 'C 37',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/02/Pileta_C37_000-350x350.jpg'
  },
  {
    id: 34,
    name: 'R 37',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/02/Pileta_R37_000-350x350.jpg'
  },
  {
    id: 35,
    name: 'R 63',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/02/Pileta_R63_000-350x350.jpg'
  },
  {
    id: 36,
    name: 'R 63/18 F',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/02/Pileta_R63-18F_000-350x350.jpg'
  },
  {
    id: 37,
    name: 'X 28',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/01/Pileta_X28_001-280x280.jpg'
  },
  {
    id: 38,
    name: 'AXA D78',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/01/Pileta_AXAD78A_001-350x350.jpg'
  },
  {
    id: 39,
    name: 'HYDRA J 107A',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/01/Pileta_HYDRAJ107_001-350x350.jpg'
  },
  {
    id: 40,
    name: 'BA 340L',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/01/Pileta_Baly340L_001-350x350.jpg'
  },
  {
    id: 41,
    name: 'O 250L',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/01/Pileta_O250_001-350x350.jpg'
  },
  {
    id: 42,
    name: 'O 300L',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/01/Pileta_O300L_001-350x350.jpg'
  },
  {
    id: 43,
    name: 'O 340L',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/01/Pileta_OV340L_001-350x350.jpg'
  },
  {
    id: 44,
    name: 'OV 330L',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/01/Pileta_OV330L_001-350x350.jpg'
  },
  {
    id: 45,
    name: 'OV 370L',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/01/Pileta_OV370L_001-350x350.jpg'
  },
  {
    id: 46,
    name: 'OV 440L',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/01/Pileta_OV440L_001-350x350.jpg'
  },
  {
    id: 47,
    name: 'DANNA',
    type: '',
    marca: '',
    usage: [],
    description: '',
    image: 'https://piletas.johnsonacero.com/wp-content/uploads/2025/01/Pileta_Danna_001-350x350.jpg'
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
    const message = `Hola, me interesa obtener más información sobre esta bacha "${marbleName}". ¿Podrían enviarme detalles sobre disponibilidad y precios?`;
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
    <section id="bachas" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Nuestro catálogo"
          title="Todas nuestras Bachas"
          position="center"
        />
        
        <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          {/* Search Bar */}
          <div className="relative w-full md:w-80">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-white focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
              placeholder="Buscar por nombre..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          {/* Filter Toggle Button */}
          
        </div>
        
        {/* Filter Panel */}
       
        
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
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
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
    </section>
  );
}