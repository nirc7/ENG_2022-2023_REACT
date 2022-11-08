import logo from './logo.svg';
import './App.css';
import EHeader from './Elements/EHeader';
import FCStudent from './Functional Components/FCStudent';
import CCPerson from './Class Components/CCPerson';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {EHeader}
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{
          color: 'royalblue',
          border: '2px dashed yellow',
          padding: 10
        }}>Ours App!</p>
        <CCPerson id={57}/>
        <CCPerson id={77} grade={88}/>
        <FCStudent id={"03457777"} grade={71} name="avi"  /> <br />
        <FCStudent id={"7777777"} grade={100} name="benny"  />     <br />   
      </header>
    </div>
  );
}

export default App;
