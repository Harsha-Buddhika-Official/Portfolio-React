import React, { useState, useRef, useEffect } from 'react';
import './EduTempStyle.css';
import calander from './icons/calander.png';

function EduTemp({ name, university, year, description, keyCourses, achievements,logo }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef(null);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    useEffect(() => {
        if (isExpanded) {
            const contentHeight = contentRef.current.scrollHeight;
            contentRef.current.style.height = `${contentHeight}px`;
        } else {
            contentRef.current.style.height = '0px';
        }
    }, [isExpanded]);

    return (
        <div className="education-container">
            <div className="education-item-container">
                <div className="education-header" onClick={toggleExpand}>
                <img src={logo} alt="Education center logo" className='logo'/>
                    <div>
                        <h2 className="university-name">
                            🎓 {university}
                        </h2>
                        <h3 className="degree">{name}</h3>
                        <h4 className="degree-year">
                            <img src={calander} alt="calander icon" className='calander'/>
                            {year}
                        </h4>
                    </div>
                    <div className="toggle-icon">{isExpanded ? '▲' : '▼'}</div>
                </div>
                <div
                    className={`degree-scroll ${isExpanded ? 'expanded' : ''}`}
                    ref={contentRef}
                >
                    <div className="degree-content">
                        <p className="description">{description}</p>
                        <h5 className="key-course">Key Courses</h5>
                        <ol className="key-course-list">
                            {keyCourses.map((course, index) => (
                                <li key={index} className="key-course-list-items">
                                    {course}
                                </li>
                            ))}
                        </ol>
                        <h5 className="achievements">Achievements</h5>
                        <ul className="achievements-list">
                            {achievements.map((achievement, index) => (
                                <li key={index} className="achievements-list-items">
                                    {achievement}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EduTemp;