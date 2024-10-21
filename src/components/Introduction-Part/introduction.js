import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import '../Introduction-Part/introduction.scss';
import portrait from '../../assets/photos/portrait.jpg';


function Intro() {
    const { t, i18n } = useTranslation();
    return (
        <div className="intro-container">
            <img src={portrait} alt='Antoine Gadrat' className='photoAntoine' ></img>
            <p>{t('intro')}</p>
        </div>
    );
}

Intro.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    text: PropTypes.string,
};

export default Intro;