import React from 'react';
import HomePage from 'pages/HomePage';
import Footer from 'components/Footer';
import ProjectCard from 'components/ProjectCard';
import { useTranslation } from 'react-i18next';

const projects = [
  {
    title: 'SmartScope UI',
    description: 'Custom UI for viewing blockchain transaction data.',
    demoLink: 'https://demo-smartscope.com',
    repoLink: 'https://github.com/임관혁/smartscope-ui',
    imageSrc: '/images/smartscope.png',
  },
];

const Portfolio: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col min-h-screen text-white">
      <HomePage />
      <main className="flex-grow container mx-auto p-8">
        <h2 className="text-4xl font-bold mb-6">{t('projects')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;