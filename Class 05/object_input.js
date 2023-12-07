import inquirer from "inquirer";
let company = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Enter your name?",
    },
    {
        type: "input",
        name: "id",
        message: "Enter your id that provided by company?",
    },
    {
        type: "list",
        name: "departments",
        message: "In which department you work?",
        choices: ["CS", "IT", "Software"],
    },
    {
        type: "input",
        name: "cellNo",
        message: "Plz Enter your cell No?",
    },
]);
console.log(`"Thanks, ${company.name} for the introduction—appreciate your response!"`);
