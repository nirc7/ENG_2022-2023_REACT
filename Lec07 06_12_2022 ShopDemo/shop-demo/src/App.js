import logo from './logo.svg';
import './App.css';
import FCProductList from './FunctionalComps/FCProductList';
import FCCartList from './FunctionalComps/FCCartList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FCCartList />
        <FCProductList />
      </header>
    </div>
  );
}

export default App;
