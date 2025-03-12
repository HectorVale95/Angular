

interface Product{
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Samsung Galaxy S21',
    price: 1000
}

const {description, price} = phone;
console.log('Description: ', description);
console.log('Price: ', price);

const tablet: Product = {
    description: 'Samsung Galaxy Tab S7', 
    price: 800
}
const {description: tabletDescription, price: tabletPrice} = tablet;
console.log('Description: ', tabletDescription);
console.log('Price: ', tabletPrice);

interface taxCalculationOptions{
    tax: number;
    products: Product[];
}

//function taxCalculation(options: taxCalculationOptions):[number, number] {
//function taxCalculation({tax,products}: taxCalculationOptions):[number, number] {
function taxCalculation(options: taxCalculationOptions):[number, number] {

const{ tax, products} = options;

    let total = 0;

    products.forEach(({price}) => {
        total += price;
    });

    return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 0.16;


const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: tax,
})


console.log('Total: ', total);
console.log('Total with tax: ', taxTotal);






export{}