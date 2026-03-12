import { useTranslation } from 'react-i18next';
import { FiHeart } from 'react-icons/fi';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
          {t('footer.madeWith')}{' '}
          <FiHeart size={14} className="text-red-500 fill-red-500" />{' '}
          {t('footer.by')}{' '}
          <span className="font-semibold text-gray-700 dark:text-gray-200">Tatowurdig</span>
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-600">
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
