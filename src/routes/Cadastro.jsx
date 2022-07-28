import '../App.css';
import React from 'react';
import { Button } from '../components/';
import { Link } from "react-router-dom";
import { useState } from 'react';

export default function Cadastro() {

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
            <h1 className="mb-3 text-center">Cadastre-se</h1>
            <form className="row g-3" onSubmit={handleSubmit} method="POST" action="/add">

              <div className="col-12">
                <label className="form-label" htmlFor="userName">Nome Completo *</label>
                <input type="text" className="form-control" placeholder="Anne Arendelle" id="userName" name="userName" onChange={handleChange} ></input>
              </div>
              <div className="col-md-8">
                <label className="form-label" htmlFor="email">Email *</label>
                <input type="email" className="form-control" placeholder="seu@email.com" id="email" name="email" onChange={handleChange} ></input>
              </div>
              <div className="col-md-6">
                <label className="form-label" htmlFor="senha">Senha *</label>
                <input type="password" className="form-control" id="senha" name="senha" onChange={handleChange} />
              </div>
              <div className="col-md-6">
                <label className="form-label" htmlFor="confirmaSenha">Confirme a senha *</label>
                <input type="password" className="form-control" id="confirmaSenha" name="confirmaSenha" onChange={handleChange} />
              </div>
              <p className="form-text">A senha deve conter no mínimo 8 caracteres.</p>

              <div className="col-md-6">
                <label className="form-label" for="dataNascimento">Data de nascimento *</label>
                <input type="date" className="form-control" id="dataNascimento" placeholder="1234 Main St" />
              </div>

              <div className="col-md-6">
                <label for="inputState" className="form-label">Gênero</label>
                <select id="selectGenero" className="form-select">
                  <option selected disabled>...</option>
                  <option>Mulher Cis</option>
                  <option>Mulher Trans</option>
                  <option>Outro</option>
                </select>
              </div>

              <div className="col-md-8">
                <label  className="form-label" for="cep">Cep</label>
                <input type="number" className="form-control" name="cep" placeholder="00000-000" />
              </div>
              <div className="col-md-6">
                <label  className="form-label" for="cidade">Cidade</label>
                <input type="text" className="form-control" name="cidade" />
              </div>
              <div className="col-md-6">
                <label  className="form-label" for="estado">Estado</label>
                <input type="text" className="form-control" name="estado" />
              </div>
              <div className="col-md-6">
                <label  className="form-label" for="endereco">Endereço</label>
                <input type="text" className="form-control" name="endereco" />
              </div>
              <div className="col-md-2">
                <label  className="form-label" for="numeroCasa">Número</label>
                <input type="text" className="form-control" name="numeroCasa" />
              </div>
              <div className="col-md-4">
                <label className="form-label" for="complementoCasa">Complemento</label>
                <input type="text" className="form-control" name="complementoCasa" />
              </div>
              <div className="col-md-6">
                <label  className="form-label" for="fotoPerfil">Foto de perfil</label>
                <input className="form-control" type="file" name="fotoPerfil" />
              </div>
              
              <div className="col-md-6">
                <label htmlFor="inputState" className="form-label">PCD</label>
                <select name="selectPcd" className="form-select" id="selectPcd" onChange={handleChange}>
                  <option selected disabled>...</option>
                  <option value='true' >Sim</option>
                  <option value='false'>Não</option>
                </select>
              </div>
              <div className="col-6">
                <label htmlFor="selectLocal" className="form-label">Preferência por local de trabalho</label>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="selectRemoto" name='selectLocal' value="remoto" onChange={handleChange} />
                  <label className="form-check-label" htmlFor="gridCheck1">Remoto</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="selectHibrido" name='selectLocal' value="hibrido" onChange={handleChange} />
                  <label className="form-check-label" htmlFor="gridCheck1">Hibrido</label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="selectPresencial" name='selectLocal' value="presencial" onChange={handleChange} />
                  <label className="form-check-label" htmlFor="gridCheck1">Presencial</label>
                </div>
              </div>
          
              <Link to='/containfo' className="nav-link px-2 text-muted text-center"><Button text="Avançar" type="submit" /></Link>
            </form>


          </div>

        </div>
      </main >
    </React.Fragment >
  );

}

