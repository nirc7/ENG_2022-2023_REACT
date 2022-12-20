import logo from './logo.svg';
import './App.css';
import ProductItem from './Comps/ProductItem';
import ProductList from './Comps/ProductList';
import CartList from './Comps/CartList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductList /> <br/>
        <CartList/>
      </header>
    </div>
  );
}

export default App;
