import React from 'react';
import Orientation from './Orientation';
import Footer from './Footer'; // Corrige la dirección de importación
import WhatsAppButton from './WhatsAppButton'; // Importa el botón de WhatsApp
import './Programa.css';

const OrientacionGratuita = () => {
    return (
        <div className="orientacion">
            <h1 className="section-title">Orientación Gratuita</h1>
            <Orientation />
            <WhatsAppButton /> {/* Añade el botón de WhatsApp */}
            <Footer />
        </div>
    );
};

export default OrientacionGratuita;
