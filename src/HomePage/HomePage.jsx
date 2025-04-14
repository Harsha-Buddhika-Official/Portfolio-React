import './HOmeStyle.css'
import NavigationBar from '../Navigation_Bar/NavigationBar';
import TypingAnimation from './Typing_Automation/TypingAnimation';

function HomePage(){
    return(
        <>
            <NavigationBar/>
            <div className='center-items'>
                <div className='text-container'>
                    <h1>Hi there...! <br/>
                    I'm Harsha Buddhika
                    </h1>
                </div>
                <TypingAnimation/>
            </div>
        </>
    );
}
export default HomePage