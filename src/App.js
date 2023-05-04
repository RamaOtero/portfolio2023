import Skills from './components/Views/Skills/Skills.js';
import AboutMe from './components/Views/AboutMe/AboutMe.js';
import Footer from './components/Main/Footer/Footer.js';
import Home from './components/Views/Home/Home.js';
import Designer from './components/Views/Designer/Designer.js';
import './components/appCss.css'
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  return (
    <div>
        <Footer />
      <div className='fondo'>
        <Home />
        <AboutMe />
        <Skills />
        <Designer />         
      </div>
    </div>
  );
}
AOS.init();
export default App;
