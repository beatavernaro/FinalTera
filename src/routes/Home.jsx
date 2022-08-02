import logo from '../logo.svg';
import '../App.css';
import { Topbar, Landing, Card, Footer } from '../components/';
import React from 'react';
import cardIcon1 from 'C:/Users/Bea/Documents/Codigos/FrontEnd/technelas/src/components/Card/iconcard1.png';
import cardIcon2 from 'C:/Users/Bea/Documents/Codigos/FrontEnd/technelas/src/components/Card/iconcard2.png';
import cardIcon3 from 'C:/Users/Bea/Documents/Codigos/FrontEnd/technelas/src/components/Card/iconcard3.png';

export default function Home() {
  return (
    <React.Fragment>

      <Landing />

      <div className="container-animation container-fluid main-bg-color" id="cadastro">
        <Card cardName="quero trabalhar" to="/cadastro" cardimage={cardIcon1} />
        <Card cardName="quero contratar" to="/cadastro" cardimage={cardIcon2}/>
        <Card cardName="quero ajudar" to="/about" cardimage={cardIcon3}/>
      </div>

    </React.Fragment>
  );
}

