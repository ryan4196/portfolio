import React from 'react';
import { useTranslationContext } from 'context/TranslationContext';
import TopBar from 'components/TopBar';
import Footer from 'components/Footer';
import { useTranslation } from 'react-i18next';
import Portfolio from './Portfolio';

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useTranslationContext();
  console.log(t, 't', ':language', language);
  return (
    <div className="flex flex-col min-h-screen text-white">
      <TopBar />
      <main className="flex-grow container mx-auto p-8 text-center">
        <h2 className="text-5xl font-bold mb-4">{t('Common.Welcome', { name: '임관혁' })}</h2>
        <p className="text-xl mb-6">{t('Common.Subtitle')}</p>
        <div className="space-x-4">
          <a href="/portfolio" className="px-6 py-3 bg-blue-500 rounded hover:bg-blue-600">{t('Common.View Portfolio')}</a>
          <a href="/blog" className="px-6 py-3 bg-gray-200 text-gray-800 rounded hover:bg-gray-300">{t('Common.Read Blog')}</a>
        </div>
      </main>
      <Portfolio />
      <Footer />
    </div>
  );
};

export default HomePage
