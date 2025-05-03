import HomePage from './pages/HomePage/HomePage';
import NavigationBar from './components/Navigation_Bar/NavigationBar';
import AboutMe from './pages/page2/AboutMe';
import Projects from './pages/page3/Projects';
import './App.css'
import Template from './components/Project_block/template';

function App() {
  return (
    <>
      {/* <div className='Navigator'>
        <NavigationBar/>
      </div>
      <HomePage/>
      <AboutMe/> */}
      <Projects/>
      {/* <Template/> */}
    </>
  );
}

export default App
