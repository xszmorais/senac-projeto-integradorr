import React, { useEffect, useState } from 'react';

function App() {
    const [routes, setRoutes] = useState([]);
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        fetch('/api/routes')
            .then(response => response.json())
            .then(data => setRoutes(data.routes));

        fetch('/api/emergency-contacts')
            .then(response => response.json())
            .then(data => setContacts(data.contacts));
    }, []);

    return (
        <div>
            <h1>Rotas de Saída</h1>
            <ul>
                {routes.map((route, index) => (
                    <li key={index}>{route}</li>
                ))}
            </ul>
            <h1>Contatos de Emergência</h1>
            <ul>
                {contacts.map((contact, index) => (
                    <li key={index}>{contact}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
