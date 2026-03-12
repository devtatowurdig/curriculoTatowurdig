import './i18n';
import { useDarkMode } from './hooks/useDarkMode';
import { useGeneratePDF } from './hooks/useGeneratePDF';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import SoftSkills from './components/SoftSkills';
import Footer from './components/Footer';

export default function App() {
  const { isDark, toggleDark } = useDarkMode();
  const { generatePDF } = useGeneratePDF();

  return (
    <div className="min-h-screen transition-colors">
      <Navbar isDark={isDark} onToggleDark={toggleDark} onDownloadPDF={generatePDF} />
      <div>
        <Hero />
        <About />
        <Experience />
        <Education />
        <SoftSkills />
      </div>
      <Footer />
    </div>
  );
}
