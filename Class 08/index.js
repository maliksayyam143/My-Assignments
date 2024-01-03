// Functions: It is a complete independent program that is used for specific function. 
//Functions in TypeScript (and JavaScript) are blocks of code that perform a specific task and can be reused throughout your program. Functions can take parameters, perform computations, and return a value. TypeScript provides several ways to define functions.
function add(a, b) {
    return a + b;
}
console.log(add(12, 5));
// An anonymous function in TypeScript (and JavaScript) is a function that doesn't have a name. You can create anonymous functions using the function keyword without specifying a function name. Anonymous functions are often used for short, one-time operations, or when passed as arguments to other functions.
// anonymous Fat Arrow Function
const Multiple = (a, b) => {
    return a * b;
};
console.log(Multiple(5, 2));
//Lambda Function :In TypeScript, lambda functions are also known as arrow functions. Arrow functions provide a more concise syntax for writing anonymous functions. They were introduced in ECMAScript 6 (ES6) and are widely used for short, one-line functions or when concise syntax is preferred.
const addArrow = (a, b) => {
    return a + b;
};
console.log(addArrow(565, 12));
function greeter1(fn) {
    //..
}
// Example function
function greetEnglish(name) {
    console.log(`Hello,${name}!!!`);
}
function greeter(fn) {
    return fn('Sayyam'); //callling
}
greeter(greetEnglish);
// Three concept of First Class Function:
// 1. Assigning a function to a variable is known as First Class Function.
let a = function () {
    console.log('This is test function');
};
a();
// 2. passing a function as an argument to another function is known as First Class Function.
function b() {
    return 'hello';
}
function main(fun, name) {
    console.log(fun(), name);
}
main(b, "Sayyam");
// 3. Returning a function to another function  is known as First Class Function.
function A() {
    return function a() {
        console.log("This is function a.");
    };
}
A()(); // Simply, We call Inner function with outter function .That why we use ()();
//* Named function with optional parameters
// function fullname(firstName:string,lastName?:string){
//     if(lastName){
//         return firstName+ " " + lastName;
//         // return `${firstName} ${lastName}`
//     }else{
//         return firstName
//     }
// }
// console.log(fullname("Sayyam","Shahid"));
// console.log(fullname("Sayyam"));
// console.log(fullname("Sayyam","Shahid","ali")); error
//* Named function Default parameters : If we enter only first name , then function by-default enter second value.
// function fullname(firstName:string,lastName:string ="shahid"){
//     if(lastName){
//         return firstName+ " " + lastName;
//     }else {
//         return firstName;
//     }
// }
// console.log(fullname("sayyam"));
//Function overloading: In TypeScript, we can achieve function overloading by providing multiple function signatures for the same function name. TypeScript will then use type inference to determine the appropriate function implementation based on the provided arguments. 
// function addd(arg1: string, arg2: string): string;//option 1
// function addd(arg1: number, arg2: string): string;//option 2
// function addd(arg1: number, arg2: number): number;//option 3
// function addd(arg1: boolean, arg2: boolean): boolean;//option 4
// function addd(arg1: any, arg2: any): any {
//     return arg1 + arg2;
// }
// addd(33,"abc")
// addd(1,2)
// addd("Abc","ee")
// addd(true,false)
const Add = (n1, n2) => {
    return n1 + n2;
};
const result = Add(5, 5);
const result1 = Add("sayyam", "shahid");
const result2 = Add(true, false);
console.log(result);
console.log(result1);
console.log(result2);
//Rest Parameters - countless parameters
function buildName12(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}
function buildName13(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName12("Joseph", "Samuel", "Lucas", "MacKinzie");
console.log(employeeName);
// Rest Paramerters , Countless Parameters : In TypeScript,  the rest parameter allows you to represent an indefinite number of parameters as an array. It is indicated by the ellipsis (...) followed by the parameter name. Rest parameters are useful when you want to work with a variable number of arguments within a function.
function buildName1(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}
let Emoloyes = buildName1("Ali", "Hamid", "Sayyam");
console.log(Emoloyes);
function buildName2(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}
let persons = buildName2("ahmed", "hamza", "sarmad", "saad");
console.log(persons);
export {};
