import React, { useState } from 'react';
import './EduTempStyle.css';

function EduTemp({ name, university, year, description, keyCourses, achievements }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="education-container">
            <div className="education-item-container">
                <div className="education-header" onClick={toggleExpand}>
                    <div>
                        <h2 className="university-name">
                            🎓 {university}
                        </h2>
                        <h3 className="degree">{name}</h3>
                        <h4 className="degree-year">
                            📅 {year}
                        </h4>
                    </div>
                    <div className="toggle-icon">{isExpanded ? '▲' : '▼'}</div>
                </div>
                {isExpanded && (
                    <div className="degree-scroll">
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
                )}
            </div>
        </div>
    );
}

export default EduTemp;