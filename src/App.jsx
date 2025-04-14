import HomePage from './pages/HomePage/HomePage';
import NavigationBar from './components/Navigation_Bar/NavigationBar';
import './App.css'

function App() {
  return (
    <>
      <div className='Navigator'>
        <NavigationBar/>
      </div>
      <HomePage/>
    </>
  );
}

export default App
