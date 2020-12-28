import React from 'react';
import Header from './components/Header';

export default function App() {
    return (
        <>
        <Header title="Homepage" content="lorem la la la conteudo"/>
        <Header title="Projects page">
        <ul>
            <li>Projeto 2</li>
            <li>Projeto 3</li>
            <li>Projeto 4</li>
            <li>Projeto 5</li>
        </ul>
        </Header>
        </>
    )    
}
