import React from 'react';
import project from '../../Data/project.json';
import PropTypes from 'prop-types';
import Tags from '../../components/Tags/tags';
import '../Modals-card/modal.scss'; 

function Modal({ isOpen, title, cover, description, onClose }) {
    if (!isOpen) return null; // Si la modale n'est pas ouverte, ne pas la rendre

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>X</button>
                <img src={cover} alt={title} className="modal-cover" />
                <h2>{title}</h2>
                <Tags tags={project.tags} />
                <p>{description}</p>
            </div>
        </div>
    );
}

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    onClose: PropTypes.func.isRequired,
};

export default Modal;