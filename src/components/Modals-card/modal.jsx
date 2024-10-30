import React from 'react';
import PropTypes from 'prop-types';
import Tags from '../../components/Tags/tags';
import '../Modals-card/modal.scss'; 

function Modal({ isOpen, title, cover, description, tags, link, onClose }) {
    if (!isOpen) return null; 

    console.log(link); 

    const handleOverlayClick = (e) => {
        if (e.target.className === 'modal-overlay') {
            onClose();
        }
    };

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>X</button>
                <img src={cover} alt={title} className="modal-cover" />
                <h2>{title}</h2>
                <Tags tags={tags} /> 
                <p>{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">Link</a>
            </div>
        </div>
    );
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;