"use strict";
let sales = 123456789;
let course = 'typescript';
let is_published = true;
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let user = [1, 'Mosh'];
;
let mySize = 2;
console.log(mySize);
function calculateTax(income) {
    if (income < 50000)
        return income * 1.2;
    return income * 1.3;
}
let employee = {
    id: 1,
    name: 'Simon',
    retire: (date) => {
        console.log(date);
    }
};
let employee1 = {
    id: 1,
    name: 'Leo',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log(kgToLbs(10));
console.log(kgToLbs('10kg'));
//# sourceMappingURL=index.js.map