import inquirer from 'inquirer';

// async function main() {
//   const { age } = await inquirer.prompt([
//     {
//       type: 'number',
//       name: 'age',
//       message: 'Please enter your age:',
//       validate: (input) => (input >= 0 && input<=120 ? true : 'Please enter a valid age.'),
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
//     type: 'input',
//     message: 'Enter your age:',
//     validate: (input) => (input >=0 && input <=150 ? true : 'Please enter a valid age.'),
// }]);
// if (age.age >= 18){
//     console.log("You can cast a vote");
// }
// else{
//     console.log("You cannot cast a vote!!");
// }


// let pet = "Dog";
//     let  {variable } = await inquirer.prompt ([{
//         name: 'variable',
//         type: 'input',
//         message: 'Is your pet hungry (Yes or No)'
//     }])

//     if(variable === 'yes' || variable === 'Yes'){
//         console.log(`${pet} is hungry.He want some food for eat.`)
//     }
//     else{
//         console.log(`${pet} is not hungry`);
//     }


// function greet(name: string){
//     console.log("Hello, " + name.toLowerCase() + "!!");
// }
// greet("ALI");

// function Greet(name:string){
//     console.log("Hello,"+name.toUpperCase()+" Nice to meat you ...!! You are cool boudy....!");
// }
// Greet("sayyam");
// Greet("Sham");


// function getFavoriteNumber(): string {
//     return "Value is positive";
//   }
//   console.log(getFavoriteNumber())
//   getFavoriteNumber();


// Arrow Function example of sum
// let sum1 = (x: number, y: number): number => {
    // return x + y;
//   };
//   console.log(sum1(2,3))

// Example of Multiplication by Arrow Function
// let multi=(n:number,y:number):number =>{
//     return n*y;
// }
// console.log(multi(9,7));
 

// let array = [1, 2, 3, 4, 5, 6];
// console.log(array);
// array.push(5,6,7,8); // Push is used to add value in array.
// console.log(array);
// array.pop();  // pop is used to remove one value from last side of array
// console.log(array);
