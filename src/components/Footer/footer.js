import React from 'react';
import { useTranslation } from 'react-i18next';
import '../Footer/footer.scss';
import githubLogo from '../../assets/logo/github-mark.png';
import logoLinkedin from '../../assets/logo/In-Blue-40.png';

function Footer() {
    const { t, i18n } = useTranslation();
    return (
        <div className="footer-container">
            <h3>Contact</h3>
            <div className='contactAndLinks' id="contact">
                <div className='contact'>
                    <p>email: antoinegadrat@hotmail.fr</p>
                    <p>tel: +33 6 24 49 59 38</p>
                </div>
                <div className='links'>
                    <a href="https://www.linkedin.com/in/antoine-gadrat-9b749a32a/?trk=opento_sprofile_details">
                        <img src={logoLinkedin} alt='logo Linkedin' className='logoLinkedin' ></img>
                    </a>
                    <a href="https://github.com/AntoineA4?tab=repositories">
                        <img src={githubLogo} alt='logo github'  className='logoGithub'></img>
                    </a>
                </div>
            </div>
        </div>
    );
}


export default Footer;