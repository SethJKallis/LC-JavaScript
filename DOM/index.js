let btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
    document.write('Hello World')
});

// TERNARY OPERATOR
let age = 17
let isQualified = age < 17 ? "You Qualify" : "You Do Not Qualify"
console.log(isQualified)

console.log('-----------------')
////////////////////////////////////////////////////////////

// OTHER OPERATOR (,)
// (,) RETURNS THE LAST VALUE AFTER EVALUATING ALL VALUES
let results = (2,4,6)
console.log(results)

console.log('-----------------')
//////////////////////////////////////////////////////////

// TYPEOF OPERATOR (only displays th data type)
// (typeof) RETURNS THE TYPE OF THE VARIABLE
let firstName = 'Seth';
console.log(typeof(age))
console.log(typeof(firstName))

console.log('-----------------')
//////////////////////////////////////////////////////////

let num1 = new Number(16);
let num2 = 13;
console.log(num1)
console.log(num2)

// INSTANCEOF (tests whether an object was created using a constructor function)
// AGE IS NOT AN INSTANCEOF THE CONSTRUCTOR NUMBER
console.log(age instanceof Number)
// num1 IS AN INSTANCEOF THE CONSTRUCTOR NUMBER
console.log(num1 instanceof Number)

// DIFFERENCE BETWEEN A VARIABLE AND AN INSTANCE OF A CONSTRUCTOR FUNCTION
// a variable is a placeholder that contains a value

// an instance has all the references that is within your constructor function/ can access all the properties inside the constructor function
// when using (new) keyword, you create an INSTANCE

console.log('-----------------')
///////////////////////////////////////////////////////////

// BITWISE OPERATOR (checks one binary number to another binary number and RETURNS a binary number)(true/false basis)

//  (&)(and), (|)(or), (^)(XOR), (~)(not), (<<)(left shift), (>>)(right shift)

// (&)(and) BOTH ARE REQUIRED TO BE TRUE

// (|)(or) ONLY ONE IS REQUIRED TO BE TRUE

// (^)(xor) REQUIRES ONE TO BE TRUE AND ONE OTHER TO BE FALSE TO RETURN TRUE, IF ALL ARE TRUE OR FALSE, RETURNS FALSE

// (~)(not) ADDS ONE AND RETURNS IT AS A NEGATIVE NUMBER / HOMEWORK

// (<<)(left shift) SHIFTS BINARY NUMBER IN THE TABLE TO THE LEFT

// (>>)(right shift) SHIFTS BINARY NUMBER IN THE TABLE TO THE RIGHT

let andBitOP = 15&7&8;

let orBitOp = 20|15|9;

let xorBitOp = 15^25;

let notBitOp = ~-13;

let leftShiftBitOp = 12<<2;

let rightShiftBitOp = 15>>2;

console.log(andBitOP)
console.log(orBitOp)
console.log(xorBitOp)
console.log(notBitOp)
console.log(leftShiftBitOp)
console.log(rightShiftBitOp)

//////////////////////////////////////////////////////////

