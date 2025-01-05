import React from 'react';
import './Modal.css';

const Modal = ({ image, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={image} alt="Vista ampliada" className="modal-image" />
                <button className="modal-close" onClick={onClose}>
                    ×
                </button>
            </div>
        </div>
    );
};

export default Modal;
