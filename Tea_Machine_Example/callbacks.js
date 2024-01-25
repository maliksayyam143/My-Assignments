// PinkTea_Machine_Example: By using Callbacks Hell Functions.
/*
step 1 : Boil Water
step 2 : Add Kashmiri Chai Tea
step 3 : Simmer with Baking Soda
step 4 : Add Salt
step 5 : Pour in Milk
step 6 : Simmer Again
step 7 : Strain Tea
step 8 : Add Sugar to Taste
step 9 : Garnish with Almonds and Cardamom
step 10 : Serve Hot
*/
function biolWater() {
    console.log("Begin by bringing 2 cups of water to a boil in a saucepan.");
}
function AddTea() {
    console.log("Added 2 teaspoons of loose leaf Kashmiri chai tea to the boiling water.");
}
function BakingSoda() {
    console.log("Adding 2 tablespoons of baking soda for the characteristic pink color.");
}
function Salt() {
    console.log("Incorporate 2 teaspoons of salt to enhance the savory flavor of the pink tea.");
}
function Milk() {
    console.log("Add 2 cups of Pour Milk to the simmering mixture, stirring well.");
}
function Simmer() {
    console.log("Allow the tea to simmer for an additional 10-15 minutes, blending the flavors.");
}
function Strain() {
    console.log("Strain the tea to remove leaves and residue using a fine mesh strainer or cheesecloth.");
}
function Sugar() {
    console.log("Add Sugar to Taste: Sweeten the tea with sugar according to your preference.");
}
function Garnish() {
    console.log(" Optionally garnish with crushed almonds and a pinch of cardamom for added flavor.");
}
function Serve() {
    console.log("Pour the pink tea into cups and enjoy the unique taste and vibrant color.");
}
// Know calling function into callbacks Hell form.
import chalk from "chalk";
console.log(chalk.yellowBright("Kashmiri Pink Tea Delight."));
console.log(chalk.blueBright("Step 1:"));
setTimeout(() => {
    biolWater(); // 1st function call
    console.log(chalk.blueBright("Step 2:"));
    setTimeout(() => {
        AddTea(); // 2nd function call
        console.log(chalk.blueBright("Step 3:"));
        setTimeout(() => {
            BakingSoda(); // 3rd function call
            console.log(chalk.blueBright("Step 4:"));
            setTimeout(() => {
                Salt(); // 4th function call
                console.log(chalk.blueBright("Step 5:"));
                setTimeout(() => {
                    Milk(); // 5th function call
                    console.log(chalk.blueBright("Step 6:"));
                    setTimeout(() => {
                        Simmer(); // 6th function call
                        console.log(chalk.blueBright("Step 7:"));
                        setTimeout(() => {
                            Strain(); // 7th function call
                            console.log(chalk.blueBright("Step 8:"));
                            setTimeout(() => {
                                Sugar(); // 8th function call
                                console.log(chalk.blueBright("Step 9:"));
                                setTimeout(() => {
                                    Garnish(); // 9th function call
                                    console.log(chalk.blueBright("Step 10:"));
                                    setTimeout(() => {
                                        Serve(); // 10th function call
                                        console.log(chalk.redBright("Thanks for Exploring the Kashmiri Pink Tea Journey with Sayyam Shahid"));
                                    }, 2000);
                                }, 2000);
                            }, 2000);
                        }, 2000);
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000);
