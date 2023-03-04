import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
import Mainpage from './components/Mainpage'
import Contactform from './components/Contactform'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <Mainpage/>
      <Contactform/>
    </div>
  );
}

export default App;
