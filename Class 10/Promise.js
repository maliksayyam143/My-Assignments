// Q1:  What is Promise?
// A promise is a commitment by someone to do or not do something.
// Promise Object Properties: A JavaScript Promise object can be:
// 1. Pending
// 2. Fulfilled (resolve)
// 3. Rejected
// The Promise object supports two properties: State and Result.
// 1. While a Promise Object is "Pending" (Working), the result is undefined.
// 2. When a Promise Object is "Fulilled", the result is a value.
// 3. When a Promise Object is "Rejected", the result is an error object.
// Syntax: let mypromise = new Promise(()=>{})
//  Promise takes two parameter's. resolve, and rejected
// Promise is used to fetch data, fetching data takes some time that why we using Promise.
let myPromise = new Promise((resolve, Rejected) => {
    console.log("Promise Pending");
    setTimeout(() => {
        // console.log("Promise Resolved");
        // resolve(["Sayyam","Farhan"]);
        // console.log("Promise Rejected");
        // Rejected(new Error("Data Fetch Failed!"));
        let data = [37401, 37421, 37212, 371513, 565026];
        if (data) {
            console.log("Promise Resolved");
            resolve(data);
        }
        else {
            console.log("Promise Rejected");
            Rejected(new Error("Data Fetch Failed!"));
        }
    }, 3000);
});
// To get data , we using the .then : They takes a callback function.
myPromise.then((respone) => {
    console.log(respone);
});
// When error occur's : They takes a callback function.
myPromise.catch((error) => {
    console.log("Your data will not fetched , Because of some technical issue!!");
});
myPromise.finally(() => {
    console.log('This is always executed');
});
export {};
