import logo from './logo.svg';
import './App.css';
import EHeader from './Elements/Eheader';
import FCStudent from './Functional Comps/FCStudent';
import CCCar from './Class Comps/CCCar';
import CCCarsList from './Class Comps/CCCarsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CCCarsList />
        <CCCar id={1} model="BMW" speed={200}/>
        <FCStudent id={1} name="avi" grade={100}/>
        {EHeader}
      </header>
    </div>
  );
}

export default App;
