import React, { useState } from 'react'; // Import useState
import { Link } from 'react-router-dom'; // Usar Link para navegación sin recargar
import './Header.css';
import logo from '../assets/Logo.png';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false); // State to manage nav open/close

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className="header">
            <div className="header__logo-container">
                {/* Logo con enlace a la página principal */}
                <Link to="/" className="header__logo-link">
                    <img src={logo} alt="Logo Salud Andina" className="header__logo" />
                </Link>
                {/* Título con enlace a la página principal */}
                <Link to="/" className="header__title">
                    Salud Andina<br />En Acción
                </Link>
            </div>

            {/* Botón para menú desplegable en dispositivos pequeños */}
            <button className="header__menu-toggle" onClick={toggleNav}>
                ☰
            </button>

            {/* Menú de navegación */}
            <nav className={`header__nav ${isNavOpen ? 'header__nav--open' : ''}`}>
                <ul className="header__nav-list">
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/programa">Programas</Link></li>
                    <li><Link to="/ayuda">Ayuda</Link></li>
                    <li><Link to="/orientacion-gratuita">Orientación Gratuita</Link></li>
                </ul>
                <Link to="/donaciones" className="header__donar-btn">Donar</Link>
            </nav>
        </header>
    );
};

export default Header;
