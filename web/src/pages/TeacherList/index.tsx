import React from 'react';

import PageHeader from '../../components/PageHeader';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

const TeacherList: React.FC = () => {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="sucject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="sucject">Dia da semana</label>
            <input type="text" id="week-day" />
          </div>

          <div className="input-block">
            <label htmlFor="sucject">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </PageHeader>

      <main>
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
      </main>
    </div>
  );
}

export default TeacherList;