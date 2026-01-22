import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AboutPreview from '@/components/AboutPreview';
import ProjectsGrid from '@/components/ProjectsGrid';
import Stats from '@/components/Stats';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AboutPreview />
      <ProjectsGrid showAll={false} />
      <Stats />
    </>
  );
}
