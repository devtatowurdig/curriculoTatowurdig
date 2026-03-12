import './i18n';
import { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { useDarkMode } from './hooks/useDarkMode';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import SoftSkills from './components/SoftSkills';
import Footer from './components/Footer';

export default function App() {
  const { isDark, toggleDark } = useDarkMode();
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    const element = contentRef.current;
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: isDark ? '#030712' : '#f9fafb',
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: [canvas.width / 2, canvas.height / 2],
      });

      pdf.addImage(imgData, 'PNG', 0, 0, canvas.width / 2, canvas.height / 2);
      pdf.save('curriculo-tatowurdig.pdf');
    } catch (err) {
      console.error('Failed to generate PDF:', err);
    }
  };

  return (
    <div className="min-h-screen transition-colors">
      <Navbar isDark={isDark} onToggleDark={toggleDark} onDownloadPDF={handleDownloadPDF} />
      <div ref={contentRef}>
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
