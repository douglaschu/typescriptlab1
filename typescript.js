var mountains = [
    {
        name: 'Kilimanjaro',
        height: 19341
    },
    {
        name: 'Everest',
        height: 29029
    },
    {
        name: 'Denali',
        height: 20310
    }
];
var findNameOfTallestMountain = function (array) {
    var max = array[0];
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var i = array_1[_i];
        if (i.height > max.height) {
            max = i;
        }
    }
    return max.name;
};
var tallestMtn = findNameOfTallestMountain(mountains);
console.log('Tallest Mountain:');
console.log(tallestMtn);
var products;
[
    {
        name: 'Mustard',
        price: 2.25
    },
    {
        name: 'Mayonnaise',
        price: 3.05
    },
    {
        name: 'Mayostard',
        price: 4.25
    },
    {
        name: 'Mustardayonnaise',
        price: 4.05
    },
    {
        name: 'Mustmayostardayonnaise',
        price: 5.50
    },
];
//calcAverageProductPrice
var calcAverageProductPrice = function (array) {
    var sum = 0;
    for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
        var i = array_2[_i];
        sum += i.price;
    }
    return (sum / array.length);
};
var avgPrice = calcAverageProductPrice(products);
console.log('Average product price:');
console.log(avgPrice);
var inventory = [
    {
        product: {
            name: 'motor',
            price: 10.00
        },
        quantity: 10
    },
    {
        product: {
            name: 'sensor',
            price: 12.50
        },
        quantity: 4
    },
    {
        product: {
            name: 'LED',
            price: 1.00
        },
        quantity: 20
    }
];
var calcInventoryValue = function (array) {
    var sum = 0;
    for (var _i = 0, array_3 = array; _i < array_3.length; _i++) {
        var i = array_3[_i];
        sum += i.product.price * i.quantity;
    }
    return sum;
};
var inventoryValue = calcInventoryValue(inventory);
console.log('Total value of inventory:');
console.log(inventoryValue);
