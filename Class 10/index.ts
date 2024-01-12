// ===========>> First class function   <<=========================
type greetFunction = (a:string) => void; // define the type

function greeter(fn:greetFunction){
    fn("Sayyam");  // function call 
}

// function define
function greetEnglish(name:string){
    console.log(`Hello, ${name}. `);
}

// function define
function greetFrench(name:string){
    console.log(`Bonjour, ${name}. `);
}

greeter(greetEnglish); //func call
greeter(greetFrench); // func call




//=============>>> name function with optional parameter  <<=========================
function fullName(firstName:string,lastName?:string){
    if(lastName){
        console.log(`My name is ${firstName} ${lastName}.`); 
    }else{
        console.log(`My name is ${firstName}. `);
    }
};

fullName("Sayyam","Shahid"); //func call
fullName("Sayyam"); //func call




//=============>>> name function with defualt parameter  <<=========================
function fullname(firstName:string,lastName="Shahid"){
    if(lastName){
        console.log(` ${firstName} ${lastName}.`); 
    }else{
        console.log(` ${firstName} `);
    }
};
fullname("Sayyam","& Aliyan")//func call
fullname("Aliyan");//func call





//=============>>> names function with rest parameter.  <<=========================
function names(name:string,...restOfNames:string[]){
    console.log(`${name.toUpperCase()} ${restOfNames.join(" ").toUpperCase()} `);
    
}
names("ali","sayyam","amir","qayyum");





// ==========>> Function Overloading   <<=========================
function addd(arg1:string, arg2:string): string; //option 1 
function addd(arg1:number, arg2:string): string; //option 2 
function addd(arg1:number, arg2:number): number; //option 3 
function addd(arg1:boolean, arg2:boolean): boolean; //option 4
function addd(arg1:any, arg2:any): any{  
    return arg1 + arg2;
}
    
console.log(addd("Hello","World")); //option 1
console.log(addd(1,"World")); //option 2
console.log(addd(45,5)); //option 3
console.log(addd(true,false)); //option 4





// =============>> Callack Function   <<=========================
// defining type of callback
type CallBack = {
    () : void
}

// main function declaration
function greet(name:string,callBack:CallBack){
    console.log(`Hello , ${name}.`);
    callBack();    
}

// function define
function bye(){
    console.log("GoodBye!");
}

// function define
function Hi(){
    console.log("Have a nice day!");
}

// main function called in which we pass another function in their argument , which known as CallBack Function.
greet("Sayyam",Hi);
greet("Sayyam",bye);





// ==========>> CallBack Hell : Nested callback function called callback hell. <<=========================
// Easy Example of callback hell.
setTimeout(() => {
    console.log("Spring");
    
    setTimeout(() => {
        console.log("Summer"); 

        setTimeout(() => {
            console.log("Fall");

            setTimeout(() => {
                console.log("Winter");

            }, 1000);

        }, 2000);

    }, 3000);

}, 4000);