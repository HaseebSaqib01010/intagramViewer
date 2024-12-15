import React from 'react';
import { useTranslation } from 'react   -i18next';

const TranslationWrapper = ({ children }) => {
    const { t } = useTranslation();

    return (
        <div>
            {React.Children.map(children, (child) => (
                <div>
                    {child}
                    <p>{t('hello')}</p>
                </div>
            ))}
        </div>
    );
};

export default TranslationWrapper;