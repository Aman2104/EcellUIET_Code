import './App.css';
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Corousel from './components/CorouselItem'
import About from './components/About'
import Mainpage from './components/Mainpage'
import Contactform from './components/Contactform'
import Handles from './components/Handles'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <LandingPage/>
      <Corousel/>
      <About/>
      <Mainpage/>
      <Contactform/>
      <Handles/>
      <Footer/>
    </div>
  ); 
}

export default App;
