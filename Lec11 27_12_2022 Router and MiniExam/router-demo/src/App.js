import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Menu from './Pages/Menu';
import User from './Pages/User';

function App() {
  return (
    <div className="App">
      <div style={{ margin: 20, fontSize: 25, color: 'red' }}>
        <Link to="/">Home</Link> |
        <Link to="/about">About</Link> |
        <Link to="/menu/7">Menu</Link>
      </div>
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu/:userId' element={<Menu />} />
          <Route path='/user' element={<User />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
