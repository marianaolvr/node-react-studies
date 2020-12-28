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

  function handleAddProject() {
    // projects.push(`Novo Projeto ${Date.now()}`);
    setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    
    console.log(projects);
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
