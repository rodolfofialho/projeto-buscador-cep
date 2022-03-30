
import{ FiSearch } from 'react-icons/fi';
import './style.css';

function App() {
  return (
    <div className="container">
      <h1 className="title">Buscador CEP </h1>

      <div className="containerInput">
        <input type="text" placeholder="Digite seu cep.."></input>
        <button className="btn">
          <FiSearch size={25} color="#FFF"/>
        </button>
      </div>

      <main className='main'>
        <h2>CEP: 56565665</h2>

        <span>Rua Horizonte infinito</span>
        <span>Complemento: Algum lugar </span>
        <span>Vila Nova </span>
        <span>São Paulo - SP </span>


      </main>
    </div>
  );
}

export default App;
