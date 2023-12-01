// ## Task 2:
// - **Scenario 1: Sum numbers**
// - Write a function named **`add`** that takes two numbers as arguments and returns their sum.
// console.log("Scenario 1: Sum numbers");    
// function add(x: number, y: number): number {
//     return x + y;
// }
// const result = add(5, 7);
// console.log(`5 + 7 = ${result}`); 
//  now for multiply
// function multiply(c:number,v:number){
//     return c*v;
// }
// const multiple =multiply(8,5);
// console.log(`8 * 5  = ${multiple}`);
// import inquirer from "inquirer";
// async function add(): Promise<void> {
//     let a = await inquirer.prompt([{
//         type: 'input',
//         name: 'num1',
//         message: "Enter your first number?"
//     }]);
//     let b = await inquirer.prompt([{
//         type: 'input',
//         name: 'num2',
//         message: "Enter Your second number?"
//     }]);
//     const num1: number = parseFloat(a.num1) || 0;
//     const num2: number = parseFloat(b.num2) || 0;
//     const result: number = num1 + num2;
//     console.log(`The sum of ${num1} and ${num2} is: ${result}`);
// }
// add();
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - **Scenario 2: Check Even or Odd**
//     - Develop a function **`checkEvenOrOdd`** that checks if a given number is even or odd.
//     - The function should take an integer as a parameter and return a string indicating whether the number is even or odd.
console.log("Even and Odd Function :");
function evenorodd(AnyNo) {
    if (AnyNo % 2 === 0) {
        console.log("Your no is Even");
    }
    else {
        console.log("Your no is oddd.");
    }
}
let number1 = evenorodd(6);
console.log(number1);
let number2 = evenorodd(9);
console.log(number2);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - **Scenario 3: Calculate Area:**
// - Create a function **`calculateArea`** that calculates the area of a rectangle.
// - The function should take width and height as parameters and return the calculated area.
console.log("Calculate the Area of Rectangle.");
console.log("Area of Rectangle = length * width.");
function calculatearea(length, width) {
    return length * width;
}
let length = 38;
let width = 25;
console.log(calculatearea(length, width));
// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - **Scenario 5: Temperature Conversion:**
//     - Create a function **`convertCelsiusToFahrenheit`** that converts temperature from Celsius to Fahrenheit.
//     - The function should take a temperature value in Celsius as a parameter and return the equivalent temperature in Fahrenheit.
console.log("Converting celsius to fahrenheit temperature?");
function Covertcelsiustofahren(Celsius) {
    return (Celsius * 9 / 5) + 32;
}
let celsiustemperature = 25;
let fahrenheittemperature = Covertcelsiustofahren(celsiustemperature);
console.log(celsiustemperature = fahrenheittemperature);
export {};
