import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './Pages/AddProduct';
import Register from './Pages/Register';
import Shop from './Pages/Shop';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/addproduct' element={<AddProduct/>} />
        <Route path='/register' element={<Register/>} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
