// PinkTea_Machine_Example: By using  Promises.
// Using then, catch and finally Method in promises
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
console.log(chalk.yellowBright("Kashmiri Pink Tea Delight.By Using Promise Chaining Method."));
console.log(chalk.greenBright("Step 1:"));
biolWater().then((res) => {
    console.log(res);
    console.log(chalk.greenBright("Step 2:"));
    return AddTea();
}).catch((err) => {
    console.log(err); // this will run when the water is not boiling
})
    .then((res) => {
    console.log(res);
    console.log(chalk.greenBright("Step 3:"));
    return BakingSoda();
})
    .then((res) => {
    console.log(res);
    console.log(chalk.greenBright("Step 4:"));
    return Salt();
})
    .then((res) => {
    console.log(res);
    console.log(chalk.greenBright("Step 5:"));
    return Milk();
})
    .then((res) => {
    console.log(res);
    console.log(chalk.greenBright("Step 6:"));
    return Simmer();
})
    .then((res) => {
    console.log(res);
    console.log(chalk.greenBright("Step 7:"));
    return Strain();
})
    .then((res) => {
    console.log(res);
    console.log(chalk.greenBright("Step 8:"));
    return Sugar();
})
    .then((res) => {
    console.log(res);
    console.log(chalk.greenBright("Step 9:"));
    return Garnish();
})
    .then((res) => {
    console.log(res);
    console.log(chalk.greenBright("Step 10:"));
    return Serve();
})
    .then((res) => {
    console.log(res);
    console.log(chalk.redBright("Thanks for Exploring the Kashmiri Pink Tea Journey with Sayyam Shahid"));
})
    .catch((err) => {
    console.log(err); // this will run when the water is not boiling, or another error will occur
})
    .finally(() => {
    console.log("This is the final step."); // this will run always, if error ouccr are not.
});
