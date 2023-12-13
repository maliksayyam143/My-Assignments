// // // ## **Task 1:**
// // **Task Description:**
// // 1. **Scenario:**
// // You are tasked to simulate a simple shopping experience using conditional statements and loops at a supermarket.
// // 2. **Requirements:**
// //     - Create a TypeScript program that simulates a shopping scenario with multiple conditions.
// //     - Utilize if-else, if-else if-else statements for decision making based on different scenarios encountered while shopping.
// //     - Incorporate nested loops to simulate actions within various sections of the supermarket.
// // 3. **Functionalities to Include:**
// //     - **Scenario 1 - Buying Groceries:**
// //         - Simulate buying fruits, vegetables, and groceries.
// //         - Apply if-else statements to check specific conditions:
// //             - Check if the customer wants fruits or vegetables.
// //             - Based on the choice, suggest different items available and their prices.
// //             // - Display the total bill.
// // - **Scenario 2 - Checking Discounts:**
// //     - Introduce a discount scenario based on the total bill amount.
// //     - Use if-else if-else statements to apply discounts:
// //         - If the bill amount is above a certain value, apply a discount.
// //         - Display the discounted total.
import inquirer from 'inquirer';
// async function buyGroceries() {
console.log("Wellcome to Supermarket.");
const personresponse = await inquirer.prompt([{
        type: 'list',
        name: 'choice',
        message: 'What do you want to buy?',
        choices: ['fruit', 'vegetable', 'Sports']
    }]);
const choice = personresponse.choice;
let selectedItems = [];
let totalBill = 0;
if (choice === 'fruit') {
    let fruit = [
        { name: 'Apple', price: 200 + " rupees kilo" },
        { name: 'Mango', price: 250 + " rupees kilo" },
        { name: 'Banana', price: 100 + "rupess dargen" }
    ];
    console.log(fruit);
    const fruitResponse = await inquirer.prompt([
        {
            type: 'list',
            name: 'selectedFruit',
            message: 'Select a fruit which one you buy:',
            choices: fruit.map(fruit => fruit.name)
        },
        {
            type: 'number',
            name: 'quantity',
            message: 'Enter the quantity:',
            default: 1
        }
    ]);
    const selectedFruit = fruitResponse.selectedFruit;
    const price = fruit[selectedFruit];
    const quantity = fruitResponse.quantity;
    totalBill = selectedFruit * quantity;
    selectedItems.push({ name: selectedFruit.name, quantity, totalBill });
}
else if (choice === 'vegetable') {
    let vegetable = [
        { name: 'Carrot', price: 200 + " rupees kilo" },
        { name: 'Potato', price: 250 + " rupees kilo" },
        { name: 'Onion', price: 100 + " rupees kilo" }
    ];
    console.log(vegetable);
    const vegetableResponse = await inquirer.prompt([
        {
            type: 'list',
            name: 'selectedvegetable',
            message: 'Select a fruit:',
            choices: vegetable.map(vegetable => vegetable.name)
        }
    ]);
    const selectedFruit = vegetableResponse.selectedvegetable;
    const price = vegetable[selectedFruit];
}
else if (choice === 'Sports') {
    let sports = [
        { name: 'Hockey', price: 4500 },
        { name: 'Bat', price: 2500 },
        { name: 'Football', price: 3500 }
    ];
    console.log(sports);
    const sportsresponse = await inquirer.prompt([{
            type: 'list',
            name: 'selectedsport',
            message: 'Select Sports products.',
            choices: sports.map(sports => sports.name)
        }]);
    const selectedsport = sportsresponse.selectedsport;
    const price = sports[selectedsport];
}
//  }
// buyGroceries();
// - **Scenario 3 - Checkout Process:**
//     - Simulate the checkout process.
//     - Use nested loops to ask for payment methods:
//         - First, ask the user for the preferred payment method (nested loop for payment options).
//         - Display a confirmation message based on the payment method chosen.
console.log(" Proceed to Checkout ");
const paymentoptions = ['Easypaisa', 'Credit Card', 'Debit Card', 'Cash'];
let payment = await inquirer.prompt([{
        type: 'list',
        name: 'receivedpayment',
        message: 'Choose a payment method for payment.',
        choices: paymentoptions
    }]);
if (payment.name === "Easypaisa") {
    console.log(`Thank you for shopping with us! Your payment method is Easypisa.`);
}
else if (payment.name === " Credit Card") {
    console.log(`Thank you for shopping with us! Your payment method is Credit Card.`);
}
else if (payment.name === " Debit Card") {
    console.log(`Thank you for shopping with us! Your payment method is Debit Card.`);
}
else if (payment.name === " Cash") {
    console.log(`Thank you for shopping with us! Your payment method is Cash.`);
}
console.log("*TasK 1 is completed Here!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!.");
