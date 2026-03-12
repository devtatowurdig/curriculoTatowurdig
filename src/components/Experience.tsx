import { useTranslation } from 'react-i18next';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';
import TechBadge from './TechBadge';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  techs: string[];
}

export default function Experience() {
  const { t } = useTranslation();
  const items = t('experience.items', { returnObjects: true }) as ExperienceItem[];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50/50 dark:bg-gray-950/50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="p-2.5 rounded-xl gradient-brand text-white">
            <FiBriefcase size={20} />
          </span>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t('experience.title')}
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-500 to-brand-200 dark:to-brand-800 hidden md:block" />

          <div className="flex flex-col gap-8">
            {items.map((item, idx) => (
              <div key={idx} className="md:pl-16 relative">
                {/* Timeline dot */}
                <div className="absolute left-3.5 top-6 w-3 h-3 rounded-full gradient-brand border-2 border-white dark:border-gray-950 hidden md:block" />

                <div className="section-card hover:shadow-md hover:border-brand-200 dark:hover:border-brand-800 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.role}
                      </h3>
                      <p className="text-brand-600 dark:text-brand-400 font-medium text-sm">
                        {item.company}
                      </p>
                    </div>
                    <span className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full whitespace-nowrap self-start">
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
