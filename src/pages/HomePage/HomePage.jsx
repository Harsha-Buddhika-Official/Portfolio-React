import './HOmeStyle.css'
import TypingAnimation from './Typing_Automation/TypingAnimation';

function HomePage(){
    return(
        <>
            <div className='components-container'>
                <div className='center-items'>
                    <div className='text-container'>
                        <h1>Hi there...! <br/>
                        I'm Harsha Buddhika
                        </h1>
                    </div>
                    <TypingAnimation/>
                    {/* <p className='paragraph'>
                        I'm a Computer Science undergraduate at Eastern University,
                        Trincomalee Campus. I'm a fast learner who grows through
                        mistakes and constantly works to improve my skills.
                        Passionate about tech and always ready to take on
                        new challenges.
                    </p> */}
                    <a href="">
                        <button className='cv-button'>Download CV</button>
                    </a>
                </div>
            </div>
        </>
    );
}
export default HomePage