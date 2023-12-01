// - **Scenario 1 - Modify Array with Methods:**
//     - Initialize an array with some initial elements.
//     - Demonstrate the usage of the following array methods:
//         - **`push`**: Add new elements to the end of the array.
//         - **`pop`**: Remove the last element from the array.
//         - **`shift`**: Remove the first element from the array.
//         - **`unshift`**: Add new elements to the beginning of the array.
console.log("Modifing the Arrat by different Methods");
let a = [4,5,6,9,8,2];
console.log(a[0]);
console.log(a[5]);
console.log(a);

//  Now add number number in array bu push, so
let b = [5,1,3,4];
b.push(4,8);
console.log(b);

// Now remove 1 number from the array by pop, so
let c = [4,9,3,2,4,7,5];
c.pop();
console.log(c);

// Now remove 1 element from first by shift, so
let g = [4,4,6,6,1,2,6];
g.shift();
console.log(g);

// Add new elements to the beginning of the array by unshift, so
let f = [4,4,6,6,1,2,6];
f.unshift(4,5);
console.log(f);


// /////////////////////////////////////////////////////////////////////////////////////////////////////////
// - **Scenario 2 - Subarray Creation:**
//     - Implement the use of **`splice`** and **`slice`** to create subarrays from the original array:
//         - **`splice`**: Create a subarray by removing elements from the original array.
//         - **`slice`**: Create a subarray without modifying the original array.
console.log(" Subarray Creation");
// slice example
let friut=["apple", "mango", "banana", "orange","lemon"]
let friut1=[1,4];
friut.slice(1,4);
console.log(friut.slice(1,4));
console.log(friut);

let cities = ["Bawalpur", "lahore", "karachi", "rawat",];
cities.splice(2, 0, "Islamabad", " pindi");
console.log(cities);