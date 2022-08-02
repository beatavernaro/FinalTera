import '../App.css';
import React from 'react';
import { Form, Button } from '../components';
import { Link } from "react-router-dom";
import cardIcon1 from 'C:/Users/Bea/Documents/Codigos/FrontEnd/technelas/src/components/woman.jpg';


export default function Perfil() {
  return (
    <React.Fragment>
      <main className="main-bg-color pb-5">
        <div className="container pt-5">
          <div className="container col-md-12 m-auto px-4 pb-4 box-form-style pt-4">
            <div className='row'>
              <div class="col-md-2 text-center pt-2">
                <img src={cardIcon1} class="img-thumbnail" width="160" height="160"></img>
              </div>
              <div className='col-md-8'>
                <h2>Anne Arendel</h2><p>Full Stack Developer | HTML5 | CSS | JavaScript | ReactJS | NodeJS</p>
                <p>Estou em transição de carreira, na trilha de me tornar uma Desenvolvedora Full Stack.
                  Sou entusiasta do voluntarismo e de soft skills, produzo livros infantis que de forma lúdica ensinam as crianças superação, motivação, empatia, resignificação, etc.</p>
                <p className='pb-4'>
                  <Button type="button" text="Perfil completo »" />
                </p>
              </div>
            </div>


            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="border-vaga">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2" id="text-match">Vaga com match</strong>
                <h3 class="mb-2">Desenvolvedora Front-End React</h3>
                <div class="mb-1 text-muted">INTERA | Talent Hacking</div>
                <p class="card-text mb-auto">Conhecimentos em JavaScript, CSS e HTML;
                  Ampla experiência com desenvolvimento front-end utilizando ReactJS (pelo menos 3 anos);
                  Experiência em desenvolvimento responsivo;
                  Noções de usabilidade UX e UI;
                  Experiência em GIT.</p>
                <a href="#" class="stretched-link">Ver mais...</a>
              </div>
            </div>
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="border-vaga">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2" id="text-match">Vaga com match</strong>
                <h3 class="mb-2">Desenvolvedora Full Stack Junior</h3>
                <div class="mb-1 text-muted">INTELIE by Viasat</div>
                <p class="card-text mb-auto">Conhecimento avançado em JavaScript/Typescript;
                  Conhecimento em React, JSX, ES6, ES7;
                  Conhecimento de arquiteturas Flux / Relay;
                  Conhecimento ferramentas de qualidade de código (ex: ESLint);
                  Familiaridade com bancos de dados (Mysql, PostgreSQL, MongoDB)</p>
                <a href="#" class="stretched-link">Ver mais...</a>
              </div>
            </div>
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="border-vaga">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2" id="text-match">Vaga com match</strong>
                <h3 class="mb-2">Desenvolvedora Front-End</h3>
                <div class="mb-1 text-muted">IBM</div>
                <p class="card-text mb-auto">Desenvolvedor(a) de aplicações para desenvolvimento de interface do usuário usando tecnologias de interface do usuário como Angular, CSS 3, HTML 5 etc. e integra-se com o aplicativo de back-end por meio de back-end para serviços / APIs de front-end.</p>
                <a href="#" class="stretched-link">Ver mais...</a>
              </div>
            </div>
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative" id="border-vaga">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2" id="text-match">Vaga com match | Vaga internacional</strong>
                <h3 class="mb-2">Software Development Engineer, Intech</h3>
                <div class="mb-1 text-muted">Amazon</div>
                <p class="card-text mb-auto">Proficiência na língua inglesa (nível técnico).
                  Experiência sólida em pelo menos UMA dessas linguagens de programação: Java, C, C ++, C #, Go, Python, Kotlin, Scala, Swift ou Ruby e tecnologias da web (ou seja, JavaScript, CSS, serviços da web).
                  Experiência na definição de arquitetura de sistemas e explorando soluções e trade-offs.</p>
                <a href="#" class="stretched-link">Ver mais...</a>
              </div>
            </div>
          <Button type="button" text="Veja mais vagas" />
          </div>

        </div>
      </main >
    </React.Fragment >
  );
}

