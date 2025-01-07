import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import './Impacto.css';
import { FaUsers, FaHandsHelping, FaGlobe } from 'react-icons/fa';

const Impacto = () => {
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.querySelector('.impacto');
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                setInView(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check if already in view on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const stats = [
        { id: 1, icon: <FaUsers />, value: 5000, label: 'Beneficiarios ' },
        { id: 2, icon: <FaHandsHelping />, value: 120, label: 'Voluntarios ' },
        { id: 3, icon: <FaGlobe />, value: 300, label: 'Comunidades Alcanzadas' },
    ];

    return (
        <section className="impacto">
            <h2 className="impacto-title">Nuestro Impacto</h2>
            <div className="impacto-divider"></div>
            <div className="impacto-stats">
                {stats.map(stat => (
                    <div key={stat.id} className="impacto-stat">
                        <div className="impacto-icon">{stat.icon}</div>
                        {inView && (
                            <CountUp
                                start={0}
                                end={stat.value}
                                duration={2.5}
                                separator=","
                                className="impacto-number"
                                suffix="+"
                            />
                        )}
                        <p className="impacto-label">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Impacto;
