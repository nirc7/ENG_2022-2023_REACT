import './App.css';
import CCRefsDemo from './Class Comps/CCRefsDemo';
import CCSeriesListApp from './Class Comps/CCSeriesListApp';
import FCSeries from './Functional Comps/FCSeries';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <FCSeries name={"avi"} seasons={7}/> */}
        <CCRefsDemo/>
        <CCSeriesListApp />
      </header>
    </div>
  );
}

export default App;
