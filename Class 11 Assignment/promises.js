// Promises : It wa s commitment for perform certain task
const reqDefine = new Promise((reslove, reject) => {
    let resloved = true;
    if (resloved) {
        reslove("Requirement Define");
    }
    else {
        console.log("Requirement not Define");
    }
});
const compare = new Promise((reslove, reject) => {
    setTimeout(() => {
        reslove("Research and Compare.");
    }, 3000);
});
const available = new Promise((reslove, reject) => {
    setTimeout(() => {
        reslove("Check Availability and Prices.");
    }, 3000);
});
const Payment = new Promise((reslove, reject) => {
    setTimeout(() => {
        reslove("Payment made and booked.");
    }, 3000);
});
reqDefine
    .then((res) => {
    console.log(res);
    return compare;
})
    .then((res) => {
    console.log(res);
    return available;
})
    .then((res) => {
    console.log(res);
    return Payment;
})
    .catch((res) => {
    console.log(res);
})
    .finally(() => {
    console.log("Finally");
});
export {};
