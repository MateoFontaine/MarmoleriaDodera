import HeroSection from '@/components/sections/hero';
import AboutSection from '@/components/sections/about';
import ServicesSection from '@/components/sections/services';
import CatalogoIndex from '@/components/sections/catalogIndex'
import ProjectsSection from '@/components/sections/projects';
import ContactSection from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CatalogoIndex />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}