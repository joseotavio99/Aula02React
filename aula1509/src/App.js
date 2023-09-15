import OlaMundo from './components/olaMundo';
import DigaMeuNome from './components/digaMeuNome';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1> Olá mundo </h1>
      <OlaMundo />
      <DigaMeuNome nome="Kauê" />
    </div>
  );
}

export default App;
