const ExplorerCredits = require("../../lib/services/ExplorerCredits")

describe("Prueba 3", () => {
    test("prueba de accreditation mayor a 500", ()=>{
        const explorer = {id : "kike" , credits : 600 };
        const Credits = ExplorerCredits.explorerCreditsNeeded(explorer)
        expect(Credits).toEqual({id : "kike" , credits : 600 })
    })
})