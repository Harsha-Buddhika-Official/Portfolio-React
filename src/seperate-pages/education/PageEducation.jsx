import './PageEducation.css';
import NavigationBar from '../../components/Navigation_Bar/NavigationBar.jsx';
import Education from '../../pages/page5/Education.jsx';
import Footer from '../../pages/Footer/Footer.jsx';
import Skills from '../../pages/page4/Skills.jsx';
import ResultsMain from './Results-Main/ResultsMain.jsx';

function PageEducation() {
  return (
    <div className='page-education-container'>
      <div className='Navigator'>
        <NavigationBar/>
      </div>
      <div className='page-about'>
          <div className='page-about-content'>
              <h1>Education</h1>
              <p>This is the Education, Skills & Results page.</p>
          </div>
      </div>
      <div className='page-education'>
        <Education/>
      </div>
      <Skills/>
      <ResultsMain/>
      <Footer/>
    </div>
  );
}
export default PageEducation;