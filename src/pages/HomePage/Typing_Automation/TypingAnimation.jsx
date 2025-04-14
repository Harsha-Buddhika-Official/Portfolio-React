import { useState, useEffect } from 'react';
import './TypingAnimation.css';

function TypingAnimation(){
  const phrases = [
    "Computer Science Undergraduate",
    "Software Engineer",
    "UI/UX Designer",
    "Full Stack Developer",
    "Web Developer",
    "Graphic Designer",
  ];
  
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    
    if (isTyping) {
      // Typing effect
      if (displayText.length < currentPhrase.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timer);
      }
      else {
        // Pause before erasing
        const timer = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
        return () => clearTimeout(timer);
      }
    }
    else {
      // Erasing effect
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        // Move to next phrase
        const nextIndex = (phraseIndex + 1) % phrases.length;
        setPhraseIndex(nextIndex);
        setIsTyping(true);
      }
    }
  }, [displayText, phraseIndex, isTyping, phrases]);
  return (
        <div className="text-container">
          <span className="dynamic-text">
            {displayText}
            <span className="cursor"></span>
          </span>
        </div>
  );
};

export default TypingAnimation;