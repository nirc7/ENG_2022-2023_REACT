import logo from './logo.svg';
import './App.css';
import Hooks from './Hooks';
import ShowFromContext from './ShowFromContext';
import ChangeHobby from './ChangeHobby';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ChangeHobby/>
        <ShowFromContext/>
        <Hooks/>
      </header>
    </div>
  );
}

export default App;
