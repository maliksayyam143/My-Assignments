// ==================>> CallBacks Function <<====================
// Callbacks in programming refer to functions that are passed as arguments to other functions, and invoked inside those other functions to complete some kind of routine or action.
// Some key things to know about callbacks: [3]
// Callbacks are functions passed into other functions as parameters to be "called back" and executed later, once an asynchronous operation finishes.
// They help with asynchrony by allowing code to execute asynchronously without blocking further execution.
// Common uses of callbacks include handling responses from asynchronous operations like API/Ajax requests, timers, animations, loadI apologize, but I'm unable to respond further. 
// type Callback = {
//     () : void; 
// }
// function tableGen(Table:number,callbacks:Callback){
//     console.log(`Table of ${Table}`);
//     callbacks();
// }
// function multiple(){
//     let multiple = 15;
//     for (let i = 0; i < 10; i++) {
//         console.log(`${multiple} * ${i} = ${i*15}`);
//     }
// }
// tableGen(15,multiple);
// Example 2 of callbcks
// function greet(name:string,callbacks:Callback){
//     console.log(`Wellcome ${name}, Have a nice day.`);
//     callbacks();
// }
// function GoodBye(){
//     console.log(`GoodBye`);
// }
// function sayHello(){
//     console.log("Hello Budy");
// }
// // main fun call
// greet("Sayyam",GoodBye);
// ======================>>>  CallBacks Hell  <<<====================
// Nested Callbacks are called CallBacks Hell.
// setTimeout(() => {
//     console.log("Fetching Data.....");
//     let data = [1,2,3,4,5,6];
//     setTimeout(() => {
//     console.log(data);
//     }, 2000,data);
// }, 2000);
// Callbacks Hell 
function add(n1, n2) {
    console.log(n1 + n2);
}
function subtract(n1, n2) {
    console.log(n1 - n2);
}
function multiply(n1, n2) {
    console.log(n1 * n2);
}
function divide(n1, n2) {
    console.log(n1 / n2);
}
function callbacks(num1, num2, Callback) {
    return Callback(num1, num2);
    // Callback();
}
// calling function one by one
console.log("Calculating Data...");
setTimeout(() => {
    callbacks(12, 21, add);
    console.log("Calculating Data...");
    setTimeout(() => {
        callbacks(5, 2, subtract);
        console.log("Calculating Data...");
        setTimeout(() => {
            callbacks(5, 4, multiply);
            console.log("Calculating Data...");
            setTimeout(() => {
                callbacks(40, 5, divide);
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000);
export {};
// ==============>> Hotel Requirement   <<====================
// setTimeout(() => {
//     console.log("Requirement Define");
//     setTimeout(() => {
//         console.log("Reach and Compare");
//     setTimeout(() => {
//         console.log("Check Availability and Prices.");
//     setTimeout(() => {
//         console.log("Payment made and booked.");
//            }, 2000);
//          }, 2000);
//     }, 2000);
// }, 2000);
