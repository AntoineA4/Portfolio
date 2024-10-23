import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import '../MenuBurger/menuburger.scss';
import githubLogo from '../../assets/logo/github-mark.png';
import logoLinkedin from '../../assets/logo/In-Blue-40.png';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
    const { t, i18n } = useTranslation();
  
    return (
      <>
        <div className="burger-icon" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </div>
  
        
        <div className={isOpen ? 'modal-menu open' : 'modal-menu'}>
          <ul className="nav-links">
            <li><a href="#home">{t('home')}</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#about-section">{t('about')}</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="../../assets/Resume-Antoine-Gadrat.pdf" target="_blank" rel="noopener noreferrer">{t('resume')}</a></li>
            <li>
                <a href="https://www.linkedin.com/in/antoine-gadrat-9b749a32a/?trk=opento_sprofile_details">
                    <img src={logoLinkedin} alt='logo Linkedin' className='logoLinkedin' ></img>
                </a>
            </li>
            <li>
                <a href="https://github.com/AntoineA4?tab=repositories">
                    <img src={githubLogo} alt='logo github'  className='logoGithub'></img>
                </a>
            </li>
          </ul>
        </div>
  
        {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
      </>
    );
  };
  
  export default BurgerMenu;