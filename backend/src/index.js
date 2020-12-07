const express = require('express');
const { uuid } = require('uuidv4');
//id unico universal

const app = express();

app.use(express.json());


const projects = [];

app.get('/projects', (request, response) => {
    
    //filtro pelo título
    const { title } = request.query;
    const results = title
     ? projects.filter(project => project.title.includes(title))
     : projects

    return response.json(results);
})

app.post('/projects', (request, response) => {
    const { title, owner } = request.body;

    const project = { id: uuid(), title, owner }
    projects.push(project)

    return response.json(project)
})

app.put('/projects/:id', (request, response) => {
    const { id } = request.params;
    const { title, owner } = request.body;

    //pegando a posição do projeto dentro do meu vetor de projetos
    const projectIndex = projects.findIndex(project => 
        project.id === id);

    // se não existe o id que eu estou procurando, retorna um erro
    if (projectIndex < 0) {
        return response.status(400).json({ error: 'err Project not found' })
    }

    const project = {
        id,
        title,
        owner,
    }

    projects[projectIndex] = project;

    return response.json(project);
})

app.delete('/projects/:id', (request, response) => {
    const { id } = request.params;

    const projectIndex = projects.findIndex(project => 
        project.id === id);

    if (projectIndex < 0) {
        return response.status(400).json({ error: 'err Project not found' })
    }

    projects.splice(projectIndex, 1);
    
    return response.status(204).send();
});


app.listen(3333, () =>{
    console.log('Rodando o back, fela 😎️')
});