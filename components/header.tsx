"use client";
import Image from 'next/image'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Playfair_Display } from 'next/font/google';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const playfair = Playfair_Display({ subsets: ['latin'] });

const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Nosotros', href: '/#nosotros' },
  { name: 'Servicios', href: '/#servicios' },
  { name: 'Catálogo', href: '/#catalogo' },
  { name: 'Proyectos', href: '/#proyectos' },
  { name: 'Johnson', href: '/bachas/#bachas' },
  { name: 'Contacto', href: '/#contacto' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
 

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
    className={`fixed w-full z-50 transition-all duration-300 ${
      mobileMenuOpen
        ? 'bg-white py-2 shadow-md'
        : isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2'
          : 'bg-transparent py-6'
    }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between" aria-label="Global">
          <div className="flex lg:flex-1">
          <Image
                src="/images/Logo.png"
                alt="Logo Dodera"
                width={40}
                height={40}
                className='mr-2'
              />
            <Link href="/" className="flex items-center">
              <span className=" text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}">
                Marmoleria<span className="text-orange-500">Dodera</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium tracking-wide hover:text-orange-500 transition-colors duration-300 ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          
          
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Abrir menú principal</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              className="fixed inset-y-0 right-0 z-50 w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              
              <div className="flex items-center justify-between">
              <Image
                src="/images/Logo.png"
                alt="Logo Dodera"
                width={40}
                height={40}
              />
                <Link href="#inicio" className="-m-1.5 p-1.5">
                  <span className="text-2xl font-bold text-gray-900">
                    Marmoleria<span className="text-orange-500">Dodera</span>
                  </span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Cerrar menú</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-orange-500 transition-colors rounded-lg"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}