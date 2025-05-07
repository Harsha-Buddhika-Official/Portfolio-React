import './education.css';
import EduTemp from '../../components/Education_Block/EduTemp.jsx';
import Uni from './logo/UniLogo.png'
import nextgen from './logo/nextgen.png'

function Education(){
    const degrees = [
        {
            university: "Eastern University Srilanka",
            name: "Bachelor of Science in Computer Science",
            year: "2024 - 2027",
            description: "My degree provided a strong foundation in computing, specializing in AI and software development. The curriculum covered algorithms, databases, and networks with hands-on labs and projects. I gained programming skills (Python, Java) and research experience in neural networks, preparing me for tech industry challenges.",
            keyCourses: [   "Advanced Mathematics for Computing", "Operating Systems", "Software Engineering",
                            "Data Structures & Algorithms", "Database Management Systems", "Logic Programming & Expert Systems",
                            "Computer Networks", "Computer Graphics", "Data Security", "Theory of Computing"],
            achievements: ["Graduated with 1st Class", "Top Performer in Advanced Algorithms", "Hackathon Winner (2026)"],
            logo: Uni,
        },
        {
            university: "NextGen Campus",
            name: "Certificate in Cyber Security & Networking",
            year: "February 23, 2021 – June 29, 2021",
            description: "Successfully completed an intensive program covering foundational and advanced topics in cybersecurity and networking, aimed at preparing professionals for modern IT challenges.",
            keyCourses: [   "Principles of Cybersecurity", "Network Infrastructure & Security", "Threat Detection & Mitigation", "Practical hands-on training",],
            achievements: ["Earned a verified credential from a recognized IT training institute.", "Demonstrated commitment to upskilling in high-demand IT domains.",],
            logo: nextgen,
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
                    logo={degree.logo}
                    />
            ))}
        </>
    )
}
export default Education;