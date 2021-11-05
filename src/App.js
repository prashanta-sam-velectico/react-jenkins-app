import logo from './logo.svg';
import './App.css';

function App() {
  const queryString = require('query-string');
  const parsed = queryString.parse(window.location.search);
  console.log(parsed);
//=> '?foo=bar'
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         we are in {process.env.REACT_APP_API_URL}
        </p>
       
     
      </header>
    </div>
  );
}

export default App;
