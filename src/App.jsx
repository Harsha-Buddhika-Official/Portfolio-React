import HomePage from './pages/HomePage/HomePage';
import NavigationBar from './components/Navigation_Bar/NavigationBar';
import AboutMe from './pages/page2/AboutMe';
import Projects from './pages/page3/Projects';
import Skills from './pages/page4/Skills';
import Education from './pages/page5/Education';
import './App.css'

function App() {
  return (
    <>
      {/* <div className='Navigator'>
        <NavigationBar/>
      </div>
      <HomePage/>
      <AboutMe/>
      <Projects/>
      <Skills/> */}
      <Education/>
    </>
  );
}

export default App
