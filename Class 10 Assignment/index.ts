//============>> Assignment Callback, Promise, Async and Await <<===================

//=============>> ### **Question 1: Callbacks** <<===============================
// **Task:**
// You are creating a basic calculator application. Write a TypeScript function named **`calculate`** that takes two numbers and an operation (add, subtract, multiply, or divide) as parameters. Implement a callback function to handle the calculation and display the result.

import inquirer from "inquirer";

type Operation = {
    () : void
}
function calculate(num1:number,num2:number,operation:(m1:number,n2:number)=>number):void{
    const result = operation(num1,num2);
    console.log(`The result is ${result}.`);
}

function add(n1:number,n2:number){
    return n1 + n2;
}

function subtract(n1:number,n2:number){
    return n1 - n2;
}

function multiply(n1:number,n2:number){
    return n1 * n2;
}

function divide(n1:number,n2:number){
    return n1 / n2;
}

// function call
calculate(45,5,add);
calculate(45,5,subtract);
calculate(4,5,multiply);
calculate(40,5,divide);





//======================>>  ### **Question 2: Promises** <<====================
// **Task:**
// Imagine you are building a simple quiz app. Create a TypeScript function named **`fetchQuestion`** that returns a promise. This promise should resolve with a random quiz question (string). Use the promise to display the question when it's ready.

// Question's which repeat randomly
let quizQuestion:string[] = [
    "Q1: What is the capital city of Pakistan?",
    "Q2: Which river is the longest in Pakistan?",
    "Q3: What is the official language of Pakistan?",
    "Q4: Which mountain range runs along the western border of Pakistan?",
    "Q5: In which year did Pakistan gain independence?"
];


const MyPromise = new Promise((resolve)=>{
    console.log("Fetching Quection's From Web Apis!!!");        
    setTimeout(() =>  {
        const randomIndex = Math.floor(Math.random()*quizQuestion.length); // random question repeat
        resolve(quizQuestion[randomIndex]);

    }, 2000);
});

// To get data
MyPromise.then((question)=>{
    console.log(question);
    
})






//===================>>>>  ### **Question 3: Async/Await** <<===========================
// **Task:**
// Build a TypeScript function named **`waitAndGreet`** that takes a name (string) as a parameter. This function should use async/await to simulate a delay (e.g., 2 seconds) and then display a greeting with the provided name. Call this function from within an async function and log the result.
// These tasks should be suitable for beginners while still covering the basics of callbacks, promises, and async/await in TypeScript.

async function waitAndGreet(name:string):Promise<string> {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(`Hello,${name}.`)
        }, 2000);
    });
}

async function greeting() {
    const result = await waitAndGreet("Sayyam");
    console.log(result);
}
greeting();