import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion"
import { IcLang } from 'assets/images';
import { useTranslationContext } from 'context/TranslationContext';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SaveAltIcon from '@mui/icons-material/SaveAlt';

const TopBar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { language, setLanguage } = useTranslationContext();

  const toggleLang = () => i18n.changeLanguage(i18n.language === 'en' ? 'ko' : 'en');
  
  // 모바일 메뉴 토글
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((o) => !o);

  //   // 메뉴 컨테이너 ref (바깥 클릭 감지)
  // const menuRef = useRef<HTMLDivElement>(null);
  // useEffect(() => {
  //   const handleClickOutside = (e: MouseEvent) => {
  //     if (menuOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
  //       setMenuOpen(false);
  //     }
  //   };
  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => document.removeEventListener('mousedown', handleClickOutside);
  // }, [menuOpen]);

  const [show, setShow] = useState(true);
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const curY = window.scrollY;
      setShow(curY < lastY || curY < 10);
      lastY = curY;
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 언어 변경
  const changeLangBtn = () => {
    if (language === 'en-US') {
      setLanguage('ko-KR');
    } else {
      setLanguage('en-US');
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-[hsla(0,0%,100%,.059)] transition-transform duration-300 ${
        show ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* 로고 */}
        <h1 className="text-3xl font-dung font-bold text-white tracking-widest">
          <Link to="/">
            <span className="text-[#51c4d3]">ㅇ</span>
            <span className="text-[#ffe66d]">ㄱ</span>
            <span className="text-[#51c4d3]">ㅎ</span>
          </Link>
        </h1>

        {/* 데스크탑 메뉴 */}
        <nav className="hidden lg:flex items-center space-x-8 text-white">
          <Link to="/" className="hover:underline">{t('Common.home')}</Link>
          <Link to="/portfolio" className="hover:underline">{t('Common.portfolio')}</Link>
          <Link to="/blog" className="hover:underline">{t('Common.blog')}</Link>
          {/* <button onClick={changeLangBtn} className="flex items-center space-x-1">
            <IcLang />
            <span>{language === 'en-US' ? 'EN' : 'KO'}</span>
          </button> */}
          <button className="flex justify-center items-center" onClick={changeLangBtn}>
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
          </button>
          <button type="button" className="btn-resume flex items-center">
            <SaveAltIcon />
            <span>{t('Common.Resume')}</span>
          </button>
        </nav>

        {/* 모바일 햄버거 */}
        <div className="lg:hidden relative flex items-center space-x-8">
          <button className="flex justify-center items-center" onClick={changeLangBtn}>
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
          </button>
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          {/* 드롭다운 메뉴 */}
          <motion.ul
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: menuOpen ? 1 : 0, scale: menuOpen ? 1 : 0.95 }}
            transition={{ duration: 0.15 }}
            className={`origin-top-right absolute right-0 top-full w-48 bg-[#101b38] text-white rounded-md shadow-lg overflow-hidden ${menuOpen ? 'block' : 'hidden'}`}
          >
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-700">
                {t('Common.home')}
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-700">
                {t('Common.portfolio')}
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={() => setMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-700">
                {t('Common.blog')}
              </Link>
            </li>
            <li>
              <button onClick={() => setMenuOpen(false)} className="btn-resume m-2 w-[calc(100%-1rem)] justify-center">
                <SaveAltIcon />
                <span>{t('Common.Resume')}</span>
              </button>
            </li>
          </motion.ul>
        </div>
      </div>
    </header>
  );
};

export default TopBar;