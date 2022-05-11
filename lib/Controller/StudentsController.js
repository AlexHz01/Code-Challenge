const StudentsCredits = require("../services/StudentsCredits");
const StudentsCertification = require("../services/StudentsCertification");
const Reader = require("../utils/Reader");

class StudentsController {

    static allStudents (students){
        return Reader.readJsonFile(students);
    }

    static Certification (getCertifiedEmails) {
        const allstudents = Reader.readJsonFile("visualpartners.json");
        return StudentsCertification.haveCertifications(allstudents, getCertifiedEmails);
    }
    static getsCredits (studentCredits){
        const allstudents = Reader.readJsonFile("visualpartners.json");
        return  StudentsCredits.explorerCreditsNeeded(allstudents, studentCredits);

    }

}

module.exports = StudentsController;