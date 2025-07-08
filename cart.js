let cart = ["apple", "banana", "orange", "grape", "kiwi"];

function orderPlace(cart) {
    let lengthOfCart = cart.length;
    let price = lengthOfCart * 1000;

    for(let i = 0; i < lengthOfCart; i++) {
        setTimeout(() => {
            orderGenerator(cart[i]);
            console.log(`Order placed for ${cart[i]} at a price of ${price}`);
        }, i * 2000);
    }
}

function orderGenerator(item) {
    let orderId = Math.floor(Math.random() * 1000);
    addressDetails(orderId, item);
}

function addressDetails(orderId, item) {
    let address = "123 Main St, City, Country";
    console.log(`Order ID: ${orderId}, Item: ${item}, Address: ${address}`);
    paymentGateway(orderId, item, address);
}

function paymentGateway(orderId, item, address) {
    let paymentStatus = "Success";
    console.log(`Payment for Order ID: ${orderId}, Item: ${item}, Address: ${address} is ${paymentStatus}`);
    orderSummary(orderId, item, address, paymentStatus);
}

function orderSummary(orderId, item, address, paymentStatus) {
    console.log(`Order Summary: 
    Order ID: ${orderId}
    Item: ${item}
    Address: ${address}
    Payment Status: ${paymentStatus}`);
}

orderPlace(cart);