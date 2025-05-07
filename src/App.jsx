import HomePage from './pages/HomePage/HomePage.jsx';
import NavigationBar from './components/Navigation_Bar/NavigationBar.jsx';
import AboutMe from './pages/page2/AboutMe.jsx';
import Projects from './pages/page3/Projects.jsx';
import Skills from './pages/page4/Skills.jsx';
import Education from './pages/page5/Education.jsx';
import Contact from './pages/page6/Contact.jsx';
import Footer from './pages/Footer/Footer.jsx';
import './App.css'

function App() {
  return (
    <>
      <div className='Navigator'>
        <NavigationBar/>
      </div>
      <HomePage/>
      <AboutMe/>
      <Projects/>
      <Skills/>
      <div className='Edu'>
        <Education/>
      </div>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App
