class ExplorerCertification {

    static haveCertifications (explorer, certification){
        const ExplorerCertification = explorer.filter((explorer) => explorer.haveCertification);
        return ExplorerCertification
    }
}
module.exports = ExplorerCertification