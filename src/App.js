import logo from './logo.jpg'
import './App.css'

// Component imports
import Nav from './components/Nav'
import Characters from './components/Characters'
import Places from './components/Places'
import Films from './components/Films'

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
      <main>
        <div id='characters'><Characters /></div>
        <div id='places'><Places /></div>
        <div id='films'><Films /></div>
      </main>
    </div>
  );
}

export default App;
