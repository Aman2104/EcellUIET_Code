import './App.css';
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import About from './components/About'
import Mainpage from './components/Mainpage'
import Contactform from './components/Contactform'
import Handles from './components/Handles'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <About/>
      <Mainpage/>
      <Contactform/>
      <Handles/>
    </div>
  ); 
}

export default App;
