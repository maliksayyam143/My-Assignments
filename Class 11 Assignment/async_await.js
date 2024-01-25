// Facebook Creating account
import inquirer from "inquirer";
const fullName = async () => {
    await inquirer.prompt([
        {
            name: "fullName",
            type: "input",
            message: "Enter your Fullname"
        }
    ]);
};
const userName = async () => {
    await inquirer.prompt([
        {
            name: "userName",
            type: "input",
            message: "Enter your Username"
        }
    ]);
};
const email = async () => {
    await inquirer.prompt([
        {
            name: "email",
            type: "input",
            message: "Enter your email"
        }
    ]);
};
const password = async () => {
    await inquirer.prompt([
        {
            name: "password",
            type: "input",
            message: "Enter your password"
        }
    ]);
    console.log(password);
};
const account = async () => {
    await fullName();
    await userName();
    await email();
    await password();
};
account();
