import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import enUS from './locales/en-US.json';
import koKR from './locales/ko-KR.json';

export const resources = {
  'en-US': { translation: enUS }, // en JSON
  'ko-KR': { translation: koKR }, // ko JSON
};

// i18n 초기화 설정
i18n
  .use(LanguageDetector) // 브라우저 언어 감지 사용
  .use(initReactI18next)  // react-i18next로 연동
  .init({
    resources,
    lng: 'en-US', // 기본언어
    fallbackLng: 'en-US', // 지원되지 않는 언어가 감지되면 영어를 기본으로 사용
    debug: false,         // 디버깅 모드
    interpolation: {
      escapeValue: false,  // React가 이미 XSS 방어를 하기 때문에 필요 없음
    },
    // detection: {
    //   // 사용자 언어 감지 옵션
    //   order: ['navigator', 'htmlTag', 'cookie', 'localStorage', 'path', 'subdomain'], // 언어설정
    //   caches: ['localStorage', 'cookie'],  // 캐싱처리
    // },
    react: {
      useSuspense: false, // Suspense 비활성화
    },
  });

export default i18n;
