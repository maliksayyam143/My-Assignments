import inquirer from "inquirer";
interface Company {
  id: string;
  name: string;
  departments: string | number;
  cellNo: number;
}

let company: Company = await inquirer.prompt([
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
