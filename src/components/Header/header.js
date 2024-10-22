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
            <img src={logoLinkedin} alt='logo Linkedin' className='logoLinkedin' ></img>
            <img src={githubLogo} alt='logo github'  className='logoGithub'></img>
            <button onClick={() => i18n.changeLanguage('fr')}>Français</button>
            <button onClick={() => i18n.changeLanguage('en')}>English</button>
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