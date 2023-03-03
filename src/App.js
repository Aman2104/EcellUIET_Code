import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
import Benefits from './components/Benefits'
import Work from './components/Work'
import Contactform from './components/Contactform'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Work/>
      <Benefits/>
      <Contactform/>
    </div>
  );
}

export default App;
