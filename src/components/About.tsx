import { useTranslation } from 'react-i18next';
import { FiUser } from 'react-icons/fi';

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="section-card">
          <div className="flex items-center gap-3 mb-6">
            <span className="p-2.5 rounded-xl gradient-brand text-white">
              <FiUser size={20} />
            </span>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {t('about.title')}
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-base md:text-lg">
            {t('about.description')}
          </p>
        </div>
      </div>
    </section>
  );
}
