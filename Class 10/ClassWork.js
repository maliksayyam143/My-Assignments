// A Promise in JavaScript is a way to handle asynchronous operations. It has three states:
// Pending: The initial state when the Promise is created.
// Fulfilled (or Resolved): The state when the asynchronous operation is successful.
// Rejected: The state when an error or issue occurs during the asynchronous operation.
function delay(milliseconds) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, milliseconds);
    });
}
//Using `then`, `catch`, and `finally`  (Method Chaining):
//   In JavaScript, method chaining is when you do a bunch of actions on an object one after another, without pausing in between. 
//   It's like telling a story of tasks for the computer to follow, step by step.
delay(1000)
    .then(() => {
    console.log('The delay is over');
})
    .catch((error) => {
    console.error('Something went wrong:', error);
})
    .finally(() => {
    console.log('This is always executed');
});
export {};
