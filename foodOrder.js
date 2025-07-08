function CheckMenu() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(OrderPlace());
            console.log("Menu checked successfully.");
        }, 3000);
    });
}

function OrderPlace() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(OrderServing());
            console.log("Order placed successfully.");
        }, 5000);
    });
}

function OrderServing() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(EatingFood());
            console.log("Order served successfully.");  
        }, 10000);
    });
}

function EatingFood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(BillPay());
            console.log("Food eaten successfully.");    
        }, 15000);
    });
}



function BillPay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(SaufEating());
            console.log("Bill paid successfully.");
        }, 2000);
    });
}

function SaufEating() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(exitHotel());
            console.log("Sauf eating completed successfully.");
        }, 2000);
    });
}

function exitHotel() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(console.log("Exited the hotel successfully."));
            console.log("Thank you for visiting!");
        }, 1000);
    });
}

CheckMenu()
    .then(() => console.log("All operations completed successfully."))