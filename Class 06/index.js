// TypeScript is a Structural Type System. A structural type system means that when comparing types, TypeScript only takes into account the members on the type.
import inquirer from "inquirer";
let ball = { diameter: 10 };
let sphere = { diameter: 20 };
sphere = ball;
ball = sphere;
let bat = { length: 58, company: "TAURO Zing", Thickness: 55, name: "bat" };
let hockey = { length: 48, company: "Drive(Duo Drive)", Thickness: 15, name: "hockey" };
// so the both interfaces are same . we can say that 
bat = hockey;
hockey = bat; // Becasuse both have same interface/properties
//   let tube : Tube = {diameter:22,length:5}
let tube = await inquirer.prompt([{
        type: "input",
        name: "diameter",
        message: "Enter Diameter of Tube?"
    },
    {
        type: "input",
        name: "lenght",
        message: "Enter Length of Tube?"
    }
]);
tube = ball;
ball = tube;
// Because a ball does not have a length, then it cannot be assigned to the tube variable. However, all of the members of Ball are inside tube, and so it can be assigned.
// TypeScript is comparing each member in the type against each other to verify their equality.
