const express = require('express');

const app = express();

app.use(express.json());

app.get('/projects', (request, response) => {
    const query = request.query;
    const { title, owner } = request.query;
    console.log(query);
    console.log(title);
    console.log(owner);

    return response.json([
        "Projeto 1",
        "Projeto 2",
    ]);
})

app.post('/projects', (request, response) => {
    const body = request.body;
    const { title, owner } = request.body;

    console.log(body);
    console.log(title);
    console.log(owner);

    return response.json([
        "Projeto 1",
        "Projeto 2",
        "Projeto 3"
    ])
})

app.put('/projects/:id', (request, response) => {
    const params = request.params;
    console.log(params);

    const { id } = request.params;
    console.log(id);

    const body = request.body;
    console.log(body)

    return response.json([
        "Projeto 4",
        "Projeto 2",
        "Projeto 3"
    ])
})

app.patch('/projects/:id', (request, response) => {
    return response.json([
        "Projeto 4",
        "Projeto 7",
        "Projeto 3"
    ])
})

app.delete('/projects/:id', (request, response) => {
    return response.json([
        "Projeto 2",
        "Projeto 3"
    ])
})



app.listen(3333, () =>{
    console.log('Rodando o back, fela 😎️')
});