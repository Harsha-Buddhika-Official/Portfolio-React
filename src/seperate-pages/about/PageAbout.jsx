import './pageAbout.css';
import NavigationBar from '../../components/Navigation_Bar/NavigationBar.jsx';
import AboutMe from '../../pages/page2/AboutMe.jsx';
import Footer from '../../pages/Footer/Footer.jsx';

function PageAbout() {
  return (
    <div className='page-about-container'>
      <div className='Navigator'>
        <NavigationBar/>
      </div>
      <div className='page-about'>
          <div className='page-about-content'>
              <h1>About Me</h1>
              <p>This is the about page.</p>
          </div>
      </div>
      <AboutMe/>
      <Footer/>
    </div>
  );
}
export default PageAbout;