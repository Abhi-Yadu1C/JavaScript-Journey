//Declaring Numbers
let x = 42;         // integer
let y = 3.14;       // floating point number
let z = -7;         // negative number
let big = 1e6;      // exponential notation (1 million)

/*
JavaScript me sirf ek hi number type hota hai: Number.
Ye integers + decimals + NaN + Infinity sabko handle karta hai.
Agar aapko bohot bade integers chahiye (jo Number se handle nahi hote), tab BigInt use karte hain.

=====>>>>    It is a 64-bit floating-point (IEEE 754 standard).

⚙️ IEEE 754 — What’s that?
It’s an international standard for how to store and calculate floating-point numbers in computers.
All modern languages (JavaScript, Python, C++, etc.) follow this, so:
✅ Numbers behave the same across platforms
✅ You get consistency in results
*/

// 🔁 Common Operations
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1 (modulus)

// 📐 Useful Number Methods

let num = 3.14159;

num.toFixed(2);     // "3.14" — formats to 2 decimal places
num.toString();     // "3.14159"
Number.isInteger(num); // false

// ⚠️ Special Number Values
typeof NaN;         // "number" (but means "Not-a-Number")
typeof Infinity;    // "number"
1 / 0;              // Infinity
"abc" / 3;          // NaN

//🧠 Convert String to Number
Number("123");      // 123
parseInt("123.45"); // 123
parseFloat("123.45"); // 123.45
+"123";             // 123

// 🧠 Logical Operators in JavaScript
/*Operator      	Name	Description	Example	Result
&&	           Logical AND	True if both are true	true && false	false
``	           Logical OR	True if at least one is true
!	           Logical NOT	Reverses the truth value	!true	false
??	         Nullish Coalescing	Returns right side if left is null or undefined	null ?? 'Hello'	'Hello'
*/

let p = true;
let k = false;

console.log(p && k);  // false (AND)
console.log(p || k);  // true  (OR)
console.log(!p);      // false (NOT)

let name = null;
console.log(name ?? "Guest"); // "Guest" (Nullish Coalescing)
