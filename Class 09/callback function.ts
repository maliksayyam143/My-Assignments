// Callback function
//What are callback functions and why we use them?
// 1. Such functions that are passed as an argument to other function
// 2. Executed after a particular task is completed
// 3. Mostly used in asynchrous programing and event handling

//Use cases of callback functions:
//1. Asynchronous Operations: In scenarios where tasks take time to complete (like reading files, making API requests), JavaScript doesn't wait for these tasks to finish before moving on to the next line of code. Callbacks allow you to specify what should happen once these tasks complete.

//2. Event Handling: Callbacks are commonly used in event-driven programming. For instance, in web development, when a user clicks a button or submits a form, a callback function can be triggered to handle that event.

//3. Modular and Reusable Code: Callbacks promote modular and reusable code. You can create generic functions that can take different callback functions as arguments, allowing you to reuse the same function with different behaviors

// example 1
console.log("HI");
setTimeout(function cb1() {
    console.log("cb1");
}, 5000);
setTimeout(() => {
    console.log("cb2");
    
}, 2000);
console.log("Bye");


// example 2
console.log("hi");
setTimeout(()=>{
    console.log("CB1");
},0);
console.log("bye");



// Simple Callback Function:

type Callback = {
    () : void;
}
 
// In this function name is a parameter and callback is a function  
function greet(name:string,callback:Callback):void{
    console.log(`Hello, ${name}!`);
    callback(); //invoke or function call
}

function sayGoodbye(){
    console.log(`Goodbye!`);
}

function sayHello(){
    console.log("Hello");    
}

greet('Sayyam',sayGoodbye);
greet('Aliyan',sayHello);

console.log("\n");


// Pratice 
function welcome(name:string,callback:Callback){
    console.log(`Hello,${name} Have a nice day!`);
    callback(); //  function call
}

function Bye(){
    console.log("Goodbye");
}

function Hi(){
    console.log("Hi, Buddy!");
}

welcome("sayyam",Bye);  // Function passed as an argument , that become a callback function.
welcome("Hamid",Hi);



console.log("\n");


//-----------------------------------------------------------------------------------------------------

//1.2 Calculator Callback Example - when function passed as an argument and become callback function
// The calculate function takes two numbers and a callback function (operationCallback).
// It uses the operationCallback to perform an operation on the provided numbers (num1 and num2).
// The result is then logged to the console.


function calculator(num1:number,num2:number,operationCallback:(n1:number,n2:number)=>number) : void{
    const result = operationCallback(num1,num2);
    console.log(`The result is : ${result}`);    
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
calculator(45,5,add);
calculator(45,5,subtract);
calculator(5,2,multiply);
calculator(40,5,divide);




//----------------------->  2. Role of callbacks: <-----------------------
//The question arises here is what if we need to execute any function after some certain delay? How can we perform this delay function as callstack doesnot wait and it keep executing whatever comes inside it, and there is no question on blocking the main thread.

//So to tackle this problem, callbacks came into play: Callbacks used to be the main way asynchronous functions were implemented in JavaScript. A callback is just a function that's passed into another function, with the expectation that the callback will be called at the appropriate time.



//----------------------------------=----- Problem 1: Callback Hell ----==--------------------------------------


//3-- Problem 1: Callback Hell: Callback hell is nested callbacks stacked below one another forming a pyramid structure. Every callback depends/waits for previous callback, thereby making a pyramid structure that effects the readibility and maintability of the code.
//Example1:

setTimeout(() => {
    console.log('Create Order');    
   setTimeout(() => {
    console.log('Payment');    
    setTimeout(() => {
        console.log('Show payment summary');        
        setTimeout(() => {
            console.log('update wallet');            
        }, 1000);
    }, 1000);
   }, 1000); 
}, 1000);

//1. Create Order
//2. Payment
//3. Show Payment Summary
//4. Update Wallet

//In callback hell scenario, the callbacks depend on each other and are often nested within each other. This nesting can lead to code that is difficult to read and maintain, as the control flow becomes deeply nested, making it challenging to understand and debug.They executed the code line by line, like synchronous works.





//--------------------------------------  Probelm 2: Inversion of Control -----------------------------


//  Callback hell is related to the concept of "Inversion of Control" (IoC) to some extent.