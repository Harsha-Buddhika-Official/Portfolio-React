import HomePage from './pages/HomePage/HomePage';
import NavigationBar from './components/Navigation_Bar/NavigationBar';
import AboutMe from './pages/page2/AboutMe';
import './App.css'

function App() {
  return (
    <>
      <div className='Navigator'>
        <NavigationBar/>
      </div>
      <HomePage/>
      <AboutMe/>
    </>
  );
}

export default App
