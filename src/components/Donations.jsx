import React, { useState } from "react";
import "./Donations.css"; // Archivo de estilos separado para la estética
import { FaWhatsapp } from "react-icons/fa"; // Importar el icono de WhatsApp
import Footer from "./Footer"; // Corrige la dirección de importación

const Donations = () => {
  const [selectedOption, setSelectedOption] = useState("bolivia");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className="donations-container">
        <h1 className="donations-title">Apoya Nuestra Causa</h1>
        <p className="donations-description">
          Tu ayuda hace la diferencia. Selecciona una opción para donar:
        </p>

        <div className="donations-options">
          <button
            className={`donation-option ${
              selectedOption === "bolivia" ? "active" : ""
            }`}
            onClick={() => handleOptionChange("bolivia")}
          >
            Donar desde Bolivia
          </button>
          <button
            className={`donation-option ${
              selectedOption === "international" ? "active" : ""
            }`}
            onClick={() => handleOptionChange("international")}
          >
            Donar desde el Extranjero
          </button>
        </div>

        <div className="donations-content">
          {selectedOption === "bolivia" && (
            <div className="bolivia-donation">
              <h2>Donaciones en Bolivia</h2>
              <p>
                Transfiere tu aporte al siguiente número de cuenta o escanea el
                código QR:
              </p>
              <div className="bolivia-details">
                <div className="account-details">
                  <p><strong>Número de Cuenta:</strong> 4011066538</p>
                  <p><strong>Banco:</strong> Banco Mercantil Santa Cruz</p>
                </div>
                <div className="qr-container">
                  <img
                    src="/path-to-your-qr-code-image.png"
                    alt="QR Code"
                    className="qr-code"
                  />
                </div>
              </div>
            </div>
          )}

          {selectedOption === "international" && (
            <div className="international-donation">
              <h2>Donaciones Internacionales</h2>
              <p>
                Para coordinar tu donación, contáctanos directamente por WhatsApp:
              </p>
              <a
                href="https://wa.me/59174140597?text=Quiero%20realizar%20una%20donación" // Reemplaza con tu número
                target="_blank"
                rel="noopener noreferrer"
                className="donation-whatsapp-button"
              >
                <FaWhatsapp className="icon" />
                Enviar Mensaje por WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Donations;
