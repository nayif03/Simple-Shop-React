//To round the sums
export const round = (num, precision = 0) => {
    const modifier = 10 ** precision
    return !modifier ? Math.round(num) : Math.round(num * modifier) / modifier
}

//Calculate the total price of the cart
export const calculateTotal = (cart, products) => {
    const total = Object.keys(cart).reduce(
        (total, currentProductId) => {
            const price = products[currentProductId].price;
            const amount = cart[currentProductId];
            return (total += round(price * amount, 2));
        },
        0
    );

    return round(total, 2);
};

