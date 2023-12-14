// Type compatibility in TypeScript refers to the rules that determine if one type can be assigned to another type. TypeScript uses a structural type system, which means that types with the same structure are considered compatible, regardless of their explicit declaration. This is different from a nominal type system, where compatibility is based on explicit type declarations or names.

// TypeScript uses a process called "duck typing" or "structural typing" for object compatibility.
interface Points {
    x : number,
    y : number,
}
 let p1 : Points = {x:5,y:54}
 let p2 : Points = {x:50,y:254}
// Both p1 and p2 are same so we can say that p1 = p2 or p2 = p1
 p1 = p2;
 p2 = p1;










 