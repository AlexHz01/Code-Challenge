const  ExplorerCertification = require("../../lib/services/StudentsCertification");

describe("Prueba 2 Certification de explorer", () =>{
    test("test de certification", () =>{
        const explorer = [{ haveCertification : true, email : "kike@gmail.com" }, {haveCertification: false, email : "Riusey@gmail.com"},{haveCertification: false, email : "Riusey@gmail.com"}];
        const certification = ExplorerCertification.haveCertifications(explorer, true);
        expect(certification).toEqual (["kike@gmail.com"]);
    });
});