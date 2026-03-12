import { useTranslation } from 'react-i18next';
import { FiLinkedin, FiGithub } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { FiMapPin } from 'react-icons/fi';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4"
    >
      <div className="w-fit mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-52 h-52 md:w-56 md:h-56 rounded-full gradient-brand p-1 shadow-xl shadow-brand-500/20">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-start justify-center">
                  <img
                    src="./profile.png"
                    alt="Tácio wurdig"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <span class="text-6xl select-none">👨‍💻</span>
                        `;
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-brand-600 dark:text-brand-400 font-semibold text-sm tracking-widest uppercase mb-2">
              {t('hero.greeting')}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-3 leading-tight">
              Tácio Wurdig
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 font-medium mb-4">
              {t('hero.role')}
            </p>
            <p className="flex items-center justify-center md:justify-start gap-1.5 text-sm text-gray-500 dark:text-gray-400 mb-8">
              <FiMapPin size={14} className="text-brand-500" />
              {t('hero.location')}
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-4">
              <a
                href="https://linkedin.com/in/tatowurdig"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0A66C2] hover:bg-[#004182] text-white text-sm font-medium transition-colors shadow-sm"
              >
                <FiLinkedin size={18} />
                LinkedIn
              </a>
              <a
                href="https://github.com/devtatowurdig"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-900 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white text-sm font-medium transition-colors shadow-sm"
              >
                <FiGithub size={18} />
                GitHub
              </a>
              <a
                href="https://wa.me/5500000000000" // TODO: Replace with your actual WhatsApp number
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#128C7E] text-white text-sm font-medium transition-colors shadow-sm"
              >
                <FaWhatsapp size={18} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
