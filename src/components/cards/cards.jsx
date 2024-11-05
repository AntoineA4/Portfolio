import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../cards/cards.scss';
import PropTypes from 'prop-types';
import Modal from '../../components/Modals-card/modal'; 

function Card({ id, title, cover, description, difficulties, tags, link }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { i18n } = useTranslation();

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const localCover = require(`../../assets/photos/${id}.png`); 
    const currentDescription = description[i18n.language] || description['en'];
    const currentDifficulties= difficulties[i18n.language] || difficulties['en'];

    return (
        <>
            <div className="card" onClick={openModal}>
                <img src={localCover} alt={title} className="card-cover" />
                <div className="card-title">{title}</div>
            </div>
            <Modal 
                isOpen={isModalOpen} 
                title={title} 
                cover={localCover} 
                description={currentDescription} 
                difficulties={currentDifficulties}
                tags={tags} 
                link={link}
                onClose={closeModal} 
            />
        </>
    );
}

Card.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired, 
    description: PropTypes.string.isRequired,
    difficulties: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired, 
    link: PropTypes.string.isRequired,
};

export default Card;