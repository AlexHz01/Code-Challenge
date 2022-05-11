class StudentsCredits {
    static explorerCreditsNeeded (students, studentCredits){
        const StudentsByCredits = students.filter((students) => students.credits > studentCredits);
        const EmailAllStudents = StudentsByCredits.map((students) => students.name);
        return EmailAllStudents;
    }}

module.exports = StudentsCredits;