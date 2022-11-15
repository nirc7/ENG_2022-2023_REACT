import logo from './logo.svg';
import './App.css';
import FCSeries from './Functional Comps/FCSeries';
import CCSeriesList from './Class Comps/CCSeriesList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CCSeriesList />
      </header>
    </div>
  );
}

export default App;
