import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Suspense, lazy } from 'react';

// Lazy load each section
const Hero = lazy(() => import('./sections/Hero'));
const Projects = lazy(() => import('./sections/Projects'));
const Contact = lazy(() => import('./sections/Contact'));

function App() {
  return (
    <div className="bg-[var(--color-bg)] min-h-screen text-white font-sans">
      <Navbar />
      <main className="pt-20">
        <Suspense fallback={<div className="text-center p-10">Loading...</div>}>
          <Hero />
          <Projects />
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
