"use client";

import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import SectionTitle from './SectionTitle';
import Map from './Map';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  submit?: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  // Set current URL after component mount
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const phoneNumber = "+5491128321647"; // Número real

  const handleWhatsAppClick = () => {
    const message = "Hola, me gustaría obtener más información sobre sus servicios.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }
    if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Enviar el formulario a FormSubmit.co realmente
      e.currentTarget.submit();
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setErrors({ submit: `Hubo un error al enviar el formulario` });
      setIsSubmitting(false);
    }
  };
  

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Contáctanos"
          title="¿Cómo podemos ayudarte?"
          position="center"
        />
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left side - Contact info */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Información de contacto</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Dirección</h4>
                  <p className="text-gray-600">Francisco Borges 3101, Olivos, Buenos Aires</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Teléfono</h4>
                  <p className="text-gray-600">+54 11 2832-1647</p>
                  <p className="text-gray-600">4790 - 1429</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Email</h4>
                  <p className="text-gray-600">Info@marmoleriadodera.com.ar</p>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="font-medium text-gray-900 mb-4">Horario de atención</h4>
              <div className="space-y-2 text-gray-600">
                <p className="flex justify-between">
                  <span>lunes a viernes:</span>
                  <span>8:00 - 12:00</span>
                  <span>13:00 - 17:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Sabado y Domingo:</span>
                  <span>Cerrado</span>
                </p>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-100 hover:bg-orange-100 text-gray-600 hover:text-orange-600 p-3 rounded-full transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="h-7 w-7" />
                </a>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-gray-100 hover:bg-green-100 text-gray-600 hover:text-green-600 p-3 rounded-full transition-colors duration-300"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="h-7 w-7" />
                </button>
              </div>
            </div>
          </motion.div>
          
          {/* Right side - Contact form */}
          <motion.div 
            className="lg:col-span-3 bg-white rounded-xl shadow-sm p-8 border border-gray-100"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Send className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">¡Mensaje enviado!</h3>
                <p className="text-gray-600">Gracias por contactarnos. Nos pondremos en contacto contigo a la brevedad posible.</p>
              </div>
            ) : (
              <form 
                action="https://formsubmit.co/marmoleriadodera@gmail.com" 
                method="POST"
                onSubmit={handleSubmit}
>

                {/* FormSubmit.co configuración */}
                <input type="hidden" name="_subject" value="Nuevo mensaje de contacto" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://marmoleriadodera.com/#contacto" />
                <input type="text" name="_honey" style={{ display: 'none' }} />
            
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-orange-500 focus:ring-orange-500'
                      } transition-colors`}
                      placeholder="Tu nombre"
                      required
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>
                  
                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-orange-500 focus:ring-orange-500'
                      } transition-colors`}
                      placeholder="Tu email"
                      required
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                {/* Phone Field */}
                <div className="mb-6">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono (opcional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-orange-500 focus:ring-orange-500 transition-colors"
                    placeholder="Tu teléfono"
                  />
                </div>
                
                {/* Message Field */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-orange-500 focus:ring-orange-500'
                    } transition-colors`}
                    placeholder="¿En qué podemos ayudarte?"
                    required
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>
                
                {/* Submit error message if any */}
                {errors.submit && (
                  <div className="mb-6 p-3 bg-red-50 text-red-700 rounded-lg">
                    {errors.submit}
                  </div>
                )}
                
                {/* Submit Button */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-medium shadow-sm hover:shadow-md transition-all ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-orange-600 hover:to-amber-600'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Enviar mensaje</span>
                      </>
                    )}
                  </button>
                  
                  <div className="mt-4 md:mt-0 text-gray-600 text-sm flex items-center">
                    <span>O contáctanos directamente por</span>
                    <button
                      type="button"
                      onClick={handleWhatsAppClick}
                      className="ml-2 text-green-600 hover:text-green-800 inline-flex items-center"
                    >
                      <MessageCircle className="h-4 w-4 mr-1" />
                      WhatsApp
                    </button>
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <Map />
    </section>
  );
}