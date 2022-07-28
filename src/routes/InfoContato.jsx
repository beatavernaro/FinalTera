import '../App.css';
import React from 'react';
import { Button } from '../components';
import { Link } from "react-router-dom";
import { useState } from 'react';

export default function InfoContato() {

  const [formValue, setFormValue] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log("****** SUBMIT *****", data)

    const url = "http://localhost:8080/user"

    fetch(`${url}/create`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
    })


  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const isCheckbox = type === "checkbox";

    const data = formValue[name] || {};
    if (isCheckbox) {
      data[value] = checked;
    }

    console.log("*******HANDLE CHANGE", data);

    const newValue = (isCheckbox) ? data : value;
    setFormValue({ ...formValue, [name]: newValue })
  }
  console.log("***** FORM VALUE", formValue);

  return (

    <React.Fragment>
      <main className="main-bg-color pb-5">
        <div className="container pt-5">
          <div className="container col-md-10 m-auto px-4 pb-4 box-form-style pt-4">
            <h1 className="mb-3 text-center">Informações de contato</h1>
            <form className="row g-3" onSubmit={handleSubmit} method="POST" action="/add">
              <div class="col-md-6">
                <label class="form-label" for="telefone">Telefone *</label>
                <input type="tel" class="form-control" id="telefone" placeholder="(00) 1234-95678" />
              </div>
              <div class="col-md-6">
                <label class="form-label" for="linkedin">Linkedin *</label>
                <input type="tel" class="form-control" id="linkedin"
                  placeholder="http://www.linkedin.com/seuUsuario" />
              </div>
              <div class="col-md-6">
                <label class="form-label" for="linkPortfolio">Portfólio</label>
                <input type="tel" class="form-control" id="linkPortfolio" placeholder="Link para o seu portfólio" />
              </div>
              <div class="col-md-6">
                <label class="form-label" for="outrosLinks">Outros links</label>
                <input type="tel" class="form-control mb-2" id="outrosLinks"
                  placeholder="Outros links que julgar necessário" />
              </div>
              <div class="col-md-6">
                <label for="selectIngles" class="form-label">Inglês</label>
                <select id="selectIngles" class="form-select">
                  <option selected>Básico</option>
                  <option>Intermediário</option>
                  <option>Avançado</option>
                  <option>Fluente</option>
                </select>
              </div>
              <div class="col-md-6">
                <label for="selectEspanhol" class="form-label">Espanhol</label>
                <select id="selectEspanhol" class="form-select">
                  <option selected>Básico</option>
                  <option>Intermediário</option>
                  <option>Avançado</option>
                  <option>Fluente</option>
                </select>
              </div>

              <div class="col-md-6">
                <label for="selectSituacaoProfissional" class="form-label">Situação profissional</label>
                <select id="selectSituacaoProfissional" class="form-select">
                  <option selected>Início de carreira, em busca da 1ª oportunidade</option>
                  <option>Transição de carreira, em busca da 1ª oportunidade</option>
                  <option>Já empregada na área de TI</option>
                </select>
              </div>
              <div class="col-md-6">
                <label for="selectSenioridade" class="form-label">Senioridade atual</label>
                <select id="selectSenioridade" class="form-select">
                  <option selected>Estagiária</option>
                  <option>Júnior</option>
                  <option>Pleno</option>
                  <option>Senior</option>
                </select>
              </div>

              <div class="col-md-6 text-center">
                <Link to='/cadastro' className="nav-link px-2 text-muted"><Button text="Voltar" /></Link>
              </div>
              <div class="col-md-6 text-center">
                <Link to='/habilidade' className="nav-link px-2 text-muted"><Button text="Avançar" type="submit" /></Link>
              </div>
            </form>


          </div>

        </div>
      </main >
    </React.Fragment >


  );

}

