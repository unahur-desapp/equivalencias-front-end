import React from 'react';
import { Titulo } from './Titulo';

const Usuario = () => {
  const amigos = ['Matias', 'Gonzalo', 'Lucila', 'Lautaro'];

  return (
    <div>
      <Titulo usuario={amigos[2]} color="red" />
      <Titulo usuario={amigos[0]} color="blue" />
      <p>Tu lista de amigos es: </p>
      <ul>
        {amigos.map((amigo, index) => (
          <li key={index}>{amigo}</li>
        ))}
      </ul>
      <p>Que tengas un buen día! </p>
    </div>
  );
};

export default Usuario;
