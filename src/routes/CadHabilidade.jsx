import '../App.css';
import React from 'react';
import { Button, Checkbox } from '../components';
import { Link } from "react-router-dom";
import { useState } from 'react';


export default function CadHabilidade() {
  var frontend = ["ReactJS", "Angular", "Layout Responsivo", "CSS", "HTML", "Javascript", "Vue.JS", "AngularJS", "React Native"]
  var backend = ["Java", "Javascript", "Typescript", "NodeJS", "NestJS", ".NET", ".NET Core", "PHP", "Python", "GO", "Rust", "Kotlin"];
  var devops = ["Azure", "AWS", "Google Cloud", "Git", "Docker", "Kubernets", "Ansible", "Gradle"];
  var testes = ["jest", "Mocha", "TDD", "Sonar", "React Native Testing Library", "Jasmine", "PHP Unit"];
  var banco = ["SQL Server", "MySQL", "Postgre", "MongoDB", "CouchBase", "Oracle"];


  var teste = frontend.map((skill) => <li key={skill}>{skill}</li>)

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

            <form className="row g-3" onSubmit={handleSubmit} method="POST" action="/add">
              <h3 className='text-center'>Habilidades</h3>
              <p className='text-center'>Selecione abaixo todas as habilidades que você tenha</p>
              <div class="container col-md-12 m-auto px-4 pb-4  pt-4">
                <label for="" class="form-label ">
                  <h4 class="mb-3 ">Habilidades Front-End</h4>
                </label>

                <Checkbox for={frontend[0]} skill={frontend[0]} />
                <Checkbox for={frontend[1]} skill={frontend[1]} />
                <Checkbox for={frontend[2]} skill={frontend[2]} />
                <Checkbox for={frontend[3]} skill={frontend[3]} />
                <Checkbox for={frontend[4]} skill={frontend[4]} />
                <Checkbox for={frontend[5]} skill={frontend[5]} />
                <Checkbox for={frontend[6]} skill={frontend[6]} />
                <Checkbox for={frontend[7]} skill={frontend[7]} />
                <Checkbox for={frontend[8]} skill={frontend[8]} />
              </div>

              <div class="container col-md-12 m-auto px-4 pb-4 pt-4 mt-3">
                <label for="" class="form-label">
                  <h4 class="mb-3">Habilidades Back-End</h4>
                </label>
                <Checkbox for={backend[0]} skill={backend[0]} />
                <Checkbox for={backend[1]} skill={backend[1]} />
                <Checkbox for={backend[2]} skill={backend[2]} />
                <Checkbox for={backend[3]} skill={backend[3]} />
                <Checkbox for={backend[4]} skill={backend[4]} />
                <Checkbox for={backend[5]} skill={backend[5]} />
                <Checkbox for={backend[6]} skill={backend[6]} />
                <Checkbox for={backend[7]} skill={backend[7]} />
                <Checkbox for={backend[8]} skill={backend[8]} />
                <Checkbox for={backend[9]} skill={backend[9]} />
                <Checkbox for={backend[10]} skill={backend[10]} />
                <Checkbox for={backend[11]} skill={backend[11]} />
              </div>
              <div class="container col-md-12 m-auto px-4 pb-4 pt-4 mt-3 ">
                <label for="" class="form-label">
                  <h4 class="mb-3">Habilidades DevOps</h4>
                </label>
                <Checkbox for={devops[0]} skill={devops[0]} />
                <Checkbox for={devops[1]} skill={devops[1]} />
                <Checkbox for={devops[2]} skill={devops[2]} />
                <Checkbox for={devops[3]} skill={devops[3]} />
                <Checkbox for={devops[4]} skill={devops[4]} />
                <Checkbox for={devops[5]} skill={devops[5]} />
                <Checkbox for={devops[6]} skill={devops[6]} />
              </div>
              <div class="container col-md-12 m-auto px-4 pb-4 pt-4 mt-3" >
                <label for="" class="form-label">
                  <h4 class="mb-3">Habilidades Banco de dados</h4>
                </label>
                <Checkbox for={banco[0]} skill={banco[0]} />
                <Checkbox for={banco[1]} skill={banco[1]} />
                <Checkbox for={banco[2]} skill={banco[2]} />
                <Checkbox for={banco[3]} skill={banco[3]} />
                <Checkbox for={banco[4]} skill={banco[4]} />
              </div>
              <div class="container col-md-12 m-auto px-4 pb-4 pt-4 mt-3">
                <label for="" class="form-label">
                  <h4 class="mb-3">Habilidades de Testes</h4>
                </label>
                <Checkbox for={testes[0]} skill={testes[0]} />
                <Checkbox for={testes[1]} skill={testes[1]} />
                <Checkbox for={testes[2]} skill={testes[2]} />
                <Checkbox for={testes[3]} skill={testes[3]} />
                <Checkbox for={testes[4]} skill={testes[4]} />
                <Checkbox for={testes[5]} skill={testes[5]} />
                <Checkbox for={testes[6]} skill={testes[6]} />
              </div>

              <div class="col-md-6 text-center">
                <Link to='/containfo' className="nav-link px-2 text-muted"><Button text="Voltar" /></Link>
              </div>
              <div class="col-md-6 text-center">
                <Link to='/perfil' className="nav-link px-2 text-muted"><Button text="Avançar" type="submit" /></Link>
              </div>
            </form>


          </div>
        </div>

      </main >
    </React.Fragment >
  );

}

