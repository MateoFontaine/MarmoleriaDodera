import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

type SectionTitleProps = {
  subtitle: string;
  title: string;
  description?: string;
  position?: 'left' | 'center' | 'right';
};

export default function SectionTitle({
  subtitle,
  title,
  description,
  position = 'left'
}: SectionTitleProps) {
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
      
      {description && (
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      )}
      
      <div className={`h-1 w-20 bg-gradient-to-r from-orange-500 to-amber-500 mt-6 ${linePosition[position]}`}></div>
    </motion.div>
  );
}