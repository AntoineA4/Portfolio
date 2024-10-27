import React, { useState } from 'react';
import '../cards/cards.scss';
import PropTypes from 'prop-types';
import Modal from '../../components/Modals-card/modal'; 

function Card({ id, title, cover, description, tags }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div className="card" onClick={openModal}>
                <img src={cover} alt={title} className="card-cover" />
                <div className="card-title">{title}</div>
            </div>
            <Modal 
                isOpen={isModalOpen} 
                title={title} 
                cover={cover} 
                description={description} 
                tags={tags} 
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
    tags: PropTypes.arrayOf(PropTypes.string).isRequired, 
};

export default Card;