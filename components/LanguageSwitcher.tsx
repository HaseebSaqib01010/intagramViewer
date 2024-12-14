import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (lng: any) => {
        i18n.changeLanguage(lng);
    };

    return (
        <select onChange={(e: any) => handleLanguageChange(e.target.value)}>
            <option value="en">English</option>
            <option value="fr">French</option>
            {/* add more languages as needed */}
        </select>
    );
};

export default LanguageSwitcher;