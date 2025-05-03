import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useTranslation } from 'react-i18next';

export const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col min-h-screen text-white">
      <Header />
      <main className="flex-grow container mx-auto p-8 text-center">
        <h2 className="text-5xl font-bold mb-4">{t('welcome', { name: '임관혁' })}</h2>
        <p className="text-xl mb-6">{t('subtitle')}</p>
        <div className="space-x-4">
          <a href="/portfolio" className="px-6 py-3 bg-blue-500 rounded hover:bg-blue-600">{t('viewPortfolio')}</a>
          <a href="/blog" className="px-6 py-3 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">{t('readBlog')}</a>
        </div>
      </main>
      <Footer />
    </div>
  );
};
