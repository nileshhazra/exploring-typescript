let sales: number = 123_456_789;
let course: string = 'typescript';
let is_published: boolean = true;

function render(document: any) {
    console.log(document);
}

// array
let numbers: number[] = [1, 2, 3];

// tuple (useful when in key-value pairs)
let user: [number, string] = [1, 'Mosh'];

// enums - using const - compiler will generate more optimized code
const enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Medium;
console.log(mySize);

// functions
function calculateTax(income: number): number {
    if(income < 50_000)
        return income * 1.2 ;
    return income * 1.3;
}

// objects
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
     id: 1,
     name: 'Simon',
     retire: (date: Date)=> {
        console.log(date);
     }};