import './App.css';
import Home from './home';
import About from './About'
import Team from './Team'
import Contact from './Contact';
import { useMediaQuery } from 'react-responsive';
import logo from '/home/student/Desktop/Ghala-Website/src/pictures/logo-no-background 3.png';
import image from '/home/student/Desktop/Ghala-Website/src/pictures/plants.jpg'

function App() {
  return (
    <div className="app" >

    <header>
     <nav>
      <ul>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Team</a>
        <a href='#'>Contact Us</a>
      </ul>
      <img src={logo} alt='our_logo'></img>
     </nav>
    </header>
    
    <Home/>
    <About/>
    <Team/>
    <Contact/>
  </div>
  );
}

export default App;
