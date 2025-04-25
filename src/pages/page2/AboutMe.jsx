import './aboutStyling.css'
import profilePic from './assets/image1.jpg';

function AboutMe(){
    return(
        <div className="about-container">
                <img src={profilePic} alt="Profile Pic" className='profilePic'/>
            <div className='text-container'>
                <h1 className='tital-about'>About me</h1>
                <p className='paragraph'>
                            I'm a Computer Science undergraduate at Eastern University,Trincomalee Campus.<br/>
                            I'm a fast learner who grows through mistakes and constantly works to improve my skills. <br/>
                            Passionate about tech and always ready to take on
                            new challenges.
                </p>
            </div>
        </div>
    )
}
export default AboutMe;