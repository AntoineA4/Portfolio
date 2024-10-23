import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import '../Header/header.scss';
import githubLogo from '../../assets/logo/github-mark.png';
import logoLinkedin from '../../assets/logo/In-Blue-40.png';
import BurgerMenu from '../../components/MenuBurger/menuburger';

function Header() {
    const { t, i18n } = useTranslation();
    return (
        <div className="Header-container">
            <div className='logos-container'>
                <a href="https://www.linkedin.com/in/antoine-gadrat-9b749a32a/?trk=opento_sprofile_details">
                        <img src={logoLinkedin} alt='logo Linkedin' className='logoLinkedin' ></img>
                </a>
                <a href="https://github.com/AntoineA4?tab=repositories">
                    <img src={githubLogo} alt='logo github'  className='logoGithub'></img>
                </a>
            </div>
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