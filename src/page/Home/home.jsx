import React from 'react'; 
import { useTranslation } from 'react-i18next';
import projectData from '../../Data/project.json';
import Header from '../../components/Header/header';
import portrait from '../../assets/photos/portrait.jpg';
import Card from '../../components/cards/cards';
import '../Home/home.scss'; 

function Home() {
    const { t } = useTranslation();

    return (
        <div className='homePage' id="home">
            <Header />
            <h1 className='mainTitle'>ANTOINE GADRAT</h1>
            <p className='title'>{t('title')}</p>
            <div className="intro-container">
                <img src={portrait} alt='Antoine Gadrat' className='photoAntoine' />
                <p>{t('intro')}</p>
            </div>
            <div className="portfolio-container" id="portfolio">
                <h2>Portfolio</h2>
                <div className="cards-section">
                    {projectData.map(project => (
                        <Card 
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            cover={project.cover}
                            description={project.description}
                            tags={project.tags}
                        />
                    ))}
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