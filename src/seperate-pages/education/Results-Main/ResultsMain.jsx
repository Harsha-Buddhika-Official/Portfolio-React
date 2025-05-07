import Results from '../../../components/Results_block/results'
import './ResultsMain.css'

function ResultsMain() {
    const semesterData = {
        semester1: {
            year: "I",
            semester: "I",
            resultsData: [
                { courseId: "CO 1121", courseName: "Basic Mathematics for Computing", result: "A+" },
                { courseId: "CO 1122", courseName: "Basic Computer Programming", result: "A+" },
                { courseId: "CO 1112", courseName: "Practical work on CO 1122", result: "A+" },
                { courseId: "CO 1123", courseName: "Formal Methods for Problem Solving", result: "A+" },
                { courseId: "CO 1124", courseName: "Computer Systems and PC Applications", result: "A+" },
                { courseId: "CO 1114", courseName: "Practical work on CO 1124", result: "A+" },
                { courseId: "CO 1125", courseName: "Statistics for Science and Technology", result: "A+" },
                { courseId: "CO 1115", courseName: "Practical Work on CO 1125", result: "A+" },
                { courseId: "CO 1126", courseName: "Management Information System", result: "A+" },
                { courseId: "GEP 1", courseName: "General English Proficiency - I", result: "A+" }
            ],
            gpa: "4.00"
        },
        // semester2: {
        //     year: "I",
        //     semester: "II",
        //     resultsData: [
        //         { courseId: "CO 1211", courseName: "Mathematics for Computing II", result: "B+" },
        //         { courseId: "CO 1212", courseName: "Fundamentals of Data Structures", result: "A" },
        //         { courseId: "CO 1213", courseName: "Practical for Data Structures", result: "A" },
        //         { courseId: "CO 1214", courseName: "Database Management Systems", result: "A-" },
        //         { courseId: "CO 1215", courseName: "Practical for DBMS", result: "A" },
        //         { courseId: "CO 1216", courseName: "Web Technologies", result: "A" },
        //         { courseId: "CO 1217", courseName: "Practical for Web Technologies", result: "A+" },
        //         { courseId: "CO 1218", courseName: "Professional Development", result: "B+" },
        //         { courseId: "GEP 2", courseName: "General English Proficiency - II", result: "A-" }
        //     ],
        //     gpa: "3.67"
        // }
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
            {/* <Results 
                year={semesterData.semester2.year}
                semester={semesterData.semester2.semester}
                resultsData={semesterData.semester2.resultsData}
                gpa={semesterData.semester2.gpa}
            /> */}
        </div>
    )
}

export default ResultsMain;