import React, { useState } from 'react'; 
import { useTranslation } from 'react-i18next';
import '../Home/home.scss'; 
import Header from '../../components/Header/header';
import portrait from '../../assets/photos/portrait.jpg';
import Modal from '../../components/Modals-card/modal';

function Home() {
    const { t, i18n } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className='homePage'>
            <Header />
            <h1 className='mainTitle'>ANTOINE GADRAT</h1>
            <p className='title'>{t('title')}</p>
            <div className="intro-container">
                <img src={portrait} alt='Antoine Gadrat' className='photoAntoine' ></img>
                <p>{t('intro')}</p>
            </div>
            <div className="portfolio-container">
                <h2>Portfolio</h2>
                <button onClick={openModal}>Ouvrir la modale</button>
                <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>Voici une modale !</h2>
                <p>Ceci est un exemple de contenu dans la modale.</p>
                </Modal>
                <div className='card-section'>
                </div>
            </div>
            <div className="Apropos-container">
                <h2>{t('about')}</h2>
                <p>{t('about-text')}</p>
            </div>
        </div>

    );
}

export default Home;