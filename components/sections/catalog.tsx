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
    name: 'Awake',
    type: 'sinterizado',
    marca: '',
    usage: [],
    description: 'Estilo sutil con un espesor fino y elegante. (8mm o 12mm)',
    image: '/materiales/AWAKE.png'

  },
  {
    id: 2,
    name: 'Ceppo',
    type: 'sinterizado',
    marca: '',
    usage: [],
    description: 'Diseño natural con textura sofisticada. (8mm o 12mm)',
    image:'/materiales/CEPPO.png'
  },
  {
    id: 3,
    name: 'Daze',
    type: 'sinterizado',
    marca: '',
    usage: [],
    description: 'Estética suave con un tono contemporáneo. (8mm o 12mm)',
    image: '/materiales/DAZE.png'
  },
  {
    id: 4,
    name: 'Grigio',
    type: 'sinterizado',
    marca: '',
    usage: [],
    description: ' Elegancia en tonos grises atemporales. (8mm o 12mm)',
    image: '/materiales/GRIGIO.png'
  },
  {
    id: 5,
    name: 'Keon 8mm',
    type: 'sinterizado',
    marca: '',
    usage: [],
    description: 'Estilo industrial con carácter moderno.',
    image: '/materiales/KEON.png'
  },
  {
    id: 6,
    name: 'Lucid',
    type: 'sinterizado',
    marca: '',
    usage: [],
    description: 'Claridad y minimalismo en una sola pieza. (8mm o 12mm)',
    image: '/materiales/LUCID.png'
  },
  {
    id: 7,
    name: 'Marmorio',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Clásico y versátil con apariencia marmolada. (8mm o 12mm)',
    image: '/materiales/MARMORIO.png'
  },
  {
    id: 8,
    name: 'Mopheus',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Diseño onírico con acabado sofisticado. (8mm o 12mm)',
    image: '/materiales/MOPHEUS.png'
  },
  {
    id: 9,
    name: 'Nebbia',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Tonos suaves inspirados en la niebla. (8mm o 12mm)',
    image: '/materiales/NEBBIA.png'
  },
  {
    id: 10,
    name: 'Neural',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: ' Estilo moderno con líneas sutiles y elegantes. (8mm o 12mm)',
    image: '/materiales/NEURAL.png'
  },
  {
    id: 11,
    name: 'Rem',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Inspiración clásica con un toque contemporáneo. (8mm o 12mm)',
    image: '/materiales/REM.png'
  },
  {
    id: 12,
    name: 'Somnia',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Superficie elegante con aire de ensueño. (8mm o 12mm)',
    image: '/materiales/SOMNIA.png'
  }
  ,
  {
    id: 13,
    name: 'Vigil',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Diseño sobrio con presencia imponente. (8mm o 12mm)',
    image: '/materiales/VIGIL.png'
  }
  ,
  {
    id: 14,
    name: 'Zenith',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Máxima expresión de elegancia y estilo. (8mm o 12mm)',
    image: '/materiales/ZENITH.png'
  },
  {
    id: 15,
    name: 'Bromo 12mm',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Intensidad oscura con carácter sofisticado.',
    image: '/materiales/BROMO.png'
  },
  {
    id: 16,
    name: 'Calacatta Natura',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Vetas refinadas sobre fondo claro y elegante.',
    image: '/materiales/CALACATTANATURA.png'
  }
  ,
  {
    id: 17,
    name: 'Danae',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Tonalidad cálida con estilo atemporal.',
    image: '/materiales/DANAE.png'
  }
  ,
  {
    id: 18,
    name: 'Domoos',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Profundidad mate con estética minimalista.',
    image: '/materiales/DOMOOS.png'
  }
  ,
  {
    id: 19,
    name: 'Halo',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Luminosidad suave con toque moderno.',
    image: '/materiales/HALO.png'
  }
  ,
  {
    id: 20,
    name: 'Kelya',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Elegancia sutil en tonos neutros.',
    image: '/materiales/KELYA.png'
  }
  ,
  {
    id: 21,
    name: 'Keos',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Suavidad natural con acabado contemporáneo.',
    image: '/materiales/KEOS.png'
  }
  ,
  {
    id: 22,
    name: 'Kira',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Tonalidad intensa con vetas elegantes.',
    image: '/materiales/KIRA.png'
  } ,
  {
    id: 23,
    name: 'Laurent',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Negro profundo con vetas doradas impactantes.',
    image: '/materiales/LAURENT.png'
  }
  ,
  {
    id: 24,
    name: 'Nilium',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'stilo minimalista en tonos suaves y neutros.',
    image: '/materiales/NILIUM.png'
  }
  ,
  {
    id: 25,
    name: 'Olimpo',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Blanco clásico con elegancia atemporal.',
    image: '/materiales/OLIMPO.png'
  },
  {
    id: 26,
    name: 'Opera',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Inspiración marmórea con un toque refinado.',
    image: '/materiales/OPERA.png'
  },
  {
    id: 27,
    name: 'Radium',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Estética metálica con carácter industrial.',
    image: '/materiales/RADIUM.png'
  }
  ,
  {
    id: 28,
    name: 'Sirius',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Superficie blanca con pureza y brillo excepcionales.',
    image: '/materiales/SIRIUS.png'
  },
  {
    id: 29,
    name: 'Trilium',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Estilo rústico con tonos oscuros y texturados.',
    image: '/materiales/TRILIUM.png'
  },
  {
    id: 30,
    name: 'Artic',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Blancura serena con un acabado fresco y limpio.',
    image: '/materiales/Artic.jpg'
  }
  ,
  {
    id: 31,
    name: 'Basalt',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Inspiración volcánica con textura sólida y natural.',
    image: '/materiales/Basalt.jpg'
  }
  ,
  {
    id: 32,
    name: 'Beton',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: ' Look cementicio con estilo urbano y moderno.',
    image: '/materiales/Beton.jpg'
  }
  ,
  {
    id: 33,
    name: 'Calacatta',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Mármol elegante con vetas amplias y contrastantes.',
    image: '/materiales/Calacatta.jpg'
  }
   ,
  {
    id: 34,
    name: 'Estatuario',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Clásico y lujoso, con vetas grises sobre blanco puro.',
    image: '/materiales/Estatuario.jpg'
  }
  ,
  {
    id: 35,
    name: 'Iron',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Apariencia metálica con fuerza y estilo industrial.',
    image: '/materiales/iron.jpg'
  }
  ,
  {
    id: 36,
    name: 'Nero',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Negro profundo con elegancia sobria y sofisticada.',
    image: '/materiales/Nero.jpg'
  }
  ,
  {
    id: 37,
    name: 'Pietra',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Textura pétrea con un diseño natural y versátil.',
    image: '/materiales/Pietra.jpg'
  }
  ,
  {
    id: 38,
    name: 'Zaha',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Negro intenso con vetas dinámicas y modernas.',
    image: '/materiales/Zaha.jpg'
  },
  {
    id: 39,
    name: 'Alpinus',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Tonos claros con un patrón natural y sofisticado.',
    image: '/materiales/Alpinus.jpeg'
  }
  ,
  {
    id: 40,
    name: 'Aria',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Suavidad y elegancia en tonos claros.',
    image: '/materiales/Aria.jpeg'
  }
  ,
  {
    id: 41,
    name: 'Aurora',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Tonos etéreos con un brillo sutil y elegante.',
    image: '/materiales/Aurora.jpeg'
  } ,
  {
    id: 42,
    name: 'Bianco',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Pureza y luminosidad en un blanco atemporal.',
    image: '/materiales/Bianco.jpeg'
  }
  ,
  {
    id: 43,
    name: 'Blanco',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Simplicidad y elegancia en su máxima expresión.',
    image: '/materiales/Blanco.jpeg'
  }
  ,
  {
    id: 44,
    name: 'Bronce',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Tonalidad cálida con un brillo metálico sofisticado.',
    image: '/materiales/Bronce.jpeg'
  }
  ,
  {
    id: 45,
    name: 'Calacatta',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Mármol distinguido con vetas elegantes y contrastantes.',
    image: '/materiales/Calacatta.jpeg'
  },
  {
    id: 46,
    name: 'Desert',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Tonos cálidos inspirados en paisajes arenosos.',
    image: '/materiales/Desert.jpeg'
  }
  ,
  {
    id: 47,
    name: 'Limestone',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: ' Apariencia natural con textura suave y terrosa.',
    image: '/materiales/Limestone.jpeg'
  }
  ,
  {
    id: 48,
    name: 'Macchia',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Vetas expresivas con un diseño impactante y sofisticado.',
    image: '/materiales/Macchia.jpeg'
  }
  ,
  {
    id: 49,
    name: 'Metro',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Estilo urbano con un acabado moderno y versátil.',
    image: '/materiales/Metro.jpeg'
  } ,
  {
    id: 50,
    name: 'Metro grey',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Tono gris urbano con un estilo contemporáneo.',
    image: '/materiales/MetroGrey.jpeg'
  } ,
  {
    id: 51,
    name: 'Onyx',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Transparencia y lujo con un brillo sofisticado.',
    image: '/materiales/Onyx.png'
  }
  ,
  {
    id: 52,
    name: 'Ora',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Tonalidad cálida con un toque elegante y atemporal.',
    image: '/materiales/Ora.jpeg'
  },
  {
    id: 53,
    name: 'Taj',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Inspiración majestuosa con vetas sofisticadas.',
    image: '/materiales/Taj.jpeg'
  },
  {
    id: 54,
    name: 'Titanium',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Fuerza y elegancia en un tono metálico sofisticado.',
    image: '/materiales/Titanium.jpeg'
  },
  {
    id: 55,
    name: 'Travertino',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Textura clásica con un encanto natural atemporal.',
    image: '/materiales/Travertino.jpeg'
  }
  ,
  {
    id: 56,
    name: 'Tundra',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Tonos fríos con una elegancia sutil y sofisticada.',
    image: '/materiales/Tundra.jpeg'
  } ,
  {
    id: 57,
    name: 'Verde',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Frescura natural con un tono vibrante y elegante.',
    image: '/materiales/Verde.jpeg'
  },
  {
    id: 58,
    name: 'AgedClay',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Tonalidad terrosa con un encanto rústico y cálido.',
    image: '/materiales/AgedClay.webp'
  }
  ,
  {
    id: 59,
    name: 'AlpinusWhite',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Blanco sofisticado con vetas naturales y delicadas.',
    image: '/materiales/AlpinusWhite.webp'
  }
  ,
  {
    id: 60,
    name: 'AlpiVerde',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Verde suave con inspiración en paisajes naturales.',
    image: '/materiales/AlpiVerdeA.webp'
  } ,
  {
    id: 61,
    name: 'AriaWhite',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Blancura serena con un toque elegante y moderno.',
    image: '/materiales/AriaWhite.webp'
  } ,
  {
    id: 62,
    name: 'ArsBeige',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: ' Beige cálido con un estilo sutil y refinado.',
    image: '/materiales/ArsBeige.webp'
  },
  {
    id: 63,
    name: 'AstanaGrey',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Gris moderno con un acabado elegante y versátil.',
    image: '/materiales/AstanaGrey.webp'
  },
  {
    id: 64,
    name: 'BianoLasa',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Blanco puro con vetas suaves y elegancia clásica.',
    image: '/materiales/BiancoLasa.webp'
  }
  ,
  {
    id: 65,
    name: 'BlueRoma',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Tonalidades azules con vetas únicas y sofisticadas.',
    image: '/materiales/BlueRoma.webp'
  },
  {
    id: 66,
    name: 'BottegaAcero',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Tonalidades azules con vetas únicas y sofisticadas.',
    image: '/materiales/BottegaAcero.webp'
  },
  {
    id: 67,
    name: 'BottegaAntracita',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Gris oscuro con estilo moderno e imponente',
    image: '/materiales/BottegaAntracita.webp'
  },
  {
    id: 68,
    name: 'BottegaCaliza',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Beige claro con un acabado suave y natural.',
    image: '/materiales/BottegaCaliza.webp'
  },
  {
    id: 69,
    name: 'BrecciaImperiale',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Vetas intensas con un diseño majestuoso y lujoso.',
    image: '/materiales/BrecciaImperiale.webp'
  }
  ,
  {
    id: 70,
    name: 'BrecciaImperiale',
    type: 'Sinterizado',
    marca: '',
    usage: [],
    description: 'Vetas intensas con un diseño majestuoso y lujoso.',
    image: '/materiales/BrecciaImperiale.webp'
  },
  {
    id: 71,
    name: 'Bianco gioia',
    type: 'Marmoles',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/bianco-gioia.png'
  }
  ,
  {
    id: 72,
    name: 'Arabescato',
    type: 'Marmoles',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/arabescato.png'
  },
  {
    id: 73,
    name: 'Bardiglio navolato',
    type: 'Marmoles',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/bardiglio-navolato.png'
  },
  {
    id: 74,
    name: 'Bianco Royal',
    type: 'Marmoles',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/bianco-royal.png'
  },
  {
    id: 75,
    name: 'Botticino',
    type: 'Marmoles',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/botticino.png'
  },
  {
    id: 76,
    name: 'Breccia Violeta',
    type: 'Marmoles',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/breccia-violeta.png'
  },
  {
    id: 77,
    name: 'Calacatta Dalmasia',
    type: 'Marmoles',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/calacatta-dalmasia.png'
  },
  {
    id: 78,
    name: 'Calacatta Vaggli oro',
    type: 'Marmoles',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/calacatta-vaggli-oro.png'
  },
  {
    id: 79,
    name: 'Carrara',
    type: 'Marmoles',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/carrara.png'
  },
  {
    id: 80,
    name: 'Crema Marfil',
    type: 'Marmoles',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/crema-marfil.png'
  },
  {
    id: 81,
    name: 'Crema Perlado',
    type: 'Marmoles',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/crema-perlado.png'
  },
  {
    id: 82,
    name: 'Galala',
    type: 'Marmoles',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/galala.png'
  },
  {
    id: 83,
    name: 'Goflan Silver',
    type: 'Marmoles',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/goflan-silver.png'
  },
  {
    id: 84,
    name: 'Marron Bosque',
    type: 'Marmoles',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/marron-bosque.png'
  },
  {
    id: 85,
    name: 'Marron Emperador',
    type: 'Marmoles',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/marron-emperador.png'
  },
  {
    id: 86,
    name: 'Negro Marquina',
    type: 'Marmoles',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/negro-marquina.png'
  },
  {
    id: 87,
    name: 'Piedra Jura Beige',
    type: 'Marmoles',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/piedra-jura-beige.png'
  },
  {
    id: 88,
    name: 'Piedra Jura Grey',
    type: 'Marmoles',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/piedra-jura-grey.png'
  },
  {
    id: 89,
    name: 'Portoro',
    type: 'Marmoles',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Portoro.jpg'
  },
  {
    id: 90,
    name: 'Rojo Alicante',
    type: 'Marmoles',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/rojo-alicante.png'
  },
  {
    id: 91,
    name: 'Rojo Verona',
    type: 'Marmoles',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/rojo-verona.png'
  },
  {
    id: 92,
    name: 'Rosa Perlino',
    type: 'Marmoles',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/rosa-perlino.png'
  },
  {
    id: 93,
    name: 'Statuario',
    type: 'Marmoles',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/statuario.png'
  },
  {
    id: 94,
    name: 'Travertino Alagua',
    type: 'Marmoles',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/travertino-alagua.png'
  },
  {
    id: 95,
    name: 'travertino Alaveta',
    type: 'Marmoles',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/travertino-alaveta.png'
  },
  {
    id: 96,
    name: 'Verde Bosque',
    type: 'Marmoles',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/verde-bosque.png'
  },
  {
    id: 97,
    name: 'Verde Oriental',
    type: 'Marmoles',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/verde-oriental.jpg'
  },
  {
    id: 98,
    name: 'Verde Remigiatto',
    type: 'Marmoles',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/verde-remigiatto.png'
  },
  {
    id: 99,
    name: 'Arcilla Red',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Arcilla Red.avif'
  },
  {
    id: 100,
    name: 'Azul Extremo',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/azulextremo.jpg'
  },
  {
    id: 101,
    name: 'Bianco Luxe',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Bianco_Luxe_PC3P26P20JC_PR.webp'
  },
  {
    id: 102,
    name: 'Bianco Silver',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Bianco_Silver_PC3P27P20JC_PR.webp'
  },
  {
    id: 103,
    name: 'Bianco Marmi',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/biancomarmi.jpg'
  },
  {
    id: 104,
    name: 'Blanco Maple',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/blanco maple.avif'
  },
  {
    id: 105,
    name: 'blanco Norte14',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/blanco Norte14.avif'
  },
  {
    id: 106,
    name: 'Blanco Aldan',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/blancoaldan.jpg'
  }
  ,
  {
    id: 107,
    name: 'Blanco Paloma',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/blancopaloma.jpg'
  },
  {
    id: 108,
    name: 'Blanco Puro',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/blancopuro.jpg'
  },
  {
    id: 109,
    name: 'Blanco Stellar',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/blancostellar.jpg'
  },
  {
    id: 110,
    name: 'Bohemian Flame',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Bohemian Flame.avif'
  },
  {
    id: 111,
    name: 'Brass Relish',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Brass Relish.avif'
  },
  {
    id: 112,
    name: 'Calacatta Divine',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/calacattadivine.png'
  },
  {
    id: 113,
    name: 'Calacatta Venato',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/calacattavenato.jpg'
  },
  {
    id: 114,
    name: 'Camden',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Camden.avif'
  },
  {
    id: 115,
    name: 'Charcoal Soapstone',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Charcoal Soapstone.avif'
  },
  {
    id: 116,
    name: 'Cinder Craze',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Cinder Craze.avif'
  },
  {
    id: 117,
    name: 'Concrete Pulse',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Concrete Pulse.avif'
  },
  {
    id: 118,
    name: 'Coral Clay Colour',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Coral Clay Colour.avif'
  },
  {
    id: 119,
    name: 'Corktown',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Corktown.avif'
  },
  {
    id: 120,
    name: 'Cremaclaro',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Cremaclaro.jpg'
  },
  {
    id: 121,
    name: 'Desert Silver',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Desert Silver.avif'
  },
  {
    id: 122,
    name: 'Eclectic Pearl',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Eclectic Pearl.avif'
  },
  {
    id: 123,
    name: 'Et Calacatta Gold',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Et Calacatta Gold.avif'
  },
  {
    id: 124,
    name: 'Et Marfil',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Et Marfil.avif'
  },
  {
    id: 125,
    name: 'Et Marquina',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Et Marquina.avif'
  },
  {
    id: 126,
    name: 'Et Noir',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Et Noir.avif'
  },
  {
    id: 127,
    name: 'Et Statuario',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Et Statuario.avif'
  },
  {
    id: 128,
    name: 'Ethereal Glow',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Ethereal Glow.avif'
  },
  {
    id: 129,
    name: 'Ethereal Noctis',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Ethereal Noctis.avif'
  },
  {
    id: 130,
    name: 'Faro White',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Faro White.avif'
  },
  {
    id: 131,
    name: 'Ferrara Gold',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Ferrara+Gold+29.jpg'
  },
  {
    id: 132,
    name: 'Basaltina',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Fotos_Basaltina-01.webp'
  },
  {
    id: 133,
    name: 'Blanco Glitter',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Fotos_Blanco-Glitter-01.webp'
  },
  {
    id: 134,
    name: 'Blue',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Fotos_Blue-01.webp'
  },
  {
    id: 135,
    name: 'Pink',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Fotos_Pink-01.webp'
  },
  {
    id: 136,
    name: 'Sat',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Fotos_Sat-01.webp'
  },
  {
    id: 137,
    name: 'Gris Claro',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/grisclaro.jpg'
  },
  {
    id: 138,
    name: 'Lagoon',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Lagoon.avif'
  },
  {
    id: 139,
    name: 'Gris Vizon',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/gris-vizon.png'
  },
  {
    id: 140,
    name: 'Lime Delight',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Lime Delight.avif'
  },
  {
    id: 141,
    name: 'Marengo',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Marengo.avif'
  },
  {
    id: 142,
    name: 'Miami Vena',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Miami Vena.avif'
  },
  {
    id: 143,
    name: 'Miami White',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Miami White.avif'
  },
  {
    id: 144,
    name: 'Marron Patagonia',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/marron-patagonia.png'
  },
  {
    id: 145,
    name: 'Negro Absoluto',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/negroabsoluto.jpg'
  },
  {
    id: 146,
    name: 'Negro Stellar',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/negrostellar.jpg'
  },
  {
    id: 147,
    name: 'Neromarmi',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/neromarmi.jpg'
  },
  {
    id: 148,
    name: 'Night Tebas',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Night Tebas18.avif'
  },
  {
    id: 149,
    name: 'Nolita',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Nolita.avif'
  },
  {
    id: 150,
    name: 'Parisien Bleu',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Parisien Bleu.avif'
  },
  {
    id: 151,
    name: 'Pearl Jasmine',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Pearl Jasmine.avif'
  },
  {
    id: 152,
    name: 'Poblenou',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Poblenou.avif'
  },
  {
    id: 153,
    name: 'Posidonia Green',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Posidonia Green.avif'
  },
  {
    id: 154,
    name: 'Raw G',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Raw G.avif'
  },
  {
    id: 155,
    name: 'Rojo Indigo',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/rojoindigo.jpg'
  },
  {
    id: 156,
    name: 'Rojo Stellar',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/rojo-stellar.jpg'
  },
  {
    id: 157,
    name: 'Romantic Ash',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Romantic Ash.avif'
  },
  {
    id: 158,
    name: 'Rougui',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Rougui.avif'
  },
  {
    id: 159,
    name: 'Snowy Ibiza',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Snowy Ibiza.avif'
  },
  {
    id: 160,
    name: 'Versailles Ivory',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Versailles Ivory.avif'
  },
  {
    id: 161,
    name: 'Victorian Silver',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Victorian Silver.avif'
  },
  {
    id: 162,
    name: 'White Storm',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/White Storm14.avif'
  },
  {
    id: 163,
    name: 'White Zeus',
    type: 'Cuarzo',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/White Zeus.avif'
  },
  {
    id: 164,
    name: 'Amarello Ornamental',
    type: 'Granito',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/AmarelloOrnamental.jpg'
  },
  {
    id: 165,
    name: 'Azul Labrador',
    type: 'Granito',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/azul-labrador.png'
  },
  {
    id: 166,
    name: 'Beige Mara',
    type: 'Granito',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/beige-mara.png'
  },
  {
    id: 167,
    name: 'Blackcosmic',
    type: 'Granito',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/blackcosmic.jpg'
  },
  {
    id: 168,
    name: 'Blanco Dallas',
    type: 'Granito',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/blancodallas.jpg'
  },
  {
    id: 169,
    name: 'Blanco Delicatrus',
    type: 'Granito',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/blanco-delicatrus.png'
  },
  {
    id: 170,
    name: 'Blanco Fortaleza',
    type: 'Granito',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/blancofortaleza.jpg'
  },
  {
    id: 171,
    name: 'Coffe Brown',
    type: 'Granito',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/coffe-brown.png'
  },
  {
    id: 172,
    name: 'Crema Julia',
    type: 'Granito',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/crema-julia.jpg'
  },
  {
    id: 173,
    name: 'Diamond White',
    type: 'Granito',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Diamond+White.jpg'
  },
  {
    id: 174,
    name: 'Gris Mara',
    type: 'Granito',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/gris-mara.png'
  },
  {
    id: 175,
    name: 'Gris Perla',
    type: 'Granito',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/gris-perla.png'
  },
  {
    id: 176,
    name: 'Kashmir White',
    type: 'Granito',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/kashmirwhite2.jpg'
  },
  {
    id: 177,
    name: 'Negro Boreal',
    type: 'Granito',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/NEGROBOREAL2.jpg'
  },
  {
    id: 178,
    name: 'Negro Brasil',
    type: 'Granito',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/NEGROBRASIL.jpg'
  },
  {
    id: 179,
    name: 'Negro Zimbabwe',
    type: 'Granito',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/negro-zimbabwe.jpg'
  },
  {
    id: 180,
    name: 'Oak Bamboo',
    type: 'Granito',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/oak-bamboo.png'
  },
  {
    id: 181,
    name: 'Rosa Antico',
    type: 'Granito',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/rosa-antico.png'
  },
  {
    id: 182,
    name: 'Rosa Del Salto',
    type: 'Granito',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/rosa-del-salto.png'
  },
  {
    id: 183,
    name: 'Sierra Chica Marron',
    type: 'Granito',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/sierrachicamarron.jpg'
  },
  {
    id: 184,
    name: 'Sierra Chica Rojo',
    type: 'Granito',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/sierra-chica-rojo.jpg'
  },
  {
    id: 185,
    name: 'Verde Butterfly',
    type: 'Granito',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/verde-butterfly.png'
  },
  {
    id: 186,
    name: 'Verde San Francsico',
    type: 'Granito',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/verde-sanfrancisco.png'
  },
  {
    id: 187,
    name: 'Versacce',
    type: 'Granito',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/Versacce.jpg'
  },
  {
    id: 188,
    name: 'White Primata',
    type: 'Granito',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/White+Primata.jpg'
  },
  {
    id: 189,
    name: 'Blanco Romano',
    type: 'Granito',
    marca: '',
    usage: [],
    description: '',
    image: '/materiales/WhiteGalaxy_BlancoRomano.jpg'
  }
];

const filterOptions = {
  types: ['Cuarzo', 'Granito', 'Marmoles', 'Sinterizado'],
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
    <section id="catalogo" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Nuestro catálogo"
          title="Descubre nuestra selección premium"
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
          <button
            className="flex items-center space-x-2 text-gray-700 py-2 px-4 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-5 w-5" />
            <span>Filtros</span>
            <span className="bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {Object.values(activeFilters).flat().length}
            </span>
          </button>
        </div>
        
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
    </section>
  );
}