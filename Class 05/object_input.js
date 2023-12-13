import { log } from "console";
import chalk from "chalk";
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
console.log(`"Thanks, ${company.name} for the introduction—appreciate your response!"\n`);
let University = await inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Enter Your University Name?"
    },
    {
        type: "input",
        name: "id",
        message: "What your university id number?"
    },
    {
        type: "input",
        name: "compuss",
        message: "In which Compuss You Study?"
    }]);
log(chalk.green.bold.bgYellow ` Your University Name is ${University.name}.`);
log(chalk.green.bold.bgYellow ` Your University id is ${University.id}.`);
log(chalk.green.bold.bgYellow ` Your University Compuss is ${University.compuss}.`);
