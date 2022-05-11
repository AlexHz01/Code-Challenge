const StudentsController = require("../../lib/Controller/StudentsController")
describe("Pruebas para control de estudiantes", () =>{
    test("consult de todos los estudiantes con todos sus campos", () =>{

        const allstudentstrue = StudentsController.Certification(true);
        expect(allstudentstrue).toBe(22)
    })

    test("Prueba 2 para los estudiantes con creditos mayor a 500", () =>{
        const students = StudentsController.getsCredits(500)
        expect(students.length).toBe(27)
    })
})

    // const studentsTrue = [{name: kike , haveCertification : true}, {name:vicky, haveCertification: false }]
    // const print = StudentsController.Certification(true)
    // expect(print).toEqual([{name : kike , haveCertification : true}])
