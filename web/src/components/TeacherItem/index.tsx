import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/57969267?s=460&u=2ac71b8d5099df7a6058679c0f0515c460de0c1e&v=4" alt="Gabriel Pires"/>
        <div>
          <strong>Gabriel Pires</strong>
          <span>História</span>
        </div>
      </header>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat aut pariatur, cum tempore explicabo vero doloremque, veritatis, atque provident unde nihil voluptates rerum quibusdam expedita ab possimus nostrum voluptatum maiores?</p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;