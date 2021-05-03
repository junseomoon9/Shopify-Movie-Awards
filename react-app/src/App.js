import './App.css';
import Nominations from './components/Nominations';
import Results from './components/Results';
import Search from './components/Search'
import Banner from './components/Banner'
import  {GlobalProvider} from "./context/GlobalContext";
import left from "./img/left.png" 
import right from "./img/right.png"

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <div className="header">
          <img className="leftImage" src={left} alt=""/>
          <div className="title">
            <h1>SHOPPIES</h1>
          </div>
          <img className="rightImage" src={right} alt=""/>
        </div>
    
        <div className="main">
          <div className="container-one">
            <Search />
          </div>
          <Banner/>
          <div className="container-two">
            <Results />
            <Nominations/>
          </div>
        </div>

      </div>
    </GlobalProvider>
    
  );
}

export default App;
