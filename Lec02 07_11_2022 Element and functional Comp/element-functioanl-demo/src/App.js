import logo from './logo.svg';
import './App.css';
import EHeader from './Elements/EHeader';
import FCStudent from './Functional Coponents/FCStudent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {EHeader}
        <img src={logo} className="App-logo" alt="logo" />
        <p>Ruppin</p>
        <FCStudent id={7} name={"avi"} grade={100} /> <br/>  
        <FCStudent id={7} name={"avi"} grade={50} />
      </header>
    </div>
  );
}

export default App;
