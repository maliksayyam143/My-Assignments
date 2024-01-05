import chalk from "chalk";
// Call back function is a way to used function in javascript.Callback function mean call me back..
// Like when we call function it will give's output, but in case of Call back we set a timer.
// Hum callback my condition dyty ha jab tak yeh part complete ni huta , tab tak is function ko call ni karna ha.
// This behaviour our comes in asynchronous. We also said async to asynchronous it's mean takes some time.
//-------------------- I will making a callback hell function -----------------------
//  Let's we uses the AJAX to fetch data from api's, In which we set condition after 2 seconds we can fetch roll numbers of student's.
// APi , 
//1. 2s student roll no
//2. 2nd name and age
//3. 2s Gender 
// sary ik ky uper ik depend hai
//  Call Hell mean , call back inside callback / nested callBacks are called callback hell.
const getRollNo = () => {
    setTimeout(() => {
        console.log(chalk.greenBright.bold("API Geeting RollNumber!!"));
        let roll_no = [1, 2, 3, 4, 5];
        console.log(chalk.yellowBright(roll_no));
        setTimeout(() => {
            console.log(chalk.bold.greenBright("API Geeting Name and age!!"));
            const bioData = {
                name: "Sayyam",
                age: 19
            };
            console.log(chalk.yellowBright(`My roll no is ${roll_no[2]} . My name is ${bioData.name} and I am ${bioData.age} year old`));
            setTimeout((name) => {
                console.log(chalk.bold.greenBright("API Geeting there Gender!!"));
                let Gender = 'male';
                console.log(chalk.yellowBright(`My roll no is ${roll_no[2]} . My name is ${bioData.name} and I am ${bioData.age} year old. I am an alpha ${Gender}`));
            }, 2000, bioData.name);
        }, 2000), roll_no[2]; // I will passing argument in this function, because they depends upon 
    }, 2000);
};
getRollNo();
