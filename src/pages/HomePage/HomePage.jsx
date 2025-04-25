import './HOmeStyle.css'
import TypingAnimation from './Typing_Automation/typingAnimation';

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
                    <a href="">
                        <button className='cv-button'>Download CV</button>
                    </a>
                </div>
            </div>
        </>
    );
}
export default HomePage;