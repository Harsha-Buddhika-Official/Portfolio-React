import Results from '../../../components/Results_block/results'
import './ResultsMain.css'

function ResultsMain() {
    const semesterData = {
        semester1: {
            year: "I",
            semester: "I",
            resultsData: [
                { courseId: "CO 1121", courseName: "Basic Mathematics for Computing", result: "A+" },
                { courseId: "CO 1122", courseName: "Basic Computer Programming", result: "A" },
                { courseId: "CO 1112", courseName: "Practical work on CO 1122", result: "A" },
                { courseId: "CO 1123", courseName: "Formal Methods for Problem Solving", result: "B-" },
                { courseId: "CO 1124", courseName: "Computer Systems and PC Applications", result: "A-" },
                { courseId: "CO 1114", courseName: "Practical work on CO 1124", result: "A" },
                { courseId: "CO 1125", courseName: "Statistics for Science and Technology", result: "B" },
                { courseId: "CO 1115", courseName: "Practical Work on CO 1125", result: "A+" },
                { courseId: "CO 1126", courseName: "Management Information System", result: "C+" },
                { courseId: "GEP 1", courseName: "General English Proficiency - I", result: "A-" }
            ],
            gpa: "3.43"
        },
        // You can add more semesters here following the same structure
    };

    return (
        <div className="results-main">
            <h1 className="results-heading">Academic Results</h1>
            <Results 
                year={semesterData.semester1.year}
                semester={semesterData.semester1.semester}
                resultsData={semesterData.semester1.resultsData}
                gpa={semesterData.semester1.gpa}
            />
            {/* Add more Results components here as needed */}
        </div>
    )
}

export default ResultsMain;