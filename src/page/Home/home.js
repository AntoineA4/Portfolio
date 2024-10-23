import React, { useState } from 'react'; 
import { useTranslation } from 'react-i18next';
import '../Home/home.scss'; 
import Header from '../../components/Header/header';
import portrait from '../../assets/photos/portrait.jpg';

function Home() {
    const { t, i18n } = useTranslation();
    return (
        <div className='homePage' id="home">
            <Header />
            <h1 className='mainTitle'>ANTOINE GADRAT</h1>
            <p className='title'>{t('title')}</p>
            <div className="intro-container">
                <img src={portrait} alt='Antoine Gadrat' className='photoAntoine' ></img>
                <p>{t('intro')}</p>
            </div>
            <div className="portfolio-container" id="portfolio">
                <h2>Portfolio</h2>
                <div className='card-section'>
                </div>
            </div>
            <div className="Apropos-container" id="about-section">
                <h2>{t('about')}</h2>
                <p>{t('about-text')}</p>
            </div>
        </div>

    );
}

export default Home;