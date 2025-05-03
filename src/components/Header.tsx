import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const toggleLang = () => i18n.changeLanguage(i18n.language === 'en' ? 'ko' : 'en');
  return (
    <header className="flex justify-between items-center p-4 bg-[#101b38]">
      <h1 className="text-2xl font-bold text-white"><Link to="/">임관혁</Link></h1>
      <nav className="space-x-4">
        <Link to="/" className="text-white hover:underline">{t('home')}</Link>
        <Link to="/portfolio" className="text-white hover:underline">{t('portfolio')}</Link>
        <Link to="/blog" className="text-white hover:underline">{t('blog')}</Link>
        <button onClick={toggleLang} className="ml-4 text-white">{i18n.language === 'en' ? 'KO' : 'EN'}</button>
      </nav>
    </header>
  );
};