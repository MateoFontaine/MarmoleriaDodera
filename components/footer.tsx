import Link from 'next/link';
import { Instagram, Facebook, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';
const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1 - Brand info */}
            <div className="lg:col-span-1">
              <Link href="#inicio" className="inline-block mb-6">
                <span className="text-2xl font-bold text-white">
                  Mármoles<span className="text-orange-500">Dodera</span>
                </span>
              </Link>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Expertos en mármol y piedras naturales de lujo para proyectos arquitectónicos exclusivos.
              </p>
              
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 text-gray-300" />
                </a>
                <a
                  href="mailto:marmoleriadodera@gmail.com"
                  className="bg-gray-800 hover:bg-gray-700 p-2 rounded-full transition-colors duration-300"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 text-gray-300" />
                </a>
              </div>
            </div>
            
            {/* Column 2 - Quick Links */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
                Enlaces Rápidos
                <div className="ml-2 h-px w-12 bg-orange-500/80"></div>
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'Inicio', href: '#inicio' },
                  { name: 'Nosotros', href: '#nosotros' },
                  { name: 'Servicios', href: '#servicios' },
                  { name: 'Catálogo', href: '#catalogo' },
                  { name: 'Proyectos', href: '#proyectos' },
                  { name: 'Johnson', href: '/bachas/#bachas' },
                  { name: 'Contacto', href: '#contacto' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="mr-2 h-px w-3 bg-gray-700 group-hover:w-5 group-hover:bg-orange-500 transition-all duration-300"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Column 3 - Services */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
                Servicios
                <div className="ml-2 h-px w-12 bg-orange-500/80"></div>
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'Corte y Fabricación', href: '#servicios' },
                  { name: 'Encimeras de Cocina', href: '#servicios' },
                  { name: 'Proyectos Arquitectónicos', href: '#servicios' },
                  { name: 'Acabados Especiales', href: '#servicios' },
                  { name: 'Restauración', href: '#servicios' },
                  { name: 'Mantenimiento', href: '#servicios' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-orange-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="mr-2 h-px w-3 bg-gray-700 group-hover:w-5 group-hover:bg-orange-500 transition-all duration-300"></span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Column 4 - Contact */}
            <div className="lg:col-span-1">
              <h3 className="text-lg font-semibold mb-6 text-white flex items-center">
                Contacto
                <div className="ml-2 h-px w-12 bg-orange-500/80"></div>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5 mr-3" />
                  <span className="text-gray-400">Francisco Borges 3101, Olivos, Buenos Aires</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-orange-500 flex-shrink-0 mr-3" />
                  <span className="text-gray-400">+54 11 2832-1647</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-orange-500 flex-shrink-0 mr-3" />
                  <span className="text-gray-400">Info@marmoleriadodera.com.ar</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <Link 
                  href="#contacto"
                  className="inline-flex items-center text-white bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  <span>Solicitar información</span>
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Marmoleria Dodera. Todos los derechos reservados.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-gray-400 text-sm">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-400 text-sm">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}