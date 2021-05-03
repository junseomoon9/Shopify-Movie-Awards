import './App.css';
import Nominations from './components/Nominations';
import Results from './components/Results';
import Search from './components/Search'

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>SHOPPIES</h1>
      </div>
      <div className="main">
        <div className="container-one">
          <Search />
        </div>
        <div className="container-two">
          <Results />
          <Nominations/>
        </div>
      </div>

    </div>
  );
}

export default App;
