// ===========>> Promises : Promise is for "eventual" completion of task. It is an object in JavaScript. It was solution of Callback Hell.
//In JavaScript, a promise is like a special kind of object that represents the eventual completion or failure of an asynchronous operation. Let's break this down in simpler terms:
//Example: Imagine ordering food online. You make a promise (place an order) to get some food delivered. The delivery might take some time, but you don't wait doing nothing. Instead, you do other things (asynchronous behavior). When the food arrives, you either enjoy your meal (fulfilled promise) or deal with a problem like a missing item (rejected promise).
let promise = new Promise((resolve, reject) => {
    let pizzaDelivery = true;
    console.log("Meat pizza is baking");
    setTimeout(() => {
        if (pizzaDelivery) {
            resolve("Pizza is Ready.");
        }
        else {
            reject("Pizza is not Ready.");
        }
    }, 5000);
});
// .then is used for resolve
promise.then((data) => {
    console.log(data);
    return data;
});
// .catch is used for reject , or to catch error
promise.catch((err) => {
    console.log(err);
});
// ========================>> Async Await <<===================
// Async function always returns a promise.
// await pauses the execution of the function until the promise is resolved.
// await can only be used inside an async function.
// await pauses the execution of its surrounding async function untill the promise is settled.
async function create_order() {
    console.log("Create Order.");
}
async function process_payment() {
    console.log("Process Payment.");
}
async function show_order_summary() {
    console.log("Show Order Summary.");
}
async function update_wallet() {
    console.log("Update Wallet.");
}
// first create order will run then process order will run , in sequence wise.
async function asynchronousBehavior() {
    await create_order(); // 1st order 
    await process_payment(); // 2st order 
    await show_order_summary(); // 3st order 
    await update_wallet(); // 4st order 
}
asynchronousBehavior();
export {};
