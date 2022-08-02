import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home, Cadastro, About, Login, CadHabilidade, Perfil, InfoContato } from './index.js';
import { Topbar, Footer } from "../components/index.js";

export function RouterControl() {
    return (
        <React.Fragment>
            <Topbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/habilidade" element={<CadHabilidade />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/containfo" element={<InfoContato />} />
                
            </Routes>
            <Footer />
        </React.Fragment>
    );
}