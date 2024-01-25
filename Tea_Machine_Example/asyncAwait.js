//Class-11:
//PinkTea_Machine_Example: Using async await
/*
PinkTea_Machine_Example:
_____________________
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
___________________
*/
function biolWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let boiling = true;
            if (boiling) {
                resolve("Begin by bringing 2 cups of water to a boil in a saucepan.");
            }
            else {
                reject("The water is not boiling.");
            }
        }, 2000);
    });
}
;
function AddTea() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Added 2 teaspoons of loose leaf Kashmiri chai tea to the boiling water.");
        }, 2000);
    });
}
;
function BakingSoda() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Adding 2 tablespoons of baking soda for the characteristic pink color.");
        }, 2000);
    });
}
;
function Salt() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Incorporate 2 teaspoons of salt to enhance the savory flavor of the pink tea.");
        }, 2000);
    });
}
;
function Milk() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Add 2 cups of Pour Milk treto the simmering mixture, stirring well.");
        }, 2000);
    });
}
;
function Simmer() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Allow the tea to simmer for an additional 10-15 minutes, blending the flavors.");
        }, 2000);
    });
}
;
function Strain() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Strain the tea to remove leaves and residue using a fine mesh strainer or cheesecloth.");
        }, 2000);
    });
}
;
function Sugar() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Add Sugar to Taste: Sweeten the tea with sugar according to your preference.");
        }, 2000);
    });
}
;
function Garnish() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(" Optionally garnish with crushed almonds and a pinch of cardamom for added flavor.");
        }, 2000);
    });
}
function Serve() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Pour the pink tea into cups and enjoy the unique taste and vibrant color.");
        }, 2000);
    });
}
import chalk from "chalk";
console.log(chalk.yellowBright("Kashmiri Pink Tea Delight.By Using Async Await Method."));
async function PinkTea_Machine_Example() {
    try {
        console.log(chalk.greenBright("Step 1:"));
        const func1 = await biolWater();
        console.log(chalk.redBright(func1));
        console.log(chalk.greenBright("Step 2:"));
        const func2 = await AddTea();
        console.log(chalk.redBright(func2));
        console.log(chalk.greenBright("Step 3:"));
        const func3 = await BakingSoda();
        console.log(chalk.redBright(func3));
        console.log(chalk.greenBright("Step 4:"));
        const func4 = await Salt();
        console.log(chalk.redBright(func4));
        console.log(chalk.greenBright("Step 5:"));
        const func5 = await Milk();
        console.log(chalk.redBright(func5));
        console.log(chalk.greenBright("Step 6:"));
        const func6 = await Simmer();
        console.log(chalk.redBright(func6));
        console.log(chalk.greenBright("Step 7:"));
        const func7 = await Sugar();
        console.log(chalk.redBright(func7));
        console.log(chalk.greenBright("Step 8:"));
        const func8 = await Garnish();
        console.log(chalk.redBright(func8));
        console.log(chalk.greenBright("Step 9:"));
        const func9 = await Garnish();
        console.log(chalk.redBright(func9));
        console.log(chalk.greenBright("Step 10:"));
        const func10 = await Serve();
        console.log(chalk.redBright(func10));
    }
    catch (err) {
        console.log(err);
    }
    console.log("Finally Complete!");
}
PinkTea_Machine_Example();
