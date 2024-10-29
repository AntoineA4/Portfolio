import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import '../Header/header.scss';
import BurgerMenu from '../MenuBurger/menuburger';

function Header() {
    const { t, i18n } = useTranslation();
    return (
        <div className="Header-container">
            <div className='language-container'>
                <button className={`language-button ${i18n.language === 'fr' ? 'active' : ''}`} onClick={() => i18n.changeLanguage('fr')} >Français</button>
                <button className={`language-button ${i18n.language === 'en' ? 'active' : ''}`} onClick={() => i18n.changeLanguage('en')}>English</button>
            </div>
            <BurgerMenu />
        </div>
    );
}

Header.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    text: PropTypes.string,
};

export default Header;