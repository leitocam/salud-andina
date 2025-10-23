import React from 'react'
import './WhatsAppButton.css'
import whatsappIcon from '../assets/whatsapp-icon.png'

const WhatsAppButton = () => {
  return (
    <a
      className="whatsapp-button pulse"
      href="https://wa.me/59174140597?text=Hola%20necesito%20ayuda"
      target="_blank"
      rel="noreferrer"
    >
      <img src={whatsappIcon} alt="WhatsApp" />
      ¿Necesitas ayuda?
    </a>
  )
}

export default WhatsAppButton
