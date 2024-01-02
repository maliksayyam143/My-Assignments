// Arrays: It's like a container that store value of same data type.

let numbers:number[] = [45,21,2,2.25]; // correct syntax
console.log(numbers);


let array : Array<number|string> = [1,2,3,"sayyam"]; // Alternative correct syntax
console.log(array);

let array1 : [] = [] // empty syntax 

//------->> Different Method's

// Push method : Which add value at the last
let Array : number[] = [1,2,3,4];
Array.push(5);
console.log(Array);

// Pop method : It is used to remove one value at the last,
let Array1 : string[] = ["Pakistan","Iran","China","India"];
console.log(Array1);
Array1.pop();
console.log(Array1);

// Shift method :  shift() removes the first element from an array and returns it, while unshift().
let Array2 : number[] = [1,2,3,4];
console.log(Array2);
Array2.shift();
console.log(Array2);

// Un-Shift method : It's add one value at the first.
let Array3 : number[] = [20,30,40,50];
console.log(Array3);
Array3.unshift(10);
console.log(Array3);

// Concat method : It is used to join two string value.
// Define two arrays
const Array4: string[] = ["a","b"];
const Array5: string[] = ["c"]
const concatenatedArray: string[] = Array4.concat(Array5);
console.log(concatenatedArray);


// Join(-) method : In TypeScript, the join method is used to concatenate all elements of an array into a single string. `
const Array6 : string[] = ["Apple","Orange","Banana"];
console.log(Array6);
let joinedString = Array6.join(" , ");
console.log(joinedString);

//Slice Method:In TypeScript, the slice method is used to extract a portion of an array. It does not modify the original array but returns a new array containing the elements specified by the provided start and end indices.
const Numbers:number[] = [1,2,3,4,5];
let slicedarray =  Numbers.slice(1,3);
console.log(slicedarray);


// IndexOf method : It is used to get value of key in array; By-default its start from 0 in array.
let abc : string[] = ["a","b","c"];
let indexvalue = abc.indexOf("b");
console.log(indexvalue);


// Includes method :In TypeScript, the includes method is used to check if an array includes a specific element. It returns a boolean value indicating whether the specified element is found in the array or not.
const nums : number[] = [1,5,10,3];
// Check if the array includes a specific element
let checkThree = nums.includes(3);
let check55 = nums.includes(55);
console.log(checkThree);
console.log(check55);


// Find method: In TypeScript, the find method is used to locate the first element in an array that satisfies a specified condition. It returns the first element that matches the condition, or undefined if no matching element is found.
const Persons = [ 
    {name:"sami",age :19},
    {name:"ali",age :30},
    {name:"hamid",age :40}
];
let personage30 = Persons.find(Persons=>Persons.age === 30);
let personage40 = Persons.find(Persons=>Persons.name === "hamid")
console.log(personage30);
console.log(personage40);


// FindIndex method : it is used to find the index of the first element in an array that satisfies a provided testing function. If no element satisfies the testing function, it returns -1. 
let num : number[] = [1,2,3,4,5];
const indexOfFirstEven: number = numbers.findIndex(num => num % 2 === 0);
console.log(indexOfFirstEven);

// Map method:  TypeScript, the map method is used to create a new array by applying a function to each element of an existing array. The map method doesn't modify the original array; instead, it returns a new array with the results of applying the provided function to each element of the original array.
let Map :number[] = [2,4,6,8,10];
let doublevalue = Map.map((value)=>{
    return value * 2;
});
console.log(doublevalue);


// Filter method:In TypeScript, the filter method is used to create a new array with all elements that pass a certain condition. It doesn't modify the original array; instead, it returns a new array containing only the elements that meet the specified criteria.
let numss : number[] = [54,23,3.2,65,6.5];
let FilterNum = numss.filter((value)=>{
    return value > 20;
});
console.log(FilterNum);


// Reverse method : in typescript, it is used to reverse the arrays element.
let Reverse : number[] = [1,2,3,4,5];
let reversenum = Reverse.reverse();
console.log(reversenum);


// Reduce method : In TypeScript, the reduce method is used to accumulate the values of an array into a single result. It applies a provided function against an accumulator and each element in the array (from left to right) to reduce it to a single value. The result can be of any type, not necessarily the same type as the elements in the array.
const number: number[] = [1, 2, 3, 4, 5];
// Use the reduce method to calculate the sum of all numbers
const sum: number = number.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);
console.log(sum);


// Every method :In TypeScript, the every method is used to check whether all elements in an array satisfy a given condition. It returns a boolean value indicating whether every element in the array passes the specified test.
let NUM : number[] = [2,4,6,8,10];
let alleven = NUM.every((value)=>{ // use fat arroe function
    return value % 2 === 0;
});
console.log(alleven);


// Some Method: It basically opposite to every,In TypeScript, the some method is used to check whether at least one element in an array satisfies a given condition. It returns a boolean value indicating whether some elements in the array pass the specified test.

let NUMS : number[] = [2,4,6,8,9,10];
let isodd = NUMS.some((value)=>{  // for odd checking
    return !(value % 2 === 0);
});
console.log(isodd);


// At method : It is used to get key name by it's index value.
let numberss : number[] = [3,5,7];
let at = numberss.at(1);
console.log(at);


