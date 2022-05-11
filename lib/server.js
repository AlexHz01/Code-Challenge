const StudentsController = require("../lib/Controller/StudentsController");
const express = require ("express");
const  {request, response} = require("express");

const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) =>{
    response.json({message : "Students control Api welcome! "})
})

app.get ("/v1/AllStudents", (request, response) =>{
    const Print = StudentsController.allStudents("visualpartners.json");
    response.json(Print)
})

app.get("/v1/getCertifiedEmails",(request, response) =>{
    const studentsValidate = StudentsController.Certification(true);
    response.json(studentsValidate);
});

app.get("/v1/Credits/:credits",(request, response) =>{
    const credits = request.params.credits;
    const studentsCredits = StudentsController.getsCredits(credits);
    response.json(studentsCredits);
});


app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});
