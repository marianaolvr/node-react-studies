import React, { useState } from "react";

import './App.css';
import backgroundImage from './assets/background.jpeg'

import Header from "./components/Header";

export default function App() {
  const [projects, setProjects] = useState(["Projeto 1", "Projeto 2", "Projeto 3", "Projeto 4"]);

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
          <li key={project}>{project}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  );
}
