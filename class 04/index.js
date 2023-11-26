// import inquirer from "inquirer";
// import { log } from "console"
// let answers = await inquirer.prompt([{
//     name: "age",
//     type: "number",
//     message: "Enter Your Age:"}
// ]);
// console.log("Inshallah, in "+(60-answers.age)+" Years you will be 60 years old.");
// let haspass: boolean = false;
// if(haspass){
//     console.log("Wellcome in class");
// }
// else{
//     console.log('Not Allow to enter in uni')
// }
// let student = true
// let age = 17
// if(student){
//     if(age >= 18){
//         console.log("Welcome to class.")
//     }else{
//         console.log("age restriction");
//     }
// }else{
//     console.log("not allow");
// }
// function getFavoriteNumber(): number {
//     return 26;
//    }
// console.log(getFavoriteNumber());
// ;
import inquirer from "inquirer";
// import { CLIENT_RENEG_LIMIT } from "tls";
// let answers = await inquirer.prompt([{
//     name: "age",
//     type: "number",
//     message: "Enter Your Age:"}
// ]);
// console.log("Inshallah, in "+(60-answers.age)+" Years you will be 60 years old.");
// let pass = await inquirer.prompt([]);
let haspass = await inquirer.prompt([{
        name: "pass",
        type: "boolean",
        message: "You have pass:"
    }]);
let age = await inquirer.prompt([{
        name: "age",
        type: "number",
        message: "What your age:"
    }]);
if (haspass = true) {
    console.log("You can attend the class");
    if (age >= 18) {
        console.log("Not allow under 18 year");
    }
}
else {
    console.log("Not allow to enter in uni without pass");
}
