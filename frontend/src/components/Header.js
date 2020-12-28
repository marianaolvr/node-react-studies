import React from 'react';

export default function Header({ title, content, children }) {
    return (
        <header>
            <h1>{title}</h1>
            <p>{content}</p>
            {children}
        </header>           
    )
}