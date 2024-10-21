import React from 'react';
import { useTranslation } from 'react-i18next';
import '../Home/home.scss'; 
import Header from '../../components/Header/header';
import Intro from '../../components/Introduction-Part/introduction';

function Home() {
    const { t, i18n } = useTranslation();
    return (
        <div className='homePage'>
            <Header />
            <h1 className='mainTitle'>ANTOINE GADRAT</h1>
            <p className='title'>{t('title')}</p>
            <Intro />
        </div>

    );
}

export default Home;