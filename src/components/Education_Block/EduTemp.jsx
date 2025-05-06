import './EduTempStyle.css';

function EduTemp(name, university, year, description, keyCourses, achievements) {
    return(
        <>
            <div>
                <h2 className='university-name'>{university}</h2>
                <h3 className='degree'>{name}</h3>
                <h4 className='degree-year'>{year}</h4>
            </div>
            <div>
                <p>{description}</p>
                <h5>Key Course</h5>
                <ol>
                    <li>Advanced Algorithms</li>
                    <li>Deep Learning</li>
                    <li>Computer Vision</li>
                    <li>Natural Language Processing</li>
                </ol>
                <h5>Achievements</h5>
                <ul>
                    <li>Graduated with Honors</li>
                    <li>Dean's List (all semesters)</li>
                    <li>AI Research Assistant</li>
                </ul>
            </div>
        </>
    )
    
}
export default EduTemp;