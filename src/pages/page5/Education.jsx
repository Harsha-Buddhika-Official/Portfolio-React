import './education.css';
import EduTemp from '../../components/Education_Block/EduTemp.jsx';

function Education(){
    const degrees = [
        {
            university: "Eastern University Srilanka",
            name: "Bachelor of Science in Computer Science",
            year: "2020 - 2024",
            description: "Specialized in Artificial Intelligence and Machine Learning. Completed thesis on Neural Network Optimization Techniques.",
            keyCourses: ["Advanced Algorithms", "Deep Learning", "Computer Vision", "Natural Language Processing"],
            achievements: ["Graduated with Honors", "Dean's List (all semesters)", "AI Research Assistant"]
        },
        {
            university: "Eastern University Srilanka",
            name: "Bachelor of Science in Computer Science",
            year: "2020 - 2024",
            description: "Specialized in Artificial Intelligence and Machine Learning. Completed thesis on Neural Network Optimization Techniques.",
            keyCourses: ["Advanced Algorithms", "Deep Learning", "Computer Vision", "Natural Language Processing"],
            achievements: ["Graduated with Honors", "Dean's List (all semesters)", "AI Research Assistant"]
        },
    ];

    return(
        <>
            <h1 className='Edu-Tital'>Education</h1>
            {degrees.map((degree, index) => (
                <EduTemp
                    key={index}
                    university={degree.university}
                    name={degree.name}
                    year={degree.year}
                    description={degree.description}
                    keyCourses={degree.keyCourses}
                    achievements={degree.achievements}
                    />
            ))}
        </>
    )
}
export default Education;