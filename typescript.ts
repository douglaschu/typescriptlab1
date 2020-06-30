//Tallest Mountain
interface Mountain {
    name: string;
    height: number;
}

let mountains: Mountain[] = [
    {
        name: 'Kilimanjaro',
        height: 19341,
    },
    {
        name: 'Everest',
        height: 29029,
    },
    {
        name: 'Denali',
        height: 20310,
    }     
]

const findNameOfTallestMountain = (array: Mountain[]): string => {
    let max = array[0];
    for (const i of array) {
        if (i.height > max.height) {
            max = i;
        }
    }
    return max.name;
}
let tallestMtn = findNameOfTallestMountain(mountains);
console.log('Tallest Mountain:');
console.log(tallestMtn);

//Products
interface Product {
    name: string;
    price: number;
}

let products: Product[] = [
    {
        name: 'Mustard',
        price: 2.25,
    },
    {
        name: 'Mayonnaise',
        price: 3.05,
    },
    {
        name: 'Mayostard',
        price: 4.25,
    },
    {
        name: 'Mustardayonnaise',
        price: 4.05,
    },
    {
        name: 'Mustmayostardayonnaise',
        price: 5.50,
    },
]

//calcAverageProductPrice
const calcAverageProductPrice = (array: Product[]): number => {
    let sum = 0;
    for (const i of array) {
        sum += i.price;
    }
    return (sum / array.length);
}

let avgPrice = calcAverageProductPrice(products);
console.log('Average product price:');
console.log(avgPrice);


//Inventory

interface InventoryItem {
    product: Product;
    quantity: number;
}

let inventory: InventoryItem[] = [
    {
        product: {
            name:  'motor',
            price: 10.00,
        },
        quantity: 10,
    },
    {
        product: {
            name: 'sensor',
            price: 12.50,
        },
        quantity: 4,
    },
    {
        product: {
            name: 'LED',
            price: 1.00,
        },
        quantity: 20,
    }
]

const calcInventoryValue = (array: InventoryItem[]): number => {
    let sum = 0;
    for (const i of array) {
        sum += ( i.product.price * i.quantity ); 
    }
    return sum;
}
let inventoryValue = calcInventoryValue(inventory);
console.log('Total value of inventory:');
console.log(inventoryValue);