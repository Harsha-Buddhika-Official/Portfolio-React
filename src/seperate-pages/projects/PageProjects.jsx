import './PageProjects.css';
import NavigationBar from '../../components/Navigation_Bar/NavigationBar.jsx';
import Projects from '../../pages/page3/Projects.jsx';
import Footer from '../../pages/Footer/Footer.jsx';

function PageProjects() {
  return (
    <>
      <div className='Navigator'>
        <NavigationBar/>
      </div>
      <div className='page-about'>
          <div className='page-about-content'>
              <h1>Projects</h1>
              <p>This is the about page.</p>
          </div>
      </div>
      <Projects/>
      <Footer/>
    </>
  );
}
export default PageProjects;