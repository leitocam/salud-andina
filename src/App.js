import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatsAppButton from "./components/WhatsAppButton";
import Carousel from "./components/Carousel";
import QuienesSomos from "./components/QuienesSomos";
import Programas from "./components/Programas";
import Ayuda from "./components/Ayuda";
import Footer from "./components/Footer";
import Programa from "./components/Programa"; // Ensure correct import path
import HelpPage from "./components/HelpPage"; // Ensure correct import path
import Nosotros from "./components/Nosotros"; // Importar el nuevo componente
import OrientacionGratuita from "./components/OrientacionGratuita"; // Importar el nuevo componente

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                {/* Página principal */}
                <Route
                    path="/"
                    element={
                        <>
                            <Hero />
                            <Carousel />
                            <QuienesSomos />
                            <Programas />
                            <Ayuda />
                            <Footer />
                            <WhatsAppButton />
                        </>
                    }
                />
                {/* Nueva ruta para Nosotros */}
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/programas" element={<Programas />} />
                <Route path="/programa" element={<Programa />} /> {/* Ensure correct path */}
                <Route path="/ayuda" element={<HelpPage />} />
                <Route path="/orientacion-gratuita" element={<OrientacionGratuita />} />
            </Routes>
        </Router>
    );
}

export default App;
