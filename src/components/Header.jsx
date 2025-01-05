import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/Logo.png';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo-container">
                <Link to="/" className="header__logo-link">
                    <img src={logo} alt="Logo Salud Andina" className="header__logo" />
                </Link>
                <Link to="/" className="header__title">
                    Salud Andina<br />En Acción
                </Link>
            </div>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li><Link to="/nosotros">Nosotros</Link></li>
                    <li><Link to="/programas">Programas</Link></li>
                    <li><Link to="/ayuda">Ayuda</Link></li>
                </ul>
                <a href="#donar" className="header__donar-btn">Donar</a>
            </nav>
        </header>
    );
};

export default Header;
