import inquirer from 'inquirer';

// async function main() {
//   const { age } = await inquirer.prompt([
//     {
//       type: 'number',
//       name: 'age',
//       message: 'Please enter your age:',
//       validate: (input) => (input >= 0 ? true : 'Please enter a valid age.'),
//     },
//   ]);

//   if (age >= 18) {
//     console.log('You can attend the class.');
//   } else {
//     console.log('Sorry, you cannot attend the class. You must be 18 or older.');
//   }
// }

// main();

// let age = await inquirer.prompt([{
//     name: 'age',
//     type: 'number',
//     message: 'Enter your age:',
//     validate: (input) => (input >=0 && input <=150 ? true : 'Please enter a valid age.'),
// }]);
// if (age >= 18){
//     console.log("You can cast a vote");
// }
// else{
//     console.log("You cannot cast a vote!!");
// }
// let pet = "Dog";

// async function myFunction() {
//     let { variable } = await inquirer.prompt ([{
//         name: 'variable',
//         type: 'input',
//         message: 'Is your pet hungry (Yes or No)'
//     }])


//     if(variable === 'yes' || variable === 'Yes'){
//         console.log(`${pet} is hungry.`)
//     }
//     else{
//         console.log(`${pet} is not hungry`);
//     }
// }
// myFunction

// function greet(name: string){
//     console.log("Hello, " + name.toLowerCase() + "!!");
// }

// greet("ALI");

// function getFavoriteNumber(): string {
//     return "Value is positive";
//   }
  
//   console.log(getFavoriteNumber())
//   getFavoriteNumber();

//Arrow Function
// let sum1 = (x: number, y: number): number => {
//     return x + y;
//   };
  
//   console.log(sum1(2,3))

let arr = [1, 2, 3, 4, 5, 6];

console.log(arr[0]);