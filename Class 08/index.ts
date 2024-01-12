// Functions: It is a complete independent program that is used for specific function. 
//Functions in TypeScript (and JavaScript) are blocks of code that perform a specific task and can be reused throughout your program. Functions can take parameters, perform computations, and return a value. TypeScript provides several ways to define functions.

function add(a:number,b:number){
    return a+b;
}
console.log(add(12,5));


// An anonymous function in TypeScript (and JavaScript) is a function that doesn't have a name. You can create anonymous functions using the function keyword without specifying a function name. Anonymous functions are often used for short, one-time operations, or when passed as arguments to other functions.
// anonymous Fat Arrow Function
const Multiple =  (a:number,b:number) =>{
    return a*b;
}
console.log(Multiple(5,2));


//Lambda Function :In TypeScript, lambda functions are also known as arrow functions. Arrow functions provide a more concise syntax for writing anonymous functions. They were introduced in ECMAScript 6 (ES6) and are widely used for short, one-line functions or when concise syntax is preferred.
const addArrow = (a:number,b:number): number => {
    return a+b;
}
console.log(addArrow(565,12));


//============================ FIRST CLASS FUNCTION ==============================
//The ability of function to be used as a value and can be passed this as an argument to another function and can be returned from the function is called as first class function.
//First class function = first class citizens (refer by this in some books and articles)

type greeterfunction = (a:string) => void;
// function greeter1(fn:greeterfunction){ // declaration of function
//     //..
// }

// Example function
function greetEnglish(name:string):void{
    console.log(`Hello,${name}!!!`);
}

function greeter(fn:greeterfunction){
    return fn('Sayyam'); //callling
}

greeter(greetEnglish);



// Three concept of First Class Function:
// 1. Assigning a function to a variable is known as First Class Function.
let a = function(){
    console.log('This is test function');
}
a();

// 2. passing a function as an argument to another function is known as First Class Function.
function b(){
    return 'hello';
}
function main(fun:() => string,name:string){
    console.log(fun(),name);    
}
main(b,"Sayyam");


// 3. Returning a function to another function  is known as First Class Function.
function A(){
    return function a(){
        console.log("This is function a.");
    }
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

const Add = <T,B>(n1:T,n2:B)=>{
    return (n1 as any) + (n2 as any);
}
const result = Add<number,number>(5,5);
const result1 = Add<string,string>("sayyam","shahid");
const result2 = Add<boolean,boolean>(true,false);
console.log(result);
console.log(result1);
console.log(result2);




//Rest Parameters - countless parameters : In TypeScript,  the rest parameter allows you to represent an indefinite number of parameters as an array. It is indicated by the ellipsis (...) followed by the parameter name. Rest parameters are useful when you want to work with a variable number of arguments within a function.

function buildName1(firstName:string,...restOfName:string[]){
    return firstName + " " + restOfName.join(" ");
}
let Emoloyes  = buildName1("Ali","Hamid","Sayyam");
console.log(Emoloyes);

function buildName2(firstName:string,...restOfName:string[]){
    return firstName+ " " + restOfName.join(" ");
}
let persons = buildName2("ahmed","hamza","sarmad","saad");
console.log(persons);


