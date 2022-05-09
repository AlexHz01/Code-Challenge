const  ExplorerCertification = require("../../lib/services/ExplorerCertification")

describe("Prueba 2 Certification de explorer", () =>{
    test("test de certification", () =>{
        const explorer = [{ haveCertification : true }, {haveCertification: false}]
        const certification = ExplorerCertification.haveCertifications(explorer, true)
        expect(certification).toEqual ([{ haveCertification : true }])
    })
})