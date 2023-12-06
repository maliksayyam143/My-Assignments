import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        type: "input",
        name: "num1",
        message: "Enter First Number?",
    },
    {
        type: "input",
        name: "num2",
        message: "Enter Second Number?",
    },
    {
        type: "list",
        name: "operations",
        choices: ["+", "-", "/", "*", "**", "%"]
    }
]);
const { num1, num2, operations } = answer;
const maths = (num1, num2, operation) => {
    switch (operation) {
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;
        case "%":
            return num1 % num2;
            break;
        case "**":
            return num1 ** num2;
            break;
        default:
            return "Operation not possible";
            break;
    }
};
console.log(`${num1} ${operations} ${num2} = ` + maths(Number(num1), Number(num2), operations));
if (maths(Number(num1), Number(num2), operations)) {
    console.log("Thanks for using the calculator! Powered By Sayyam!!! \n -----------@All Copy-Right 2023---------- ");
}
else {
    console.log("No problem. If you change your mind, feel free to use the calculator later.");
}
