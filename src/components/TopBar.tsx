import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion"
import { IcLang } from 'assets/images';
import { useTranslationContext } from 'context/TranslationContext';

const TopBar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { language, setLanguage } = useTranslationContext();

  const toggleLang = () => i18n.changeLanguage(i18n.language === 'en' ? 'ko' : 'en');
  
  const changeLangBtn = () => {
    if (language === 'en-US') {
      setLanguage('ko-KR');
    } else {
      setLanguage('en-US');
    }
  }

  return (
    <header className="flex justify-between items-center p-4 bg-[hsla(0,0%,100%,.059)]">
      <h1 className="text-3xl font-dung font-bold text-white tracking-widest">
        <Link to="/">
          <span className="text-[#51c4d3]">ㅇ</span>
          <span className="text-[#ffe66d]">ㄱ</span>
          <span className="text-[#51c4d3]">ㅎ</span>
        </Link>
      </h1>
      <nav className="flex gap-14">
        <div className="flex space-x-8 text-1xl">
          <Link to="/" className="text-white hover:underline">{t('home')}</Link>
          <Link to="/portfolio" className="text-white hover:underline">{t('portfolio')}</Link>
          <Link to="/blog" className="text-white hover:underline">{t('blog')}</Link>
        </div>
        <div className="flex justify-center items-center" onClick={changeLangBtn}>
          <div className="mr-2">
            <IcLang />
          </div>
          <motion.div
            className="font-[<Pretendard>] font-normal, font-medium text-<12rem>/130% flex text-center text-[#f2f4f8]"
            animate={{ color: language === 'ko-KR' ? '#68686C' : '#E0E0EA', x: language === 'ko-KR' ? 37 : -3 }}
            transition={{ type: "spring" }}
            style={{ fontSize: '1rem' }}
          >
            EN
          </motion.div>
          <div style={{ color: '#68686C' }}>&nbsp;|&nbsp;</div>
          <motion.div
            className="font-[<Pretendard>], font-normal, font-medium, text-<12rem>/130%, flex, text-center, text-[#f2f4f8]"
            animate={{ color: language === 'ko-KR' ? '#E0E0EA' : '#68686C', x: language === 'ko-KR' ? -37 : 3 }}
            transition={{ type: 'spring' }}
            style={{ fontSize: '1rem' }}
          >
            KO
          </motion.div>
        </div>
        {/* <button onClick={toggleLang} className="ml-4 text-white">{i18n.language === 'en' ? 'KO' : 'EN'}</button> */}
      </nav>
    </header>
  );
};

export default TopBar;