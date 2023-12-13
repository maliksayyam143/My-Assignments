// //How to define Object's types

import inquirer from "inquirer";

// //1st method - directly define while declaring a variable
// let Student : {
//     name: string,
//     class : string
// } = {
//     name : "wania",
//     class : "AA65"
// }

// let uni : string = "Air"

// Student = {
//     name : "wania",
//     class : "AA65",
// }

// let name1 : string;

// name1 = "wania"

// console.log(name1);

// //method2 - using interface

// interface University {
//     id: string,
//     courses: number,
//     departments: number
// }

// let university : University = {
//     id: "AIR101",
//     courses: 10,
//     departments : 15
// }

// console.log(university.courses)

interface Company {
    id: string,
    name: string,
    departments: string|number,
    cellNo: number
} 
let company : Company = {
    id : "MS04",
    name : "Ali",
    departments : "CS",
    cellNo : +923185903219
}
console.log(`Name of person is : `+company.name+"\n");
console.log(`ID of ${company.name} is : `+company.id+"\n");
console.log(`${company.name} Work in ${company.departments} department.`+"\n");
console.log(`${company.name} cell No Provided by company is : `+company.cellNo+"\n");
