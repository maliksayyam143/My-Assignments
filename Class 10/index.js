function greeter(fn) {
    fn("Sayyam"); // function call 
}
// function define
function greetEnglish(name) {
    console.log(`Hello, ${name}. `);
}
// function define
function greetFrench(name) {
    console.log(`Bonjour, ${name}. `);
}
greeter(greetEnglish); //func call
greeter(greetFrench); // func call
//=============>>> name function with optional parameter
function fullName(firstName, lastName) {
    if (lastName) {
        console.log(`My name is ${firstName} ${lastName}.`);
    }
    else {
        console.log(`My name is ${firstName}. `);
    }
}
;
fullName("Sayyam", "Shahid"); //func call
fullName("Sayyam"); //func call
//=============>>> name function with defualt parameter
function fullname(firstName, lastName = "Shahid") {
    if (lastName) {
        console.log(` ${firstName} ${lastName}.`);
    }
    else {
        console.log(` ${firstName} `);
    }
}
;
fullname("Sayyam", "& Aliyan"); //func call
fullname("Aliyan"); //func call
//=============>>> names function with rest parameter.
function names(name, ...restOfNames) {
    console.log(`${name.toUpperCase()} ${restOfNames.join(" ").toUpperCase()} `);
}
names("ali", "sayyam", "amir", "qayyum");
function addd(arg1, arg2) {
    return arg1 + arg2;
}
console.log(addd("Hello", "World")); //option 1
console.log(addd(1, "World")); //option 2
console.log(addd(45, 5)); //option 3
console.log(addd(true, false)); //option 4
// main function declaration
function greet(name, callBack) {
    console.log(`Hello , ${name}.`);
    callBack();
}
// function define
function bye() {
    console.log("GoodBye!");
}
// function define
function Hi() {
    console.log("Have a nice day!");
}
// main function called in which we pass another function in their argument , which known as CallBack Function.
greet("Sayyam", Hi);
greet("Sayyam", bye);
// ==========>> CallBack Hell : Nested callback function called callback hell.
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
export {};
