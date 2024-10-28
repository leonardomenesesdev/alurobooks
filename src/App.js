import './App.css';
import logo from './imagens/logo.svg'
function App() {
  return (
    <div className="App">
      <header className="App-Header">
      <div className='logo'>
        <img src={logo} alt='Logo do site'></img>
        <p><strong>Alura</strong><i>Books</i></p>
      </div>
      </header>
    </div>
  );
}

export default App;
