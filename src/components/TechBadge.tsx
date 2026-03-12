interface TechBadgeProps {
  name: string;
}

const techColors: Record<string, string> = {
  React: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  'Node.js': 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  TypeScript: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200',
  JavaScript: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
  PostgreSQL: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
  MySQL: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  MongoDB: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-200',
  Docker: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300',
  AWS: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-200',
  GraphQL: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-300',
  TailwindCSS: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300',
  Redux: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  Jest: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
  Express: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
  'REST APIs': 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  Java: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-200',
  'C++': 'bg-blue-100 text-blue-900 dark:bg-blue-900/40 dark:text-blue-200',
  Python: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-200',
  Linux: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200',
  Git: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  SQL: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',
  DevOps: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300',
  Agile: 'bg-lime-100 text-lime-700 dark:bg-lime-900/40 dark:text-lime-300',
};

export default function TechBadge({ name }: TechBadgeProps) {
  const colorClass =
    techColors[name] ?? 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300';

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClass} transition-colors`}
    >
      {name}
    </span>
  );
}
