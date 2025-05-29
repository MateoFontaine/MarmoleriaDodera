'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

type projects = {
  id: string;
  title: string;
  client: string;
  materials: string[];
  description: string;
  images: string[];
};

export default function ProjectShowcase() {
  const [projects, setProjects] = useState<projects[]>([]);
  const [currentProject, setCurrentProject] = useState<projects | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchProjects = async () => {
      const snapshot = await getDocs(collection(db, 'proyectos'));
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })) as projects[];

      setProjects(docs);
    };

    fetchProjects();
  }, []);

  const openModal = (project: projects, imageIndex = 0) => {
    setCurrentProject(project);
    setCurrentImageIndex(imageIndex);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setCurrentProject(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    if (!currentProject) return;
    setCurrentImageIndex((prev) =>
      prev === currentProject.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    if (!currentProject) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? currentProject.images.length - 1 : prev - 1
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <section id="proyectos" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Portafolio"
          title="Proyectos destacados"
          position="center"
        />

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -8 }}
            >
              <div
                className="relative aspect-[16/9] overflow-hidden cursor-pointer group"
                onClick={() => openModal(project)}
              >
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Maximize className="text-white h-10 w-10" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span className="mr-2 font-medium">Cliente:</span>
                  <span>{project.client}</span>
                </div>

                <p className="text-gray-700 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.materials.map((material, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-md"
                    >
                      {material}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 mt-2">
                  {project.images.length > 1 &&
                    project.images.slice(0, 3).map((image, idx) => (
                      <div
                        key={idx}
                        className="w-16 h-16 relative rounded-md overflow-hidden cursor-pointer border-2 border-transparent hover:border-orange-500 transition-all duration-200"
                        onClick={(e) => {
                          e.stopPropagation();
                          openModal(project, idx);
                        }}
                      >
                        <Image
                          src={image}
                          alt={`${project.title} - imagen ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  {project.images.length > 3 && (
                    <div
                      className="w-16 h-16 relative rounded-md overflow-hidden cursor-pointer bg-gray-200 flex items-center justify-center"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(project, 3);
                      }}
                    >
                      <span className="text-gray-600 text-sm font-medium">
                        +{project.images.length - 3}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {currentProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10"
            onClick={closeModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-5xl max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-1 rounded-full z-10"
                onClick={prevImage}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-1 rounded-full z-10"
                onClick={nextImage}
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              <button
                className="absolute right-4 top-4 bg-white/90 hover:bg-white text-gray-800 p-1 rounded-full z-10"
                onClick={closeModal}
              >
                <X className="h-6 w-6" />
              </button>

              <div className="relative h-[70vh] w-full bg-gray-900 rounded-lg overflow-hidden">
                <Image
                  src={currentProject.images[currentImageIndex]}
                  alt={`${currentProject.title} - imagen ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="mt-4 bg-white/90 p-4 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900">{currentProject.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{currentProject.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {currentProject.materials.map((material, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-md"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              {currentProject.images.length > 1 && (
                <div className="mt-4 flex space-x-2 overflow-x-auto pb-2">
                  {currentProject.images.map((image, idx) => (
                    <div
                      key={idx}
                      className={`w-16 h-16 relative flex-shrink-0 rounded-md overflow-hidden cursor-pointer border-2 transition-all duration-200 ${
                        idx === currentImageIndex
                          ? 'border-orange-500 scale-105'
                          : 'border-white/50 hover:border-white'
                      }`}
                      onClick={() => setCurrentImageIndex(idx)}
                    >
                      <Image
                        src={image}
                        alt={`Thumbnail ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
