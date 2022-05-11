
class StudentsCertification {

    static haveCertifications (explorer, haveCertification) {
        const ExplorerCertification = explorer.filter((explorer) => explorer.haveCertification === haveCertification);
        const EmailAllStudents = ExplorerCertification.map((explorer) => explorer.email);
        return EmailAllStudents;
    }
}
module.exports = StudentsCertification;