import React, { createContext, useContext, useState, ReactNode, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18n/i18n'

interface TranslationContextType {
    language: string;
    setLanguage: (language: string) => void;
}

// Context
const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Provider
export const TranslationProvider = ({ children }: { children: ReactNode }) => {
    const { t } = useTranslation();

    const initialLanguage = useMemo(() => {
        const storedLanguage = localStorage.getItem('pumpSpaceLanguage');
        if (storedLanguage) {
            i18n.changeLanguage(storedLanguage);
            return storedLanguage;
        }
        return i18n.language;
    }, [i18n]);

    const [language, setLanguage] = useState(initialLanguage); // en-US, ko-KR

    useEffect(() => {
        const handleLanguageChange = (lang: string) => {
            setLanguage(lang);
            localStorage.setItem('pumpSpaceLanguage', lang);
        };

        i18n.on('languageChanged', handleLanguageChange);
        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, [i18n]);

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
        setLanguage(lang);
        localStorage.setItem('pumpSpaceLanguage', lang);
    };

    const value = useMemo(
        () => ({ language, setLanguage: changeLanguage }), [language]
    );

    return (
        <TranslationContext.Provider value={value}>
            {children}
        </TranslationContext.Provider>
    );
};

// Custom Hook
export const useTranslationContext = () => {
    const context = useContext(TranslationContext);
    if (!context) {
        throw new Error('Failed TranslationProvider');
    }
    return context;
};