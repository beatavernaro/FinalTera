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
                <div class="col-6">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1" />
                    <label class="form-check-label" for="gridCheck1">Java</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1" />
                    <label class="form-check-label" for="gridCheck1">SpringBoot</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1" />
                    <label class="form-check-label" for="gridCheck1">Javascript</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1" />
                    <label class="form-check-label" for="gridCheck1">Typescript</label>
                  </div>
                </div>
              </div>
              <div class="container col-md-12 m-auto px-4 pb-4 pt-4 mt-3 ">
                <label for="" class="form-label">
                  <h4 class="mb-3">Habilidades DevOps</h4>
                </label>
                <div class="col-6">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1" />
                    <label class="form-check-label" for="gridCheck1">Azure</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1" />
                    <label class="form-check-label" for="gridCheck1">AWS</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1" />
                    <label class="form-check-label" for="gridCheck1">Google Cloud</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1" />
                    <label class="form-check-label" for="gridCheck1">Git</label>
                  </div>
                </div>
              </div>
              <div class="container col-md-12 m-auto px-4 pb-4 pt-4 mt-3" >
                <label for="" class="form-label">
                  <h4 class="mb-3">Habilidades Banco de dados</h4>
                </label>
                <div class="col-6">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1" />
                    <label class="form-check-label" for="gridCheck1">Azure</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1" />
                    <label class="form-check-label" for="gridCheck1">AWS</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1" />
                    <label class="form-check-label" for="gridCheck1">Google Cloud</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1" />
                    <label class="form-check-label" for="gridCheck1">Git</label>
                  </div>
                </div>
              </div>
              <div class="container col-md-12 m-auto px-4 pb-4 pt-4 mt-3">
                <label for="" class="form-label">
                  <h4 class="mb-3">Habilidades de Testes</h4>
                </label>
                <div class="col-6">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1" />
                    <label class="form-check-label" for="gridCheck1">jest</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1" />
                    <label class="form-check-label" for="gridCheck1">Mocha</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1" />
                    <label class="form-check-label" for="gridCheck1">TDD</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1" />
                    <label class="form-check-label" for="gridCheck1">Sonar</label>
                  </div>
                </div>
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

