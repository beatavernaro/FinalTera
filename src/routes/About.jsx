import '../App.css';
import React from 'react';
import icone from 'C:/Users/Bea/Documents/Codigos/FrontEnd/technelas/src/components/Topbar/newicon1.png'

export default function About() {
  return (
    <React.Fragment>

      <div class="px-4 py-5 my-5 text-center">
        <img class="d-block mx-auto mb-4" src={icone} />
        <h1 class="display-5 fw-bold">Technelas</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">Technelas é o projeto final desenvolvido para o curso de Desenvolvimento Full Stack na Tera. Feito com as tecnologias HTML, CSS, Javascript, React, Bootstrap, Node.JS, MongoDB</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            
          </div>
        </div>
      </div>

    </React.Fragment>
  );
}

