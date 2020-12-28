import React, { useEffect, useState } from "react";
import api from './services/api';

import './App.css';
import backgroundImage from './assets/background.jpeg'

import Header from "./components/Header";

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('/projects').then(response => {
      setProjects(response.data)
    })
  }, [])

  async function handleAddProject() {
    //adicionando novo projeto sem usar o useState do React, apenas com o push puro do JS (compromete o conceito de imutabilidade)
    // projects.push(`Novo Projeto ${Date.now()}`);

    //adicionando novo projeto sem api - somente no front
    // setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    
    const response = await api.post('/projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: "Mari"
    });

    const project = response.data;

    setProjects([...projects, project]);
  }

  return (
    <>
      <Header title="Homepage" />

      <img width={800} src={backgroundImage} />

      <ul>
        {projects.map((project) => (
          <>
            <li key={project.id}><b>{project.title}</b></li>
            <p>{project.owner}</p>
            <br />
          </>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  );
}
