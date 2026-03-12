import { useTranslation } from 'react-i18next';
import { FiBookOpen, FiCalendar } from 'react-icons/fi';
import TechBadge from './TechBadge';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  techs: string[];
}

export default function Education() {
  const { t } = useTranslation();
  const items = t('education.items', { returnObjects: true }) as EducationItem[];

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="p-2.5 rounded-xl gradient-brand text-white">
            <FiBookOpen size={20} />
          </span>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t('education.title')}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="section-card hover:shadow-md hover:border-brand-200 dark:hover:border-brand-800 transition-all"
            >
              <div className="flex items-start justify-between gap-2 mb-3">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-snug">
                    {item.degree}
                  </h3>
                  <p className="text-brand-600 dark:text-brand-400 font-medium text-sm mt-0.5">
                    {item.institution}
                  </p>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap">
                  <FiCalendar size={12} />
                  {item.period}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.techs.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
