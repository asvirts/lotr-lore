import logo from './logo.jpg';
import './App.css';

// Component imports
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <nav>
        <Nav />
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Lord of the Rings Lore</h1>
      </header>
    </div>
  );
}

export default App;
