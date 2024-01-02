// Enums : They allow you to declare a collection of related values that can be numeric or string-based. Enums make it easier to work with a fixed set of values within your code.

// In enum's we can access both key and value. By-default the key value start from 0 in Enums.
enum color {green,red,yellow};
console.log(color.red);

enum color {Red = 1, Blue = 23, Yellow}; // they increase by 1
let c : color = color.Yellow;   
console.log(c);

enum color {orange = 1 ,bringht = 12 , name = "ali"};
let colorindex = color[12];
console.log(colorindex);


//const enum
//Whenever you use const enum it's a bit different then simple enum.
//In case of const enum we give special instructions to Typescript that whenever you use "Color", just replace it with actual numbers (1,2,3) in our case.
//So when try let a1: Color12 = Color12[3] -> TypeScript doesn’t keep track of which number belongs to which color during compilation as it replace the Color with actual number that's why Color[3] is not allowed in const enum case 
// Whereas simple enum maintain both the names and numbers at runtime

const enum Color {pink = 1 , light = "color"};
console.log(Color.pink);  //  in const enum we can only access the value , not there kry.

const enum Color {Pink = 12 , dark = 56};
// console.log(Color[12]); Error

const enum Color12 {Red = 1, Green = 2, Blue = 3}
// let a1: Color12 = Color12[3] //not allowed in const
// console.log(a1)

const enum Color13 {Red = 1, Green = 2, Blue = 3}
let a2 = Color13["Blue"] //allowed
console.log(a2)


