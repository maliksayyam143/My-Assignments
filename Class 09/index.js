// 1. Asynchronous behaviour and callstack
//2-- Role of callbacks
//3-- Problem 1: Callback Hell
//4-- Probelm 2: Inversion of Control
// --------------------------------------- These concept we will cover ----------------------------------------
// 1. Asynchronous behaviour and callstack:
// js is single thereaded language, they executed code line by line. like interpretter.But, they can't wait for any function.
// const a = "Sayyam";
// console.log(a);       These executed line by line
// const b = "Shahid";
// console.log(b);
// As JS is single threaded language .
//  It has 1 call stack and can perform single operation at a time.
//  Call stack present inside the JS engine.
//  Let's take an example and determine how call stack works
// This an example of call stack.
console.log("Starting"); // Basically in this line  console is added to call stack and then executed,when it's executed and it will remore from call stack and it will display on Browser console.
setTimeout(function () {
    console.log("Running1");
}, 3000);
setTimeout(() => {
    console.log("Running2");
}, 5000);
console.log("Ending");
// Call stack works on LIFO (last in first out) data structure. Whenever any JS program runs, GEC (global execution context) is created and push inside the call stack.  GEC => It runs whole JS code line by line.
// We can also said Call stack work on FILO (First In Last Out). The LIFO AND FILO are both same principle's.
// Q: What happens when you have function call in the Call Stack that take a huge amount of time to be processed?
// Ans: As we know JS engine doesn't wait for anything whatever comes inside it, it immediately execute it otherwise it will block the main thread and your API is no longer efficient and your application is stuck. For this we provide asynchronous behaviors using callback functions.
// example 1
function a() {
    console.log("a");
}
a();
console.log("End");
// example 2
// Callback function example with setTimeout
console.log("HI"); // Display  first
setTimeout(function cb1() {
    console.log("Cb1"); // Display  last, after 5000 milliseconds
}, 5000);
console.log("BYE"); // Display  second
console.log("a"); // Display  third
console.log("b"); // Display  fourth
export {};
// ---------------------------- These are example of call-back function ------------------------------------------
