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
import Nosotros from "./components/Nosotros"; // Importar el nuevo componente

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
                <Route path="/ayuda" element={<Ayuda />} />
            </Routes>
        </Router>
    );
}

export default App;
