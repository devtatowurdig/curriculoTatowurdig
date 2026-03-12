import { useTranslation } from 'react-i18next';
import { FiStar } from 'react-icons/fi';

interface SoftSkill {
  name: string;
  icon: string;
}

export default function SoftSkills() {
  const { t } = useTranslation();
  const items = t('softskills.items', { returnObjects: true }) as SoftSkill[];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50/50 dark:bg-gray-950/50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <span className="p-2.5 rounded-xl gradient-brand text-white">
            <FiStar size={20} />
          </span>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {t('softskills.title')}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {items.map((skill, idx) => (
            <div
              key={idx}
              className="section-card flex flex-col items-center gap-3 text-center hover:shadow-md hover:border-brand-200 dark:hover:border-brand-800 hover:-translate-y-1 transition-all"
            >
              <span className="text-3xl" role="img" aria-label={skill.name}>
                {skill.icon}
              </span>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200 leading-snug">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
